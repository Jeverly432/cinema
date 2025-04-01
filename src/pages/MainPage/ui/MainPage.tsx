import { Counter } from "entities/Counter";
import { Banner } from "./views/Banner/Banner";
import { Categories } from "./views/Categories/Categories";

const MainPage = () => (
    <>
        <Banner />
        <Categories />
        <Counter />
    </>
);

export default MainPage;
