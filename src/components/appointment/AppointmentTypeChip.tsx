import { Chip } from "@mui/material";
import appointmentTypeLabel, {
  appointmentTypeChipColor,
} from "../../utils/AppointmentTypeLabel";
import { AppointmentType } from "../../utils/enums/AppointmentType";

type AppointmentTypeChipProps = {
  status: AppointmentType;
};

const AppointmentTypeChip = ({ status }: AppointmentTypeChipProps) => {
  return (
    <Chip
      label={appointmentTypeLabel(status)}
      color={appointmentTypeChipColor(status)}
    />
  );
};

export default AppointmentTypeChip;
