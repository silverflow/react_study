import React from "react";
import { withRouter } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
	metafor: {
		name: "윤도경",
		description: "리액트를 공부하려는 데이터 엔지니어",
	},
	yeezy: {
		name: "윤도경",
		description: "aka",
	},
};

const Profile = ({ match }) => {
	const { username } = match.params;
	const profile = data[username];
	if (!profile) {
		return <div>존재하지 않는 사용자입니다.</div>;
	}
	return (
		<div>
			<h3>
				{username}({profile.name})
			</h3>
			<p>{profile.description}</p>
			<WithRouterSample />
		</div>
	);
};

export default withRouter(Profile);
