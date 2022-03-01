import Link from "next/link";

type Props = {
  href: string;
  children: string;
};

const LinkItem = ({ href, children }: Props) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default LinkItem;
