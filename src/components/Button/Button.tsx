import React from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps, variants, sizes } from "./types";

const Button: React.FC<ButtonProps> = ({ startIcon, endIcon, children, external, disabled, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  
  const { as, isloading, fullwidth } = props
  let newProps = props as any
  
  if (typeof as !== 'string' || as === 'a') {
    const loading = isloading ? 1: 0
    const width = fullwidth ? 1 : 0
    newProps = { ...props, isloading: loading, fullwidth: width }
  }
  const isDisabled = isloading || disabled;

  return (
    <StyledButton {...internalProps} {...newProps} disabled={isDisabled}>
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon, {
          mr: "0.5rem",
        })}
      {children}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon, {
          ml: "0.5rem",
        })}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: variants.PRIMARY,
  size: sizes.MD,
  external: false,
  isloading: false,
  disabled: false,
};

export default Button;
