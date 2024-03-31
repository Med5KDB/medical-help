import { Chip } from "@mui/material";
import { MaritalStatus } from "../../utils/enums/MaritalStatus";
import maritalStatusLabel, {
  maritalStatusChipColor,
} from "../../utils/MaritalStatusLabel";

type MaritalStatusChipProps = {
  status: MaritalStatus;
};

const MaritalStatusChip = ({ status }: MaritalStatusChipProps) => {
  return (
    <Chip
      label={maritalStatusLabel(status)}
      color={maritalStatusChipColor(status)}
    />
  );
};

export default MaritalStatusChip;
