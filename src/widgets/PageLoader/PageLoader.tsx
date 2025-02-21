import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import { PageLoaderProps } from "./types";
import style from "./PageLoader.module.scss";

export const PageLoader = ({ className }:PageLoaderProps) => (
    <div className={classNames(style.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
