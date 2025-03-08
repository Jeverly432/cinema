import { screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/config/tests/renderWithTranslation";
import { NavBar } from "./NavBar";

describe("navbar", () => {
    test("on the page", () => {
        renderWithTranslation(<NavBar />);
        expect(screen.getByTestId("navbar")).toBeInTheDocument();
    });
});
