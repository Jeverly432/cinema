import {
    fireEvent, render, screen, waitFor,
} from "@testing-library/react";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
    test("renders tooltip content on hover", async () => {
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

        fireEvent.mouseEnter(screen.getByText("Tooltip"));

        await waitFor(() => {
            expect(screen.getByText("Content")).toBeInTheDocument();
        });
    });
});
