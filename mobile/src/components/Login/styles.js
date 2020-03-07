import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  h1: {
    fontSize: 38,
    letterSpacing: 1.5,
    color: "#fff",
    fontWeight: "bold"
  },
  form: {
    width: "90%",
    height: 320,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 15,
    paddingHorizontal: 30
  },
  input: {
    width: "100%",
    marginBottom: 15,
    height: 40,
    borderRadius: 7,
    fontSize: 15,
    color: "#434343",
    borderWidth: 0.8,
    borderStyle: "solid",
    borderColor: "#666666aa",
    paddingHorizontal: 30
  },
  btn: {
    width: "100%",
    marginBottom: 15,
    height: 40,
    borderRadius: 7,
    backgroundColor: "#56dd85cc",
    alignItems: "center",
    justifyContent: "center"
  },
  textBtn: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff"
  },
  btnLink: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  link: {
    fontSize: 14,
    color: "#0f024eaa"
  }
});
