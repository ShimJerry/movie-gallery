import * as React from "react";

interface SpacerProps {
  space: number;
  horizontal?: boolean;
}

const Spacer = ({ space, horizontal = false }: SpacerProps) => {
  return (
    <div
      style={{
        width: horizontal ? `${space}px` : "100%",
        height: horizontal ? "100%" : `${space}px`,
      }}
    />
  );
};

export default Spacer;
