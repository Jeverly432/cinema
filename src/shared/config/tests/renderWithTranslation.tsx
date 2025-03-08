import { DeepPartial } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "shared/config/i18n/i18nForTests";

export function renderWithTranslation(component: ReactNode, initialState?: DeepPartial<StateSchema>) {
    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
            >
                <I18nextProvider i18n={i18nForTests}>
                    { component }
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
