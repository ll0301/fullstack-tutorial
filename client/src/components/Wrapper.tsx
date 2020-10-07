import React from "react";
import { Box } from '@chakra-ui/core';

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = (
  {
    children,
    variant = "reqular",
  }) => {
  return (
    <Box 
    mt={8} 
    mx="auto" 
    maxW={variant === "reqular" ? "800px" : "400px"} 
    w="100%"
    >
      {children}
    </Box>
  );
}