import api from "../services/api";

export const createUser = async (name, email, password, passwordConfirm) => {
  const validatedPassword = password === passwordConfirm ? password : "";

  try {
    if (validatedPassword === "") return alert("Please fill in the password");

    await api.post("/users", {
      name,
      email,
      password: validatedPassword
    });
    alert("User created.");
  } catch (err) {
    alert(
      "Sorry, but something information is incorrect, remember that email must are unique for each user and the password must are equal for the two fields, please try again."
    );
  }
};
