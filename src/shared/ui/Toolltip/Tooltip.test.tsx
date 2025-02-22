import { render, screen, fireEvent } from "@testing-library/react";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
    test("renders tooltip content on hover", () => {
        render(
            <Tooltip>
                <Tooltip.Trigger>
                    <div>Tooltip</div>
                </Tooltip.Trigger>
                <Tooltip.Content>
                    Content
                </Tooltip.Content>
            </Tooltip>,
        );

        expect(screen.queryByText("Content")).not.toBeInTheDocument();
    });
});
