import LoginForm from "./LoginForm";
import UserInfo from "./UserInfo";

const Profile = () => {
    const isLoggedIn=true;
    
  return (
    <div className="profile">
       {isLoggedIn?<UserInfo/>:<LoginForm/>}
    </div>
  )
}

export default Profile