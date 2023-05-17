import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "./Root";

const Admin = () => {
  const [userList, setUserLists] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(baseURL + "admin-panel");
      const data = await res.data;
      setUserLists(data);
    }
    getData();
    console.log(userList);
  }, []);

  return <div>Admin</div>;
};

export default Admin;
