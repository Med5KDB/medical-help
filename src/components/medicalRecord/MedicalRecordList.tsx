import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  ListProps,
  ReferenceField,
  SearchInput,
} from "react-admin";
import ListRecordActions from "../../common/ListRecordActions";
import HeaderLabel from "../../common/Headerlabel";
import FolderIcon from "@mui/icons-material/Folder";

const medicalRecordFilters = [
  <SearchInput key="search" source="name" alwaysOn />,
];
export const MedicalRecordList = (props?: ListProps) => {
  return (
    <List {...props} filters={medicalRecordFilters}>
      <Datagrid rowClick="show">
        <HeaderLabel label="Patient">
          <FolderIcon
            color="action"
            sx={{ mb: -0.5, mr: 0.5 }}
            fontSize="medium"
          />
          <ReferenceField
            source="patientId"
            label="Patient"
            reference="patient"
            link="show"
          >
            <FunctionField<{ firstname: string; lastname: string }>
              render={(record) =>
                record && `${record.firstname} ${record.lastname}`
              }
            />
          </ReferenceField>
        </HeaderLabel>
        <DateField source="createdAt" label="Date creation " />
        <DateField source="updatedAt " label="Date  modification" />
        <ListRecordActions />
      </Datagrid>
    </List>
  );
};
