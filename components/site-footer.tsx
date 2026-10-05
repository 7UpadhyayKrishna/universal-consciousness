import Link from "next/link";
import { photoCatalog } from "@/lib/photos";
import { site } from "@/lib/site";

const topics = [
  ["Consciousness", "/topics/consciousness/"],
  ["Meditation", "/topics/meditation/"],
  ["Mindfulness", "/topics/mindfulness/"],
  ["Spirituality", "/topics/spirituality/"],
  ["Yoga", "/topics/yoga/"],
  ["Kundalini", "/topics/kundalini/"],
  ["Chakras", "/topics/chakras/"],
  ["Reiki", "/topics/reiki/"],
  ["Ayurveda", "/topics/ayurveda/"],
  ["Ancient wisdom", "/topics/ancient-wisdom/"],
  ["Vedanta", "/topics/vedanta/"],
  ["Moksha", "/topics/moksha/"],
];

const trust = [
  ["About", "/about/"],
  ["Editorial policy", "/editorial-policy/"],
  ["Corrections", "/corrections/"],
  ["Sources", "/sources/"],
  ["Authors", "/authors/"],
  ["Contact", "/contact/"],
  ["Privacy", "/privacy/"],
  ["Terms", "/terms/"],
  ["Disclaimer", "/disclaimer/"],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-name">{site.name}</p>
          <p>{site.positioning}</p>
        </div>
        <div>
          <p className="footer-label">Topics</p>
          <ul>
            {topics.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-label">Publication</p>
          <ul>
            {trust.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer-note">
        Written for readers in the United States. Educational reference, not a
        spiritual service and not medical advice.
      </p>
      <p className="footer-note photo-credits">
        Photographs:{" "}
        {photoCatalog.map((photo, index) => (
          <span key={photo.src}>
            {index > 0 ? " · " : null}
            <a href={photo.creditUrl}>{photo.credit}</a> ({photo.license})
          </span>
        ))}
      </p>
    </footer>
  );
}
