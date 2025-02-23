import { StoryFn } from "@storybook/react";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "app/styles/_index.scss";
import { useEffect } from "react";

export const StyleDecorator = (Story: StoryFn) => {
    useEffect(() => {
        document.body.classList.add("storybook-font");
    }, []);
    return (

        <ThemeProvider>
            <div className="storybook-font">
                <Story />
            </div>
        </ThemeProvider>
    );
};
