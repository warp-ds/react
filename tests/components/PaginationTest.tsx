import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Pagination } from '../../packages/pagination/src/index.js';

const onChangeFunction = vi.fn();

describe('Pagination component', () => {
    beforeEach(() => {
        render(<Pagination currentPage={0}
            numPages={3}
            lastPage={3}
            createHref={(page) => `?page=${page}`}
            onChange={onChangeFunction} />);
    });

    it('renders', () => {
        expect(screen.getByText('Pages')).toBeInTheDocument();
    });

    it('renders an H1', () => {
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Pages');
    });

    it('renders correct number of buttons', () => {
        expect(screen.getAllByRole('button')).toHaveLength(5);
    });

    it('calls on change function on click of next page', () => {
        expect(screen.getByRole('button', { name: 'Next page' })).toHaveTextContent('Next page');
        fireEvent.click(screen.getByRole('button', { name: 'Next page' }));
        
        expect(onChangeFunction).toHaveBeenCalledTimes(1);
        expect(onChangeFunction).toHaveBeenCalledWith(1);
    });
});