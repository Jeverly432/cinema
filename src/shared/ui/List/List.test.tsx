import { render, screen } from "@testing-library/react";
import { List } from "./List";

describe("list", () => {
    test("have children", () => {
        render(<List>list</List>);
        expect(screen.getByText("list")).toBeInTheDocument();
    });
    test("we can add classname", () => {
        render(
            <List className="test-class">list</List>,
        );
        expect(screen.getByText("list")).toHaveClass("test-class");
    });
});
