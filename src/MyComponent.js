import react from "react";

const MyComponent = ({ name, children }) => {
	return (
		<div>
			힘세고 강한 아침, 만일 내게 물어보면 나는 {name}
			<br />
			나는 {name}의 {children}
		</div>
	);
};

MyComponent.defaultProps = {
	name: "기본",
};

export default MyComponent;
