import React from 'react';
import { Pill } from '../src';
import { IconSearch16, IconPlus16 } from '@warp-ds/icons/react';

const metadata = { title: 'Buttons/Pill' };
export default metadata;

export const Default = () => <Pill label="Example" />;

export const DefaultCanClose = () => <Pill label="Example" canClose onClose={() => alert('remove')} />;

export const Suggestion = () => <Pill label="Example" suggestion />;

export const SuggestionCanClose = () => <Pill label="Example" suggestion canClose onClose={() => alert('remove')} />;

export const PillOnClickAndOnClose = () => <Pill label="Example" onClick={() => alert('pill is clicked')} suggestion canClose onClose={() => alert('close is clicked')} />;

export const PillsWithIcon = () => (
  <div className="flex space-x-8">
    <Pill icon={<IconSearch16 />} onClick={() => alert('onClick event')} className="py-12" />
    <Pill icon={<IconPlus16 />} onClick={() => alert('onClick event')} suggestion className="py-12" />
  </div>
);
