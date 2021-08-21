import React, { createContext, useState } from "react";

const ColorContext = createContext({
	state: { color: "black", subcolor: "red" },
	actions: {
		setColor: () => {},
		setSubcolor: () => {},
	},
});

const ColorProvider = ({ children }) => {
	const [color, setColor] = useState("black");
};

export default ColorContext;
