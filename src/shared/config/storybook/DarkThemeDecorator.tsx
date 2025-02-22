import { Theme, useTheme } from "app/providers/ThemeProvider";
import { ComponentType, useEffect } from "react";

export const DarkThemeDecorator = (Story: ComponentType) => {
    const { theme } = useTheme();

    useEffect(() => {
        document.documentElement.classList.remove(Theme.LIGHT);
        document.documentElement.classList.add(Theme.DARK);
        document.body.classList.add("body-centered");
    }, [theme]);

    return (
        <div>
            <Story />
        </div>
    );
};
