interface userInfoProps {
  userInfo: {
    [key: string]: any;
    email?: string;
    id?: string;
    name?: string;
  };
}

const UserInfo = ({ userInfo }: userInfoProps) => (
  <div>
    <p>name: {userInfo.name}</p>
    <p>email: {userInfo.email}</p>
    <p>id: {userInfo.sub}</p>
  </div>
);

export default UserInfo;
