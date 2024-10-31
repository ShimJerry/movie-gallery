import * as React from "react";
import Image, { StaticImageData } from "next/image";
import Form from "next/form";

interface IProps {
  formLoginAction?: () => Promise<void>;
  name: string;
  logo?: string | StaticImageData;
  background?: string;
  hoverBackground?: string;
}

const LoginButton = ({
  formLoginAction,
  logo,
  name,
  background = "",
  hoverBackground = "",
}: IProps) => {
  const PropButton = () => (
    <button
      className={`mode-hover-button ${background} ${hoverBackground}`}
      type="submit"
    >
      {logo && <Image src={logo} alt={name} width={20} height={20} />}
      <span className="ml-4">{name}</span>
    </button>
  );

  return (
    <>
      {formLoginAction ? (
        <Form action={formLoginAction}>
          <PropButton />
        </Form>
      ) : (
        <>
          <PropButton />
        </>
      )}
    </>
  );
};

export default LoginButton;
