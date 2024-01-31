import { ComponentProps, ReactNode } from "react";
import { ExternalLinkConainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type ExternalLinkProps = ComponentProps<typeof ExternalLinkConainer> &{
    text: string;
    icon?: ReactNode;
    variant?: "iconLeft"
};

export function ExternalLink({text, icon, ...rest}: ExternalLinkProps) {
    return (
        <ExternalLinkConainer {...rest}>
            {text}
            {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
        </ExternalLinkConainer>
    )
}