import axios from "axios";
import React, { createContext, useState } from "react";

//tạo context
export const UserContext = createContext();

//khai báo provider cho nó
export const Provider = ({ children }) => {
  // let { children } = props;

  const [data, setData] = useState([]);

  //call API có lỗi
  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  ///đây là context Provider
  return (
    <UserContext.Provider value={{ data }}>{children}</UserContext.Provider>
  );
  // <div>UserContext</div>;
};
