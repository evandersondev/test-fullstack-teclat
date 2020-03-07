import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { deleteUser } from "../../utils/deleteUser";

//Components
import Modal from "../../components/Modal";
import Add from "../../components/Add";
import Edit from "../../components/Edit";

// Icons
import { FaUser, FaUserPlus, FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

// Styles
import { Container } from "./styles";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({});
  const [userEdit, setUserEdit] = useState({});
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const getUsers = async (page = 1) => {
    const {
      data: { users }
    } = await api.get("/users", { params: { page } });

    setUsers(users.docs);
    setPagination({
      page: users.page,
      prevPage: users.hasPrevPage,
      nextPage: users.hasNextPage
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const closeSession = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const addNewUser = () => {
    setModal(true);
    setAdd(true);
  };

  const editUser = user => {
    setModal(true);
    setEdit(true);
    setUserEdit(user);
  };

  const closeModal = () => {
    setModal(false);
    setAdd(false);
    setEdit(false);
  };

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

  return (
    <>
      <Container>
        <header>
          <span>
            <FaUser />
            <h3>{user.name}</h3>
          </span>
          <div className="navbar">
            <button onClick={addNewUser}>
              <FaUserPlus />
              <span>Add new user</span>
            </button>
            <button onClick={closeSession}>
              <FiLogIn />
            </button>
          </div>
        </header>

        <section>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="actions">
                      <button>
                        <FaPencilAlt onClick={() => editUser(user)} />
                      </button>
                      <button onClick={() => deleteUser(user._id)}>
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="paginate">
            <button disabled={pagination.prevPage === false} onClick={prevPage}>
              Previous
            </button>
            <button disabled={pagination.nextPage === false} onClick={nextPage}>
              Next
            </button>
          </div>
        </section>
      </Container>

      {/* The logic for the modals ↓ */}

      {modal && add && (
        <Modal>
          <Add closeModal={closeModal} />
        </Modal>
      )}

      {modal && edit && (
        <Modal>
          <Edit userEdit={userEdit} closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Home;
