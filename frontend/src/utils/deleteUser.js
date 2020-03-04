import api from "../services/api";

export const deleteUser = async (id, token) => {
  await api.delete(`/users/${id}`, {
    headers: { authorization: "Bearer " + token }
  });
  window.location.reload();
};
