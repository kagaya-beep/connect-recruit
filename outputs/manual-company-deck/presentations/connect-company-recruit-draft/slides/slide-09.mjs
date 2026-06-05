import { slides } from './deck-data.mjs';
import { buildSlide } from './slide-template.mjs';

export async function slide09(presentation, ctx) {
  return buildSlide(presentation, ctx, slides[8], 9);
}