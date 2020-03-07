import React, { useState } from "react";
import { createUser } from "../../utils/createUser";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

import { styles } from "./styles";

const Signup = ({ makeLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [changePassword, setChangePassword] = useState(false);

  const handleSubmit = () => {
    createUser(name, email, password, passwordConfirm);
    makeLogin();
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.h1}>Create account</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          autoCapitalize="none"
          autoCompleteType="off"
          textContentType="emailAddress"
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => {
            setPassword(text);
            setChangePassword(true);
          }}
          secureTextEntry={true}
        />
        {changePassword && (
          <TextInput
            style={styles.input}
            placeholder="Comfirm password"
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            secureTextEntry={true}
          />
        )}
        <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
          <Text style={styles.textSubmit}>Create new user</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnLink} onPress={makeLogin}>
          <Text style={styles.link}>Don't have account? Sing up.</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
