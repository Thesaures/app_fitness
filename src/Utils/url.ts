function prepareURL(preparedPath: string) {
  return `/api${preparedPath}`;
}

export const urls = {
  // baseUrl: process.env.IP_ADDRESS,
  // register: prepareURL('/v0/registration'),
  register: `/api/v0/registration`,
  login: `/api/v0/login`,
  createdTask: `/api/v1/tasks`,
  taskCreation: `/api/v1/taskcreation`,
  taskDetails: `api/v1/taskDetails/`,
  listOfParticipant: `/api/v1/participantList`,
  userName: `/api/v1/username/`,
  updateTask: `/api/v1/updateTask`,
  assignedTask: `/api/v1/assignedTasks`,
  taskDeletion: `/api/v1/task/`,
};
