import api from "../services/api";

export const createUser = async (name, email, password, passwordConfirm) => {
  const validatedPassword = password === passwordConfirm ? password : "";

  await api.post("/users", {
    name,
    email,
    password: validatedPassword
  });
};
