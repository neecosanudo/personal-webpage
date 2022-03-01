import Link from "next/link";
import {TwStyle, TwAssemble} from '@utils/tailwindcss';

type Props = {
  href: string;
  children: string;
  style?: TwStyle,
};

const LinkItem = ({ href, children, style }: Props) => {
  return (
    <Link href={href}>
      <a className={style && TwAssemble(style)}>{children}</a>
    </Link>
  );
};

export default LinkItem;
