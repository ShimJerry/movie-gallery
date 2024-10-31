import * as React from "react";
import Link from "next/link";

interface IProps {
  url: string;
  name: string;
  background?: string;
  hoverBackground?: string;
}

const LinkButton = ({
  url,
  hoverBackground = " ",
  background = "",
  name,
}: IProps) => {
  return (
    <button>
      <Link
        href={url}
        className={`mode-hover-button ${background} ${hoverBackground}`}
      >
        <span className="ml-4">{name}</span>
      </Link>
    </button>
  );
};

export default LinkButton;
