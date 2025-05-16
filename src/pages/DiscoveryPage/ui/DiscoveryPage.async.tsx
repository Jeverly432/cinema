import { lazy } from "react";

export const DiscoveryPageAsync = lazy(() => new Promise((resolve) => {
    (
    /* @ts-ignore */
        setTimeout(() => resolve(import("./DiscoveryPage")), 2000)
    );
}));
