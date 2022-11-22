import React from "react";
import "./card.css";
function ProfileCard({ image, title }) {
	return (
		<>
			<div className="card">
				<h1>{title}</h1>
				<img src={image} alt="" />
			</div>
		</>
	);
}

export default ProfileCard;
