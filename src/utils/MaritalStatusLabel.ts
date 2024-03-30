import { ChipProps } from "@mui/material";
import { MaritalStatus } from "./enums/MaritalStatus";

const maritalStatusLabels: Record<MaritalStatus, string> = {
  SINGLE: "Célibataire",
  MARRIED: "Marié(e)",
  DIVORCED: "Divorcé(e)",
  WIDOWED: "Veuf/Veuve",
};

// eslint-disable-next-line no-unused-vars
const maritalStatusLabel: (status: MaritalStatus) => string = (status) => {
  return maritalStatusLabels[status];
};

const maritalStatusChipColors: Record<MaritalStatus, ChipProps["color"]> = {
  SINGLE: "default",
  MARRIED: "primary",
  DIVORCED: "secondary",
  WIDOWED: "warning",
};

const maritalStatusChipColor: (
  // eslint-disable-next-line no-unused-vars
  status: MaritalStatus
) => ChipProps["color"] = (status) => {
  return maritalStatusChipColors[status];
};

export default maritalStatusLabel;

export { maritalStatusChipColor };
