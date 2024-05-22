import styled from "styled-components";
import { ButtonOptionsProps } from "@/interfaces/buttonopts";

export const ButtonOptions = styled.button<ButtonOptionsProps>`
    background-color: ${(props) => props.color};
    color: ${(props) => props.textColor};
    font-weight: bold;
    padding: 4px;
    border-radius: 5px;
    &:hover {
        background-color: ${(props) => props.hoverColor};
    };
`;
