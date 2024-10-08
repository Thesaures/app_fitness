export type userResponse = {
  success: boolean;
  errorMessage: string;
  statusCode: string;
};
export type managerStackList = {
  Login: undefined;
  Registeration: undefined;
  TaskList: undefined;
  TaskCreation: undefined;
  TaskDetail: { task_id: string };
  taskDetailParticipant: { task_id: string };
};
export type Participant = {
  id: number;
  name: string;
};
export type task = {
  task_name: string;
  task_discription: string;
  task_deadline: string;
  participant_id: string;
  task_progress: string;
};
export type participant = {
  participant_name: string;
  participant_id: string;
};
