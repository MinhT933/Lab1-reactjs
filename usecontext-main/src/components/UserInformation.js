import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
/// consumer nó nằm ở đây rồi
export default function UserInformation() {
  // gọi ra và xài nè ta dùng useContext nè
  const { data } = useContext(UserContext);
  console.log(data);

  return (
    <React.Fragment>
      {data.map((item) => {
        return <h1>{item.body}</h1>;
      })}
    </React.Fragment>
    // <h1>hihi</h1>
  );
}
