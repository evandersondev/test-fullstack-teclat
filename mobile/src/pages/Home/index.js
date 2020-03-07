import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { deleteUser } from "../../utils/deleteUser";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  AsyncStorage
} from "react-native";

import { styles } from "./styles";

// Icons
import ProfileIcon from "../../../assets/profile.png";
import AddIcon from "../../../assets/add.png";
import LogoutIcon from "../../../assets/logout.png";
import EditIcon from "../../../assets/edit.png";
import TrashIcon from "../../../assets/trash.png";

const Home = ({ navigation }) => {
  const [userSession, setUserSession] = useState({});
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({});
  const [refresh, setRefresh] = useState(false);

  const closeSession = () => {
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("user");
    navigation.navigate("LoginLogout");
  };

  const getUsers = async (page = 1) => {
    setRefresh(true);
    const {
      data: { users }
    } = await api.get("/users", {
      params: {
        page
      },

      headers: {
        authorization: "Bearer " + (await AsyncStorage.getItem("token"))
      }
    });

    setUsers(users.docs);
    setPagination({
      page: users.page,
      prevPage: users.hasPrevPage,
      nextPage: users.hasNextPage
    });
    setRefresh(false);
  };

  const getUserSession = async () => {
    const getUser = await AsyncStorage.getItem("user");
    setUserSession(JSON.parse(getUser));
  };

  useEffect(() => {
    getUserSession();
    getUsers();
  }, []);

  const renderUsers = ({ item }) => (
    <View style={styles.userView}>
      <View style={styles.userInfo}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textEmail}>{item.email}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Edit", { id: item._id, user: item })
          }
          style={styles.btnEdit}
        >
          <Image style={styles.editImage} source={EditIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => getDeleteUser(item._id)}
          style={styles.btnTrash}
        >
          <Image style={styles.trashImage} source={TrashIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const prevPage = () => {
    const { page, prevPage } = pagination;

    if (prevPage === true) {
      getUsers(page - 1);
    } else {
      return;
    }
  };

  const nextPage = () => {
    const { page, nextPage } = pagination;

    if (nextPage === true) {
      getUsers(page + 1);
    } else {
      return;
    }
  };

  const getDeleteUser = async id => {
    deleteUser(id, await AsyncStorage.getItem("token")).then(() => {
      alert("User deleted.");
      getUsers();
    });
  };

  const addNewUser = () => {
    navigation.navigate("Add");
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.header}>
          <View style={styles.profileView}>
            <Image source={ProfileIcon} style={styles.profileImage} />
            <Text style={styles.h3}>{userSession.name}</Text>
          </View>
          <TouchableOpacity style={styles.navbar}>
            <TouchableOpacity onPress={addNewUser} style={styles.btnAdd}>
              <Image source={AddIcon} style={styles.addImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={closeSession} style={styles.btnLogout}>
              <Image source={LogoutIcon} />
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        <FlatList
          data={users}
          keyExtractor={item => item._id}
          renderItem={renderUsers}
          onRefresh={getUsers}
          refreshing={refresh}
        />

        <View style={styles.pagination}>
          <TouchableOpacity
            disabled={pagination.prevPage === false}
            style={
              pagination.prevPage === false
                ? styles.btnDisabled
                : styles.btnPagination
            }
            onPress={prevPage}
          >
            <Text style={styles.textPagination}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={pagination.nextPage === false}
            style={
              pagination.nextPage === false
                ? styles.btnDisabled
                : styles.btnPagination
            }
            onPress={nextPage}
          >
            <Text style={styles.textPagination}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;
