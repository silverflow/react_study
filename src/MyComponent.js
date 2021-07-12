import react from "react";

const MyComponent = (props) => {
	return <div>힘세고 강한 아침, 만일 내게 물어보면 나는 {props.name}</div>;
};

MyComponent.defaultProps = {
	name: "기본",
};

export default MyComponent;
