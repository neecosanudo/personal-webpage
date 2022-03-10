import Link from "next/link";

interface Props {
  pages: string[][];
}

const Navigation = ({ pages }: Props) => {
  return (
    <nav>
      {pages.map((page) => {
        return (
          <Link key={page[1]} href={page[0]}>
            <a>{page[1]}</a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
