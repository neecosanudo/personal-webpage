import { TwAssemble, TwStyle } from "@utils/tailwindcss";

type Props = {
  text: string;
};

function Heading({ text }: Props) {
  return <h1 className={TwAssemble(HeadingStyle)}>{text}</h1>;
}

let HeadingStyle: TwStyle = {
  text: "text-5xl",
};

export default Heading;
