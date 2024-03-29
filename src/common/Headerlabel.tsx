import { Box } from "@mui/material";
import React from "react";

type HeaderLabelProps = {
  label?: string;
  children?: React.ReactNode;
};

const HeaderLabel = ({ children, label }: HeaderLabelProps) => {
  return <Box>{children}</Box>;
};

export default HeaderLabel;
