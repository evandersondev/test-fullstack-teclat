import React, { useState } from "react";
import api from "../../services/api";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Alert
} from "react-native";

import { styles } from "./styles";

import Close from "../../../assets/close.png";
const Edit = ({ navigation }) => {
  const id = navigation.getParam("id");
  const user = navigation.getParam("user");

  const [myUser, setMyUser] = useState({
    name: user.name,
    email: user.email,
    password: user.password
  });
  const [wishChangePassword, setWishChangePassword] = useState(false);

  const updateUser = async () => {
    try {
      await api.put(`/users/${id}`, {
        ...myUser
      });
      Alert.alert("User updated.");
      navigation.navigate("Home");
    } catch (err) {
      Alert.alert("Update user error!");
    }
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
        <Text style={styles.title}>Update user</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={myUser.name}
          onChangeText={value => setMyUser({ ...myUser, name: value })}
        />
        <TextInput
          autoCapitalize="none"
          autoCompleteType="off"
          textContentType="emailAddress"
          style={styles.input}
          placeholder="E-mail"
          value={myUser.email}
          onChangeText={value => setMyUser({ ...myUser, email: value })}
        />
        {wishChangePassword ? (
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={value => setMyUser({ ...myUser, password: value })}
            secureTextEntry={true}
          />
        ) : (
          <Text></Text>
        )}

        <TouchableOpacity style={styles.btnSubmit} onPress={updateUser}>
          <Text style={styles.textSubmit}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnWishChangePassword}
          onPress={() => setWishChangePassword(true)}
        >
          <Text style={styles.textWishChangePassword}>
            Do you wish to change the password?
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Edit;
