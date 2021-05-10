import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { sizes, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

type InactiveButtonProps = {
  colorkey: "primary" | "textSubtle";
} & ButtonMenuItemProps;

const InactiveButton = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: ${({ theme, colorkey }) => theme.colors[colorkey]};

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const ButtonMenuItem: React.FC<ButtonMenuItemProps> = ({
  isactive = false,
  size = sizes.MD,
  variant = variants.PRIMARY,
  as,
  ...props
}) => {
  const { isloading, fullwidth } = props
  let newProps = props as any

  if (typeof as !== 'string' || as === 'a') {
    const loading = isloading ? 1: 0
    const width = fullwidth ? 1 : 0
    newProps = { isloading: loading, fullwidth: width, ...props }
  }

  if (!isactive) {
    return (
      <InactiveButton
        forwardedAs={as}
        size={size}
        variant="tertiary"
        colorkey={variant === variants.PRIMARY ? "primary" : "textSubtle"}
        {...newProps}
      />
    );
  }

  return <Button as={as} size={size} variant={variant} {...newProps} />;
};

export default ButtonMenuItem;
