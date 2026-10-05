import type { Photo } from "@/lib/photos";

export function PhotoCredit({ photo }: { photo: Photo }) {
  return (
    <figcaption className="photo-credit">
      Photograph by <a href={photo.creditUrl}>{photo.credit}</a>
      {photo.license === "CC0" ? (
        ", public domain (CC0)."
      ) : (
        <>
          {" "}
          under <a href={photo.licenseUrl}>{photo.license}</a>.
        </>
      )}
    </figcaption>
  );
}
