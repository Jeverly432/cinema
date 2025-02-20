import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { NavBar } from './NavBar';

describe('navbar', () => {
    test('on the page', () => {
        renderWithTranslation(<NavBar />);
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
    test('dropdown open', () => {
        renderWithTranslation(<NavBar />);
        const toggleBtn = screen.getByTestId('dropdown-toggle');
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('dropdown-list')).toBeInTheDocument();
    });
});
