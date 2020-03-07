import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  header: {
    width: "100%",
    height: 60,
    marginTop: 23,
    backgroundColor: "#0f024edd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 30
  },
  h3: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#fff"
  },
  btnAdd: {
    width: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    borderWidth: 0,
    backgroundColor: "#56dd85",
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginRight: 10
  },
  addImage: {
    width: 25,
    height: 25,
    marginBottom: 5,
    marginRight: 5
  },
  profileView: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  profileImage: {
    width: 15,
    height: 15,
    marginRight: 7
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center"
  },
  btnLogout: {
    width: 55,
    height: 45,
    alignItems: "center",
    justifyContent: "center"
  },
  list: {
    marginTop: 90
  },
  userView: {
    width: "100%",
    height: 90,
    borderBottomWidth: 2,
    borderBottomColor: "#66666644",
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 15
  },
  userInfo: {},
  textName: {
    fontSize: 22,
    fontWeight: "600"
  },
  textEmail: {
    fontSize: 16
  },
  actions: {
    height: "100%",
    justifyContent: "space-around"
  },
  btnEdit: {
    width: 50,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  editImage: {
    width: 23,
    height: 24
  },
  btnTrash: {
    width: 50,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  trashImage: {
    width: 20,
    height: 24
  },
  pagination: {
    height: 60,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btnPagination: {
    width: 90,
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: "#56dd85",
    borderRadius: 7
  },
  textPagination: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  btnDisabled: {
    opacity: 0.5,
    width: 90,
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: "#56dd8555",
    borderRadius: 7
  }
});
