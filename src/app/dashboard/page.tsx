"use client";

import React, { useState } from "react";

function Dashboard() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}

export default Dashboard;
