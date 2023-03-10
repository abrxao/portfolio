import React, { useState } from "react";
import axios from "axios";

export default function Send() {
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");
  async function handleSend(e) {
    e.preventDefault();
    const { data } = await axios({
      method: "post",
      url: "/api/banco",
      data: { name: value, gender: gender },
    });
  }

  return (
    <div>
      <form action="">
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <input type="text" onChange={(e) => setGender(e.target.value)} />
        <button type="submit" onClick={(e) => handleSend(e)}>
          send
        </button>
      </form>
    </div>
  );
}