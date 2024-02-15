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
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Pages');
    });

    it('renders correct number of links', () => {
        expect(screen.getAllByRole('link')).toHaveLength(4);
    });

    it('calls on change function on click of next page', () => {
        expect(screen.getByRole('link', { name: 'Next page, icon' })).toHaveTextContent('Rightward arrow');
        fireEvent.click(screen.getByRole('link', { name: 'Next page, icon' }));

        expect(onChangeFunction).toHaveBeenCalledTimes(1);
        expect(onChangeFunction).toHaveBeenCalledWith(1);
    });
});