import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  Month,
  Agenda,
  PopupOpenEventArgs,
  RenderCellEventArgs,
  EventRenderedArgs,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { Box } from "@mui/material";
import "../../../App.css";
import numberingSystems from "cldr-data/supplemental/numberingSystems.json";
import caGregorian from "cldr-data/main/fr/ca-gregorian.json";
import numbers from "cldr-data/main/fr/numbers.json";
import timeZoneNames from "cldr-data/main/fr/timeZoneNames.json";
import { loadCldr } from "@syncfusion/ej2-base";

loadCldr(numberingSystems, caGregorian, numbers, timeZoneNames);

const Schedule = () => {
  const data: object[] = [
    {
      Id: 1,
      Subject: "Meeting - 1",
      StartTime: new Date(2018, 1, 15, 10, 0),
      EndTime: new Date(2018, 1, 16, 12, 30),
      IsAllDay: false,
    },
  ];
  const eventSettings = { dataSource: data };

  return (
    <Box>
      <ScheduleComponent
        locale="fr"
        eventSettings={eventSettings}
        popupOpen={(args: PopupOpenEventArgs) => console.log(args)}
        renderCell={(args: RenderCellEventArgs) => console.log(args)}
        eventRendered={(args: EventRenderedArgs) => console.log(args)}
      >
        <Inject services={[Day, Week, Month, Agenda]} />
        <ViewsDirective>
          <ViewDirective option="Day" displayName="Jour" />
          <ViewDirective option="Week" displayName="Semaine" />
          <ViewDirective option="Month" displayName="Mois" />
          <ViewDirective option="Agenda" displayName="Agenda" />
        </ViewsDirective>
      </ScheduleComponent>
    </Box>
  );
};

export default Schedule;
