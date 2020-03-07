import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import api from "../../services/api";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const Login = ({ navigation, makeSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("token").then(token => {
      if (token) {
        navigation.navigate("Home");
      }
    });
  }, []);

  const sessionLogin = async () => {
    if (email && password === "") return alert("Please fill in the fields.");

    try {
      const {
        data: { user, token }
      } = await api.post("/sessions", { email, password });

      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("user", JSON.stringify(user));
      return navigation.navigate("Home");
    } catch (error) {
      alert(
        "Maybe something information is incorrect, please check the email and password if they are correct."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome</Text>
      <View style={styles.form}>
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
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={sessionLogin} style={styles.btn}>
          <Text style={styles.textBtn}>Log in</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.btnLink} onPress={makeSignup}>
            <Text style={styles.link}>Don't have account? Sing up.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
