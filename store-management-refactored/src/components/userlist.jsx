import React from "react";

const UserList = props => {
  return (
    <div className="user_list">
      {props.userArray &&
        props.userArray.length > 0 &&
        props.userArray.map(function(user, index) {
          return (
            <li key={2}>
              {/* <a href="#"> */}
              <img src="login_bg.jpg"></img>
              <h2>{user.email}</h2>
              <p>{user.password}</p>
              {/* </a> */}
            </li>
          );
        })}
    </div>
  );
};

export default UserList;
