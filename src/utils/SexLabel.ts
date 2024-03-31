import { ChipProps } from "@mui/material";
import { SexType } from "./enums/SexType";

const sexTypeLabels: Record<SexType, string> = {
  MALE: "Masculin",
  FEMALE: "Féminin",
};

// eslint-disable-next-line no-unused-vars
const sexTypeLabel: (status: SexType) => string = (status) => {
  return sexTypeLabels[status];
};

const sexTypeChipColors: Record<SexType, ChipProps["color"]> = {
  MALE: "primary",
  FEMALE: "secondary",
};

const sexTypeChipColor: (
  // eslint-disable-next-line no-unused-vars
  status: SexType
) => ChipProps["color"] = (status) => {
  return sexTypeChipColors[status];
};

export default sexTypeLabel;

export { sexTypeChipColor };
