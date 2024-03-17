import Avatar from "./Avatar"

const UserInfo = () => {
    const info={
        name:"mehdi",
        avatar:{
            url:"logo192.png",
            width:'50px'
    }
    }
    const person={
        name:"mehdi",
        url:"logo192.png"
    }
  return (
    <div>
        <span>name:{info.name}</span>
        <Avatar person={person} size={60}/>
    </div>
  )
}

export default UserInfo