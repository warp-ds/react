import React from 'react';
import { Badge } from '../src';

const metadata = { title: 'Layout/Badge' };
export default metadata;

export const Default = () => (
  <Badge>
    A badge without type or position
  </Badge>
);

export const Types = () => (
  <div className="space-x-16">
    <Badge type="neutral">
      neutral badge
    </Badge>
    <Badge type="info">
      info badge
    </Badge>
    <Badge type="positive">
      positive badge
    </Badge>
    <Badge type="warning">
      warning badge
    </Badge>
    <Badge type="negative">
      negative badge
    </Badge>
    <Badge type="disabled">
      disabled badge
    </Badge>
    <Badge type="notification">
      notification badge
    </Badge>
    <Badge type="price">
      price badge
    </Badge>
  </div>
);

export const Positions = () => (
  <div className="space-y-16 max-w-[400px]">
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge type="price" position="tl">tl : Top Left</Badge>
    </div>
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge type="price" position="tr">tr : Top Right</Badge>
    </div>
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge type="price" position="br">br : Bottom Right</Badge>
    </div>
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge type="price" position="bl">bl : Bottom Left</Badge>
    </div>
  </div>
);

export const As = () => (
  <Badge as="span">
    A badge wrapped in a span tag
  </Badge>
);
