import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation("about");

    return (
        <>
            About Page
        </>
    );
};

export default AboutPage;
