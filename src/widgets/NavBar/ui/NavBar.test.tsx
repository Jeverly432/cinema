import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from './NavBar';

describe('navbar', () => {
    test('on the page', () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>,
        );
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
});
