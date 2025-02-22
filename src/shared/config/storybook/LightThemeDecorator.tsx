import { Theme, useTheme } from "app/providers/ThemeProvider";
import { ComponentType, useEffect } from "react";

export const LightThemeDecorator = (Story: ComponentType) => {
    const { theme } = useTheme();

    useEffect(() => {
        document.documentElement.classList.remove(Theme.DARK);
        document.documentElement.classList.add(Theme.LIGHT);
        document.body.classList.add("body-centered");
    }, [theme]);

    return (
        <div>
            <Story />
        </div>
    );
};
