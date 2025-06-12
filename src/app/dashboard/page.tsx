"use client";

import React, { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

function Dashboard() {
  const theme = useTheme();
  const [name, setName] = useState("");

  return (
    <div style={{ backgroundColor: theme.colors.primary }}>
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
