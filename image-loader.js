'use client';

export default function imageLoader({ src, width, quality }) {
  return `/optimized${src}.w${width}.q${quality || 75}.webp`;
}
