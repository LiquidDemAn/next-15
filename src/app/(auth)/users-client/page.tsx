"use client";

import { useEffect, useState } from "react";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

function UsersClientPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Could not fetch users.");
        }

        const data = await response.json();

        setUsers(data || []);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error has occurred.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {users.map(({ id, name, username, email, phone }) => (
        <li
          key={id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold">{name}</div>
          <div className="text-sm">
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UsersClientPage;
