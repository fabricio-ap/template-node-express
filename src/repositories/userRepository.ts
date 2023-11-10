import { User } from "../models/user";

const users: User[] = [
  {
    id: 0,
    email: "string",
  },
];

async function getUser(email: string): Promise<User | undefined> {
  return new Promise((resolve, reject) => {
    return resolve(users.find((user) => user.email === email));
  });
}

async function getUsers(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    return resolve(users);
  });
}

async function addUser(user: User): Promise<User> {
  return new Promise((resolve, reject) => {
    if (!user.email) {
      return reject(new Error("Invalid user."));
    }

    const newUser = new User(user.email);
    users.push(newUser);

    return resolve(newUser);
  });
}

async function updateUser(id: number, user: User): Promise<User | undefined> {
  return new Promise((resolve, reject) => {
    const index = users.findIndex((user) => user.id === id);

    if (index < 0) reject(new Error("User not found."));

    users[index] = { ...users[index], ...user };

    return resolve(users[index]);
  });
}

async function deleteUser(id: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const index = users.findIndex((user) => user.id === id);

    if (index < 0) return reject(new Error("User not found."));

    users.splice(index, 1);
    return resolve(true);
  });
}

export default { addUser, deleteUser, getUser, getUsers, updateUser };
