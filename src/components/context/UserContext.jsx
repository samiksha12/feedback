import React from "react";
import { getData, getUserData } from "../../api";
import { GET_USER, GET_DATA } from "../../api/url";

export const UserContext = React.createContext({
  allUser: null,
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [allUser, setAllUser] = React.useState(null);
  const loginHandler = (username, password) => {
    getUserData(GET_USER).then((data) => {
      console.log(data.userTable);
      const response = data.userTable;
      setAllUser(response);
      const result = response.filter((item) => {
        if (item.username === username && item.password === password) {
          return item;
        }
      });
      if (result[0]) {
        setToken(result[0].token);
        setUser(result[0]);
        localStorage.setItem("token", result[0].token);
      }
    });
  };
  const logoutHandler = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  React.useEffect(() => {
    const tokenLS = localStorage.getItem("token");
    if (!token && tokenLS) {
      setToken(tokenLS);
      getUserData(GET_USER).then((data) => {
        const response = data.userTable;
        setAllUser(response);
        const userResult = response.filter((item) => {
          if (item.token === tokenLS) {
            return item;
          }
        });

        if (userResult[0]) {
          setUser(userResult[0]);
        }
      });
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        allUser,
        user,
        token,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
