import { StoryFn } from "@storybook/react";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "app/styles/_index.scss";

export const StyleDecorator = (Story: StoryFn) => (
    <ThemeProvider>
        <div>
            <Story />
        </div>
    </ThemeProvider>
);
