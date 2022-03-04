import Image from "next/image";

type Props = {
  isClose: boolean,
};

const IconNavPage = ({ isClose }: Props) => {
  return (
    <>
      {
        isClose
        ? <Image
          src="/assets/icons/menu_black_24dp.svg"
          alt="Icono abrir menú"
          width={40}
          height={40}
        />
        : <Image
          src="/assets/icons/close_black_24dp.svg"
          alt="Icono abrir menú"
          width={40}
          height={40}
        />
      }
    </>
  );
};

export default IconNavPage;
