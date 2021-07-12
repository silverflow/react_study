import React, { Component } from "react";

export default class Counter extends Component {
	constructor(pros) {
		super(pros);
		//state의 초깃값 설정하기
		this.state = {
			number: 0,
			fixNumber: 0,
		};
	}
	render() {
		const { number, fixNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 값: {fixNumber}</h2>
				<button
					// onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
					onClick={() => {
						//this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
						this.setState((prevState) => ({
							number: prevState.number + 1,
						}));
					}}
				>
					+1
				</button>
			</div>
		);
	}
}
