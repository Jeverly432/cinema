import { screen, fireEvent } from "@testing-library/react";
import { renderWithTranslation } from "shared/config/tests/renderWithTranslation";
import { Counter } from "./Counter";

describe("Counter", () => {
    test("on the page", () => {
        renderWithTranslation(<Counter />, { counter: { value: 10 } });
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    });

    test("increment", () => {
        renderWithTranslation(<Counter />, { counter: { value: 10 } });
        fireEvent.click(screen.getByTestId("increment-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });

    test("decrement", () => {
        renderWithTranslation(<Counter />, { counter: { value: 10 } });
        fireEvent.click(screen.getByTestId("decrement-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
});
