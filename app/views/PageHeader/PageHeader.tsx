import type { LinksFunction } from "@vercel/remix";

interface PageHeaderProps {
  title: string;
}

export const links: LinksFunction = () => [];

export function PageHeader(props: PageHeaderProps) {
  const { title } = props;

  return (
    <header className="flex justify-center p-7">
      <h1>{title}</h1>
    </header>
  );
}
