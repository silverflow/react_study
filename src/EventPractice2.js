import React, { useState } from "react";

const EventPractice2 = () => {
	const [form, setForm] = useState({
		username: "",
		message: "",
	});
	const { username, message } = form;
	const onChange = (e) => {
		const nextForm = {
			...form, // 기존의 form 내용을 이 자리에 복사한 뒤
			[e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
		};
		setForm(nextForm);
	};
	const onClick = () => {
		alert(username + ":" + message);
		setForm({
			username: "",
			message: "",
		});
	};
	const onKeyPress = (e) => {
		if (e.key === "Enter") {
			onClick();
		}
	};
	return (
		<div>
			<h1>이벤트 연습(함수형)</h1>
			<input
				type="text"
				placeholder="사용자명"
				name="username"
				value={username}
				onChange={onChange}
			/>
			<input
				type="text"
				placeholder="메세지 입력"
				name="message"
				value={message}
				onChange={onChange}
				onKeyPress={onKeyPress}
			/>
			<button onClick={onClick}>확인</button>
		</div>
	);
};

export default EventPractice2;
