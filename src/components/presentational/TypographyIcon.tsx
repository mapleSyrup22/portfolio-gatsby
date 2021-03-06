import React from "react";
import styled from "styled-components";
import type { IconProps } from "./Icon";
import { Icon } from "./Icon";

export type TypographyIconProps = IconProps;

const StyledIcon = styled(Icon)`
	vertical-align: middle;
`;

export const TypograpyIcon = (props: IconProps) => {
	return <StyledIcon {...props} />;
};
