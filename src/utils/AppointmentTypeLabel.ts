import { ChipProps } from "@mui/material";
import { AppointmentType } from "./enums/AppointmentType";

const appointmentTypeLabels: Record<AppointmentType, string> = {
  IN_PERSON: "En présentiel",
  VIDEO_CALL: "En ligne",
};

// eslint-disable-next-line no-unused-vars
const appointmentTypeLabel: (status: AppointmentType) => string = (status) => {
  return appointmentTypeLabels[status];
};

const appointmentTypeChipColors: Record<AppointmentType, ChipProps["color"]> =
  {
    IN_PERSON: "default",
    VIDEO_CALL: "secondary",
  };

const appointmentTypeChipColor: (
  // eslint-disable-next-line no-unused-vars
  status: AppointmentType
) => ChipProps["color"] = (status) => {
  return appointmentTypeChipColors[status];
};

export default appointmentTypeLabel;

export { appointmentTypeChipColor };
