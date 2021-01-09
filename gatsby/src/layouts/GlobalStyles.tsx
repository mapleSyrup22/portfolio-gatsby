import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStylesComponent = createGlobalStyle`
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	html {
		font-size: 62.5%;
	}

	body {
		box-sizing: border-box;
		padding: 3rem;
		background-color:#404552
	}
`;

export const GlobalStyles = () => {
	return <GlobalStylesComponent />;
};
