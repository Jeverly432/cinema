import { Theme, useTheme } from "app/providers/ThemeProvider";
import { ComponentType, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";

export const LightThemeDecorator = (Story: ComponentType) => {
    const { theme } = useTheme();

    useEffect(() => {
        document.documentElement.classList.remove(Theme.DARK);
        document.documentElement.classList.add(Theme.LIGHT);
    }, [theme]);
    return (
        <div>
            <Story />
        </div>
    );
};
