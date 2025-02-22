import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/types";
import { useTranslation } from "react-i18next";
import { ThemeSwitcherProps } from "./types";

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.M} className={classNames("", {}, [className])} onClick={toggleTheme}>
            {/* <Sparks /> */}
            {" "}
            {theme === Theme.DARK ? t("theme-light") : t("theme-dark")}
        </Button>
    );
};
