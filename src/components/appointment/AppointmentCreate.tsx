import { Create, CreateProps } from 'react-admin'
import AppointmentForm from './AppointmentForm'

const AppointmentCreate = (props: CreateProps) => (
    <Create {...props} title="Ajouter un rendez-vous" redirect="list">
    <AppointmentForm />
  </Create>
)

export default AppointmentCreate
