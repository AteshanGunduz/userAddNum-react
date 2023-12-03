import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);

  function addUser(name1) {
    setUsers([...users, { name: name1 }]);
  }

  return (
    <div className="App">
      <h1>Kullanıcı Ekleyin</h1>
      <div>
        <button
          style={{ fontSize: "24px" }}
          onClick={() => addUser("New User")}
        >
          Kullanıcı ekle
        </button>
      </div>
      <h2>{users ? users.length : 0} kullanıcı var </h2>
    </div>
  );
}
