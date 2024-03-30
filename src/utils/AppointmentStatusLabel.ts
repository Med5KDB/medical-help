import { ChipProps } from "@mui/material";
import { AppointmentStatus } from "./enums/AppointmentStatus";

const appointmentStatusLabels: Record<AppointmentStatus, string> = {
  CANCELED: "Annulé",
  COMPLETED: "Terminé",
  PENDING: "En attente",
  IN_PROGRESS: "En attente de paiement",
  SCHEDULED: "Planifié",
};

// eslint-disable-next-line no-unused-vars
const appointmentStatusLabel: (status: AppointmentStatus) => string = (
  status
) => {
  return appointmentStatusLabels[status];
};

const appointmentStatusChipColors: Record<
  AppointmentStatus,
  ChipProps["color"]
> = {
  CANCELED: "error",
  COMPLETED: "success",
  PENDING: "warning",
  SCHEDULED: "warning",
  IN_PROGRESS: "warning",
};

const appointmentStatusChipColor: (
  // eslint-disable-next-line no-unused-vars
  status: AppointmentStatus
) => ChipProps["color"] = (status) => {
  return appointmentStatusChipColors[status];
};

export default appointmentStatusLabel;

export { appointmentStatusChipColor };
