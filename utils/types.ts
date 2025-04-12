export type TaskStatus =
  | "finished"
  | "registered"
  | "encounter"
  | "unavailable";

export type Appointment = {
  id: string;
  name: string;
  numberOfPatients: number;
  schedule?: {
    patient?: string;
    title: string;
    status: TaskStatus;
    start: string;
    end: string;
  }[];
};

export interface AppointmentCardProps {
  patient: string;
  status: TaskStatus;
  time?: string;
  title: string;
  span: number;
}
