import { Provider } from "react-redux";
import { StoreProviderProps } from "./types";
import { createReduxStore } from "../config/store";

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
