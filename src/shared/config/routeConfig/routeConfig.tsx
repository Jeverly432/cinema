import { AboutPage } from "pages/AboutPage";
import { DiscoveryPage } from "pages/DiscoveryPage";
import { MainPage } from "pages/MainPage";
import { NotFountPage } from "pages/notFoundPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    NOT_FOUND = "not_found",
    DISCOVERY = "discovery"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NOT_FOUND]: "*",
    [AppRoutes.DISCOVERY]: "/discovery",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFountPage />,
    },
    [AppRoutes.DISCOVERY]: {
        path: RoutePath.discovery,
        element: <DiscoveryPage />,
    },
};
