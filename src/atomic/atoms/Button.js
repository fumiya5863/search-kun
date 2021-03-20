import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

// functional component
const Button = ({
  className,
  children,
  onClick
}) => {
  return (
    <BootstrapButton
      variant="primary"
      className={className}
      onClick={onClick}
    >
    {children}
  </BootstrapButton>
  );
};

// () => {};

// const Button = ({
//   className,
//   text,
//   onClick
// }) => (
//   <BootstrapButton
//     variant="primary"
//     className={className}
//     onClick={onClick}
//   >
//     {text}
//   </BootstrapButton>
// );

export {
  Button
};


/*
atomic
components
css
entities
hooks
models
plugins
services
stores
svg
*/