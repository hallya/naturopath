import type { LinksFunction } from "@vercel/remix";
import stylesheet from "./Picture.css";

type FileName = `${string}.jpg` | `${string}.webp` | `${string}.png`;

type Pathname = `${"/img/desktop" | "/img/mobile"}/${FileName}`;

type Media = "(min-width: 1200px)" | "(min-width: 768px)" | "(max-width: 360px)";

export interface PictureProps {
  alt: string;
  srcSets?: { srcSet: Pathname; media: Media }[];
  src: Pathname;
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

export function Picture(props: PictureProps) {
  const { alt, srcSets = [], src } = props;

  return (
    <picture className="picture">
      {srcSets.map(({ media, srcSet }) => (
        <source srcSet={srcSet} media={media} key={srcSet} />
      ))}
      <img alt={alt} src={src} loading="lazy" />
    </picture>
  );
}
