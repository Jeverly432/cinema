import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe("modal", () => {
    test("blocks page scroll when open", () => {
        render(
            <Modal open setOpen={() => {}}>
                Modal content
            </Modal>,
        );

        expect(document.body).toHaveClass("no-scroll");
    });

    test("displays the correct content", () => {
        render(
            <Modal open setOpen={() => {}}>
                Modal content
            </Modal>,
        );
        expect(screen.getByText("Modal content")).toBeInTheDocument();
    });
});
