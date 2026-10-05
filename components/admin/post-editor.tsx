"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import { publishDraft, saveDraft } from "@/app/admin/actions";
import { wordCount } from "@/lib/content/text";
import {
  ARTICLE_KINDS,
  disclaimerLocked,
  slugify,
  SOURCE_TYPES,
  type DraftRecord,
  type PathOption,
  type SourceOption,
  type TopicOption,
} from "@/lib/admin/types";

type Props = {
  draft: DraftRecord;
  topics: TopicOption[];
  sources: SourceOption[];
  paths: PathOption[];
};

export function PostEditor({ draft: initial, topics, sources, paths }: Props) {
  const router = useRouter();
  const [draft, setDraft] = useState(initial);
  const [errors, setErrors] = useState<string[]>([]);
  const [slugTouched, setSlugTouched] = useState(Boolean(initial.slug));
  const [metaTouched, setMetaTouched] = useState(Boolean(initial.meta_title));
  const [pathQuery, setPathQuery] = useState("");
  const [sourceQuery, setSourceQuery] = useState("");
  const [pending, startTransition] = useTransition();
  const locked = disclaimerLocked(draft.kind, draft.topic);

  const words = useMemo(
    () =>
      wordCount(
        [
          draft.quick_question,
          draft.quick_answer,
          draft.intro,
          ...draft.sections.flatMap((section) => [section.heading, section.content]),
          ...draft.takeaways,
          ...draft.faq.flatMap((item) => [item.question, item.answer]),
        ].join("\n"),
      ),
    [draft],
  );

  function patch(partial: Partial<DraftRecord>) {
    setDraft((current) => ({ ...current, ...partial }));
  }

  function current(): DraftRecord {
    return { ...draft, disclaimer: locked || draft.disclaimer };
  }

  function finish(result: Awaited<ReturnType<typeof saveDraft>>, published: boolean) {
    if (!result.ok) {
      setErrors(result.errors);
      if (result.draft) setDraft(result.draft);
      return;
    }
    setDraft(result.draft);
    setErrors([]);
    const next = `/admin/posts/${result.draft.id}/`;
    if (!window.location.pathname.includes(result.draft.id)) {
      router.push(next);
    } else {
      router.refresh();
    }
    if (published) setErrors([]);
  }

  function onSave() {
    startTransition(async () => {
      finish(await saveDraft(current()), false);
    });
  }

  function onPublish() {
    startTransition(async () => {
      finish(await publishDraft(current()), true);
    });
  }

  const visiblePaths = paths.filter((item) => {
    const query = pathQuery.trim().toLowerCase();
    if (!query) return true;
    return item.title.toLowerCase().includes(query) || item.path.includes(query);
  });
  const visibleSources = sources.filter((item) => {
    const query = sourceQuery.trim().toLowerCase();
    if (!query) return true;
    return (
      item.title.toLowerCase().includes(query) ||
      item.name.toLowerCase().includes(query) ||
      item.id.includes(query)
    );
  });

  return (
    <form
      className="admin-form"
      onSubmit={(event) => {
        event.preventDefault();
        onSave();
      }}
    >
      {draft.notice ? <p className="admin-note">{draft.notice}</p> : null}
      {errors.length > 0 ? (
        <div className="admin-error" role="alert">
          <p>The article was not published.</p>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <label className="stack">
        Title
        <input
          value={draft.title}
          onChange={(event) => {
            const title = event.target.value;
            patch({
              title,
              slug: slugTouched ? draft.slug : slugify(title),
              meta_title: metaTouched ? draft.meta_title : title.slice(0, 70),
            });
          }}
          required
        />
      </label>
      <label className="stack">
        Slug
        <input
          value={draft.slug}
          onChange={(event) => {
            setSlugTouched(true);
            patch({ slug: event.target.value.toLowerCase() });
          }}
          onBlur={(event) => patch({ slug: slugify(event.target.value) })}
          required
        />
      </label>
      <div className="admin-row">
        <label className="stack">
          Type
          <select
            value={draft.kind}
            onChange={(event) => patch({ kind: event.target.value as DraftRecord["kind"] })}
          >
            {ARTICLE_KINDS.map((kind) => (
              <option key={kind} value={kind}>
                {kind}
              </option>
            ))}
          </select>
        </label>
        <label className="stack">
          Topic
          <select value={draft.topic} onChange={(event) => patch({ topic: event.target.value })}>
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="stack">
        Excerpt
        <textarea
          value={draft.excerpt}
          onChange={(event) => patch({ excerpt: event.target.value })}
        />
      </label>
      <label className="stack">
        Direct-answer question
        <input
          value={draft.quick_question}
          onChange={(event) => patch({ quick_question: event.target.value })}
        />
      </label>
      <label className="stack">
        Direct answer
        <textarea
          value={draft.quick_answer}
          onChange={(event) => patch({ quick_answer: event.target.value })}
        />
      </label>
      <label className="stack">
        Intro
        <textarea value={draft.intro} onChange={(event) => patch({ intro: event.target.value })} />
      </label>

      <fieldset>
        <legend>Sections</legend>
        <p className="hint">
          Write the body here. Do not add markdown headings inside a section. One heading should be a question.
        </p>
        {draft.sections.map((section, index) => (
          <div className="repeat" key={`section-${index}`}>
            <label className="stack">
              Heading
              <input
                value={section.heading}
                onChange={(event) => {
                  const sections = draft.sections.slice();
                  sections[index] = { ...section, heading: event.target.value };
                  patch({ sections });
                }}
              />
            </label>
            <label className="stack">
              Body
              <textarea
                value={section.content}
                onChange={(event) => {
                  const sections = draft.sections.slice();
                  sections[index] = { ...section, content: event.target.value };
                  patch({ sections });
                }}
              />
            </label>
            {draft.sections.length > 1 ? (
              <button
                type="button"
                className="text-button"
                onClick={() => patch({ sections: draft.sections.filter((_, item) => item !== index) })}
              >
                Remove section
              </button>
            ) : null}
          </div>
        ))}
        <button
          type="button"
          className="text-button"
          onClick={() => patch({ sections: [...draft.sections, { heading: "", content: "" }] })}
        >
          Add section
        </button>
      </fieldset>

      <fieldset>
        <legend>Key takeaways</legend>
        {draft.takeaways.map((takeaway, index) => (
          <label className="stack" key={`takeaway-${index}`}>
            Takeaway {index + 1}
            <input
              value={takeaway}
              onChange={(event) => {
                const takeaways = draft.takeaways.slice();
                takeaways[index] = event.target.value;
                patch({ takeaways });
              }}
            />
          </label>
        ))}
        <button
          type="button"
          className="text-button"
          onClick={() => patch({ takeaways: [...draft.takeaways, ""] })}
        >
          Add takeaway
        </button>
      </fieldset>

      <fieldset>
        <legend>Questions readers ask</legend>
        {draft.faq.map((item, index) => (
          <div className="repeat" key={`faq-${index}`}>
            <label className="stack">
              Question
              <input
                value={item.question}
                onChange={(event) => {
                  const faq = draft.faq.slice();
                  faq[index] = { ...item, question: event.target.value };
                  patch({ faq });
                }}
              />
            </label>
            <label className="stack">
              Answer
              <textarea
                value={item.answer}
                onChange={(event) => {
                  const faq = draft.faq.slice();
                  faq[index] = { ...item, answer: event.target.value };
                  patch({ faq });
                }}
              />
            </label>
          </div>
        ))}
        <button
          type="button"
          className="text-button"
          onClick={() => patch({ faq: [...draft.faq, { question: "", answer: "" }] })}
        >
          Add question
        </button>
      </fieldset>

      <fieldset>
        <legend>Related pages ({draft.related.length} selected, 6 required)</legend>
        <label className="stack">
          Filter
          <input value={pathQuery} onChange={(event) => setPathQuery(event.target.value)} />
        </label>
        <div className="admin-checks">
          {visiblePaths.map((item) => (
            <label className="check" key={item.path}>
              <input
                type="checkbox"
                checked={draft.related.includes(item.path)}
                onChange={(event) => {
                  const related = event.target.checked
                    ? [...draft.related, item.path]
                    : draft.related.filter((path) => path !== item.path);
                  patch({ related });
                }}
              />
              <span>
                {item.title}
                <small>{item.path}</small>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Sources ({draft.source_ids.length} selected, 3 required)</legend>
        <label className="stack">
          Filter
          <input value={sourceQuery} onChange={(event) => setSourceQuery(event.target.value)} />
        </label>
        <div className="admin-checks">
          {visibleSources.map((item) => (
            <label className="check" key={item.id}>
              <input
                type="checkbox"
                checked={draft.source_ids.includes(item.id)}
                onChange={(event) => {
                  const source_ids = event.target.checked
                    ? [...draft.source_ids, item.id]
                    : draft.source_ids.filter((id) => id !== item.id);
                  patch({ source_ids });
                }}
              />
              <span>
                {item.title}
                <small>{item.name}</small>
              </span>
            </label>
          ))}
        </div>
        <p className="hint">Add a source only when it is not already in the list.</p>
        <label className="stack">
          New source id
          <input
            value={draft.new_source.id}
            onChange={(event) =>
              patch({ new_source: { ...draft.new_source, id: slugify(event.target.value) } })
            }
          />
        </label>
        <label className="stack">
          New source name
          <input
            value={draft.new_source.name}
            onChange={(event) =>
              patch({ new_source: { ...draft.new_source, name: event.target.value } })
            }
          />
        </label>
        <label className="stack">
          New source title
          <input
            value={draft.new_source.title}
            onChange={(event) =>
              patch({ new_source: { ...draft.new_source, title: event.target.value } })
            }
          />
        </label>
        <label className="stack">
          New source URL
          <input
            value={draft.new_source.url}
            onChange={(event) =>
              patch({ new_source: { ...draft.new_source, url: event.target.value } })
            }
          />
        </label>
        <label className="stack">
          New source type
          <select
            value={draft.new_source.type}
            onChange={(event) =>
              patch({
                new_source: {
                  ...draft.new_source,
                  type: event.target.value as DraftRecord["new_source"]["type"],
                },
              })
            }
          >
            {SOURCE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </fieldset>

      <label className="check">
        <input
          type="checkbox"
          checked={locked || draft.disclaimer}
          disabled={locked}
          onChange={(event) => patch({ disclaimer: event.target.checked })}
        />
        <span>
          Show the health and tradition disclaimer
          {locked ? <small>Required for this topic or article type.</small> : null}
        </span>
      </label>

      <label className="stack">
        Meta title ({draft.meta_title.length}/70)
        <input
          value={draft.meta_title}
          maxLength={70}
          onChange={(event) => {
            setMetaTouched(true);
            patch({ meta_title: event.target.value });
          }}
        />
      </label>
      <label className="stack">
        Meta description ({draft.meta_description.length}/170)
        <textarea
          value={draft.meta_description}
          maxLength={170}
          onChange={(event) => patch({ meta_description: event.target.value })}
        />
      </label>
      <label className="stack">
        Illustration alt text
        <input
          value={draft.image_alt}
          onChange={(event) => patch({ image_alt: event.target.value })}
        />
      </label>

      <p className="hint">
        {words} words so far. Publishing needs at least 420 words, 3 sources, and 6 related pages.
      </p>
      <div className="admin-actions">
        <button type="submit" disabled={pending}>
          {pending ? "Saving…" : "Save draft"}
        </button>
        <button type="button" disabled={pending} onClick={onPublish}>
          Publish
        </button>
      </div>
    </form>
  );
}
