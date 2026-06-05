import { slides } from './deck-data.mjs';
import { buildSlide } from './slide-template.mjs';

export async function slide05(presentation, ctx) {
  return buildSlide(presentation, ctx, slides[4], 5);
}