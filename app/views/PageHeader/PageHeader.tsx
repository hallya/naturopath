import type { LinksFunction } from "@vercel/remix";

interface PageHeaderProps {
  title: string;
}

export const links: LinksFunction = () => [];

export function PageHeader(props: PageHeaderProps) {
  const { title } = props;

  return (
    <header className="w-1/2 m-auto flex justify-center">
      <h1>{title}</h1>
    </header>
  );
}
