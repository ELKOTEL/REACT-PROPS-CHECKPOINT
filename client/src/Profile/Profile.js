import React from 'react'
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div>
       <h1>FullName:</h1>  {props.fullname}     
       <h1>Bio:</h1>{props.bio}
       <h1>Profession:</h1> {props.profession}
       <div>
       {props.children}
       </div>
       <button style={{ backgroundColor:'rgb(80, 150, 255)' , borderRadius : 4 , border : 'none' , width:100 }} onClick={props.handleName}>Button</button>
    </div>
  )
}
Profile.defaultProps = {
    fullname: " default fullname",
    bio: "default bio",
    profession: "default profession"
  }

Profile.propTypes = {
    fullname: PropTypes.string ,
    bio: PropTypes.string,
    profession: PropTypes.string
  };
    

export default Profile