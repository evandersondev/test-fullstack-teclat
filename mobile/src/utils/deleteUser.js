import api from "../services/api";

export const deleteUser = async (id, getUsers) => {
  await api.delete(`/users/${id}`);
  alert("User deleted.");
  getUsers();
};
