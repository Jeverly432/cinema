import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import style from "./PageError.module.scss";
import { PageErrorProps } from "./types";

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(style.PageError, {}, [className])}>
            {t("page-error")}
            <Button onClick={reloadPage}>
                {t("page-error-reload-button")}
            </Button>
        </div>
    );
};
