import React, { useState } from "react";
import AsyncStorage from "react-native";
import { StyleSheet, View } from "react-native";

import Login from "../../components/Login";
import Signup from "../../components/Signup";

const LoginLogout = ({ navigation }) => {
  const [login, setLogin] = useState(true);

  const makeSignup = () => {
    setLogin(false);
  };

  const makeLogin = () => {
    setLogin(true);
  };

  return (
    <View style={styles.container}>
      {login ? (
        <Login navigation={navigation} makeSignup={makeSignup} />
      ) : (
        <Signup makeLogin={makeLogin} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0f024eee"
  }
});

export default LoginLogout;
