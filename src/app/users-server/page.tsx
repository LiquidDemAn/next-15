export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

async function UsersServerPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

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

export default UsersServerPage;
