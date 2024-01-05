import { activateI18n } from '../../i18n.js';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import CurrentPage from './CurrentPage.js';
import FirstPage from './FirstPage.js';
import NextPage from './NextPage.js';
import Page from './Page.js';
import Pages from './Pages.js';
import PaginationContainer from './PaginationContainer.js';
import PrevPage from './PrevPage.js';
import React from 'react';

export type PaginationProps = {
  /** Additional CSS class for the container. */
  className?: string;

  /**  Given a page number, should return a valid href string. */
  createHref: (page: number) => string;

  /** The current page number. Adjusted so it's never below `1`, and never above `lastPage`. */
  currentPage: number;

  /** The number of pages to show. */
  numPages?: number;

  /** The number of the last page. */
  lastPage: number;

  /** Handler that is called with the page number to navigate to. `event.preventDefault` is called for you. Fallbacks to default browser behavior if undefined. */
  onChange?: (page: number) => void;

  /** Additional CSS styles for the container. */
  style?: React.CSSProperties;
} & Omit<
  React.PropsWithoutRef<JSX.IntrinsicElements['nav']>,
  'children' | 'onChange'
>;

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      currentPage,
      numPages,
      lastPage,
      createHref,
      className,
      onChange,
      ...props
    },
    ref,
  ) => {
    activateI18n(enMessages, nbMessages, fiMessages);

    if (!createHref) {
      throw new TypeError('createHref is undefined');
    }

    const handleClick =
      (page: number) => (event: React.UIEvent<HTMLElement>) => {
        if (onChange) {
          event.preventDefault();

          onChange(page);
        }
      };

    return (
      <PaginationContainer
        {...props}
        ref={ref}
        currentPage={currentPage}
        lastPage={lastPage}
        className={className}
      >
        <FirstPage href={createHref(1)} onClick={handleClick(1)} />
        <PrevPage
          href={createHref(currentPage - 1)}
          onClick={handleClick(currentPage - 1)}
        />
        <Pages numPages={numPages}>
          {(page) => (
            <Page href={createHref(page)} onClick={handleClick(page)} />
          )}
        </Pages>
        <CurrentPage />
        <NextPage
          href={createHref(currentPage + 1)}
          onClick={handleClick(currentPage + 1)}
        />
      </PaginationContainer>
    );
  },
);
