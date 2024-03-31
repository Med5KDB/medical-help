import { Chip } from "@mui/material";
import { SexType } from "../../utils/enums/SexType";
import sexTypeLabel, { sexTypeChipColor } from "../../utils/SexLabel";

type SexChipProps = {
  sex: SexType;
};

const SexChip = ({ sex }: SexChipProps) => {
  return <Chip label={sexTypeLabel(sex)} color={sexTypeChipColor(sex)} />;
};

export default SexChip;
