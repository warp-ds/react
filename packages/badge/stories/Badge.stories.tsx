import React from 'react';
import { Badge } from '../src';

const metadata = { title: 'Layout/Badge' };
export default metadata;

export const Default = () => (
  <Badge>
    A badge without variant or position
  </Badge>
);

export const Variants = () => (
  <div className="space-x-16">
    <Badge variant="neutral">
      neutral badge
    </Badge>
    <Badge variant="info">
      info badge
    </Badge>
    <Badge variant="positive">
      positive badge
    </Badge>
    <Badge variant="warning">
      warning badge
    </Badge>
    <Badge variant="negative">
      negative badge
    </Badge>
    <Badge variant="disabled">
      disabled badge
    </Badge>
    <Badge variant="notification">
      notification badge
    </Badge>
    <Badge variant="price">
      price badge
    </Badge>
  </div>
);

export const Positions = () => (
  <div className="space-y-16 max-w-[400px]">
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge variant="price" position="top-left">top-left</Badge>
    </div>
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge variant="price" position="top-right">top-right</Badge>
    </div>
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge variant="price" position="bottom-right">bottom-right</Badge>
    </div>
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge variant="price" position="bottom-left">bottom-left</Badge>
    </div>
  </div>
);

export const As = () => (
  <Badge as="span">
    A badge wrapped in a span tag
  </Badge>
);
