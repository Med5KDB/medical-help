import { Chip } from "@mui/material";
import appointmentStatusLabel, {
  appointmentStatusChipColor,
} from "../../utils/AppointmentStatusLabel";
import { AppointmentStatus } from "../../utils/enums/AppointmentStatus";

type AppointmentStatusChipProps = {
  status: AppointmentStatus;
};

const AppointmentStatusChip = ({ status }: AppointmentStatusChipProps) => {
  return (
    <Chip
      label={appointmentStatusLabel(status)}
      color={appointmentStatusChipColor(status)}
    />
  );
};

export default AppointmentStatusChip;
