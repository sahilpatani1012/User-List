import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="userlist">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age})Years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
