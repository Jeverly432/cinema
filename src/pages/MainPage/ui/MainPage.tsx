import { useTranslation } from "react-i18next"
import { Banner } from "./views/Banner/Banner"

const MainPage = () => {
    const { t } = useTranslation('main')

    return (
        <>
            <Banner />
        </>
    )
}

export default MainPage