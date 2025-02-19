import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from './types';

describe('button', () => {
    test('render', () => {
        render(

            <Button>
                TEST
            </Button>,

        );
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('with theme CLEAR', () => {
        render(

            <Button theme={ButtonTheme.CLEAR}>
                TEST
            </Button>,

        );
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
    test('with theme CLEAR', () => {
        render(

            <Button theme={ButtonTheme.PRIMARY}>
                TEST
            </Button>,

        );
        expect(screen.getByText('TEST')).toHaveClass('primary');
        screen.debug();
    });
});
