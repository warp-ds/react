import { i18n } from '@lingui/core';

import { generateId } from '../../utils/src/useId.js';

import type { ComboboxOption, OptionWithIdAndMatch } from './props.js';

// Add id and match to the object
export function createOptionsWithIdAndMatch(options: ComboboxOption[], currentInputValue: string): OptionWithIdAndMatch[] {
  return options.map((option) => ({
    ...option,
    id: generateId(),
    key: option.key || option.value,
    currentInputValue,
  }));
}

export function getAriaText(options: OptionWithIdAndMatch[], value: string) {
  if (!options) return;

  const filteredOptionsByInputValue = options.filter((option) => option.value.toLowerCase().includes(value.toLowerCase()));

  const pluralResults = i18n._({
    id: 'combobox.aria.pluralResults',
    message: '{numResults, plural, one {# result} other {# results}}',
    comment: 'Aria text for combobox when one or more results',
    values: { numResults: filteredOptionsByInputValue.length },
  });

  const noResults = i18n._({
    id: 'combobox.aria.noResults',
    message: 'No results.....',
    comment: 'Aria text for combobox when no results',
  });

  return filteredOptionsByInputValue.length ? pluralResults : noResults;
}

export function getSelectedOptionText(navigationOption: OptionWithIdAndMatch | null) {
  if (!navigationOption) {
    return '';
  }

  if (typeof navigationOption.label === 'string' || typeof navigationOption.label === 'number') {
    return navigationOption.label.toString();
  }

  return navigationOption.value;
}
