
const Avatar = ({person,size}) => {
  return (
   <img
   src={person.url}
   alt={person.name}
   width={size}
   
   />
  )
}

export default Avatar