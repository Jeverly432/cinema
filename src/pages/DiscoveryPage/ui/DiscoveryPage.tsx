import { BrandSlider } from "entities/BrandSlider";
import { Banner } from "./views/Banner/Banner";
import style from "./DiscoveryPage.module.scss";

const DiscoveryPage = () => (
    <div className={style.page}>
        <Banner />
        <BrandSlider />
    </div>
);

export default DiscoveryPage;
