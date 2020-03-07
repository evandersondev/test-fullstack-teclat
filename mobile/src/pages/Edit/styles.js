import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    position: "relative"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 30
  },
  form: {
    width: "100%",
    height: 380,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    borderRadius: 15
  },
  input: {
    width: "100%",
    height: 40,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    marginBottom: 15,
    borderColor: "#666666aa",
    borderRadius: 7
  },
  btnSubmit: {
    width: "100%",
    height: 40,
    backgroundColor: "#56dd85aa",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center"
  },
  textSubmit: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  btnClose: {
    position: "absolute",
    top: 90,
    backgroundColor: "#33333311",
    padding: 20,
    borderRadius: 30
  },
  btnWishChangePassword: {
    marginTop: 30
  },
  textWishChangePassword: {
    fontSize: 12,
    color: "#0000bbaa"
  }
});
