import "./App.css";
import react, { Fragment } from "react";

function App() {
	const name = "리액트";
	return (
		<>
			<h1>헬로 {name}</h1>
			<h2>작동 테스트</h2>
			<h3>뭔데!</h3>
			{name === "리액트" ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다</h1>}
		</>
	);
}

export default App;
