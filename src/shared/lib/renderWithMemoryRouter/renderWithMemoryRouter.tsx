import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export function renderWithMemoryRouter(component: ReactNode) {
    return render(
        <MemoryRouter future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        }}
        >
            {component}
        </MemoryRouter>,
    );
}
