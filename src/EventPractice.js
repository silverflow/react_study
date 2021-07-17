import React, { Component } from "react";

export default class EventPractice extends Component {
	state = {
		message: "",
	};

	handleChange = (e) => {
		this.setState({
			message: e.target.value,
		});
	};

	handleClick = () => {
		alert(this.state.message);
		this.setState({
			message: "",
		});
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
					name="messge"
					placeholder="함수를 미리 준비해서 전달"
					value={this.state.message}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleClick}>확인</button>
			</div>
		);
	}
}
