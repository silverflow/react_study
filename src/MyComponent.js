import react from "react";
import propTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
	return (
		<div>
			힘세고 강한 아침, 만일 내게 물어보면 나는 {name}
			<br />
			나는 {name}의 {children}
			<br />
			내가 좋아하는 숫자는 {favoriteNumber}
		</div>
	);
};

MyComponent.defaultProps = {
	name: "기본",
};

MyComponent.propTypes = {
	name: propTypes.string,
	favoriteNumber: propTypes.number.isRequired,
};

export default MyComponent;
