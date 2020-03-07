import React, { useState } from "react";
import { createUser } from "../../utils/createUser";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView
} from "react-native";

import { styles } from "./styles";

import Close from "../../../assets/close.png";

const Add = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [changePassword, setChangePassword] = useState(false);

  const handleSubmit = () => {
    createUser(name, email, password, passwordConfirm);
    navigation.navigate("Home");
  };

  const backHome = () => {
    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableOpacity onPress={backHome} style={styles.btnClose}>
        <Image source={Close} />
      </TouchableOpacity>
      <View style={styles.form}>
        <Text style={styles.title}>Create account</Text>
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
          onChangeText={value => {
            setPassword(value);
            setChangePassword(true);
          }}
          secureTextEntry={true}
        />
        {changePassword ? (
          <TextInput
            style={styles.input}
            placeholder="Comfirm password"
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            secureTextEntry={true}
          />
        ) : (
          <Text></Text>
        )}
        <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
          <Text style={styles.textSubmit}>Add user</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Add;
