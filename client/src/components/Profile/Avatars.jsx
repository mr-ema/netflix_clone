import Avatar from "./Avatar"

const Avatars = () => {
  return (
    <div className="avatars-container">
        <Avatar 
          avatar="url('https://i.pinimg.com/736x/82/d6/06/82d606cbfff9014d0c658900b156a54c.jpg')" 
          name="user_1"
        />
            <Avatar 
          avatar="url('https://i.pinimg.com/736x/42/3a/1c/423a1cb7bdbcb890b136fb7c6ef2b175.jpg')" 
          name="user_2"
        />
            <Avatar 
          avatar="url('https://i.pinimg.com/736x/9b/97/57/9b9757a34f54c265a14814afccd51aa1.jpg')" 
          name="user_3"
        />
    </div>
  )
}

export default Avatars