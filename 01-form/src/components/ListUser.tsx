// interface Props {
//   users: Array<{
//     name: string;
//     nickname: string;
//     description?: string;
//   }>;
// }

import User from "../interfaces";

interface Props {
  users: User[];
}

export default function ListUser({ users }: Props) {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h1>
            {user.name} {user.nickname}
          </h1>
          <p>{user.description}</p>
        </div>
      ))}
    </div>
  );
}
