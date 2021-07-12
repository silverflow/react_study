import "./App.css";
import react from "react";

function App() {
	const name = "리액트";

	return (
		<div className="react">
			{/*주석은 이렇게 달아야한다!*/}
			<h1>헬로 {name}</h1>
			<h2>작동 테스트</h2>
			<h3>뭔데!</h3>
			{name === "리액트" ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다</h1>}
			<input />
		</div>
	);
}

export default App;
