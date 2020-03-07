import api from "../services/api";

export const deleteUser = async id => {
  await api.delete(`/users/${id}`);
  window.location.reload();
};
