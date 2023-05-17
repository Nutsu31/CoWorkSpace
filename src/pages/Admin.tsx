import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "./Root";

interface UserType {
  name: string;
  lastname: string;
  email: string;
  isAdmin: boolean;
}

const Admin = () => {
  const [userList, setUserLists] = useState<Array<UserType>>([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(baseURL + "admin-panel");
      const data = await res.data;
      setUserLists(data.users);
    }
    getData();
    console.log(userList);
  }, []);

  return (
    <div>
      {userList?.map((user) => (
        <div
          key={Math.random() * Math.random()}
          style={{ border: "1px solid black" }}
        >
          <p>{user.name}</p>
          <p>{user.lastname}</p>
        </div>
      ))}
    </div>
  );
};

export default Admin;
