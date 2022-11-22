import React from "react";

function ProfileCard(props) {
	return (
		<>
			<div>My favorite animal is {props.animal}</div>;
			<div>My email is {props.email}</div>;
		</>
	);
}

export default ProfileCard;
