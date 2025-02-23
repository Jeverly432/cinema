import { createPortal } from "react-dom";
import { PortalProps } from "./types";

export const Portal = ({ ...props }: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;

    return (
        createPortal(children, element)
    );
};
