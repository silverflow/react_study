import React, { Component } from "react";

export default class EventPractice extends Component {
	state = {
		username: "",
		message: "",
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleClick = () => {
		alert(this.state.username + ": " + this.state.message);
		this.setState({
			username: "",
			message: "",
		});
	};

	handleKeyPress = (e) => {
		if (e.key === "Enter") {
			this.handleClick();
		}
	};
	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="message"
					placeholder="함수로 이벤트 전달"
					value={this.state.message}
					onChange={(e) => {
						this.setState({ message: e.target.value });
					}}
				/>
				<button
					onClick={() => {
						alert(this.state.message);
						this.setState({
							message: "",
						});
					}}
				>
					확인
				</button>
				<br />
				<input
					type="text"
					name="username"
					placeholder="함수를 미리 준비해서 전달"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="message"
					placeholder="함수를 미리 준비해서 전달"
					value={this.state.message}
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
				/>
				<button onClick={this.handleClick}>확인</button>
			</div>
		);
	}
}
