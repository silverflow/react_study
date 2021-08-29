import React, { createContext } from "react";

const ColorContext = createContext({
	state: { color: "black", subcolor: "red" },
	actions: {
		setColor: () => {},
		setSubcolor: () => {},
	},
});

export default ColorContext;
