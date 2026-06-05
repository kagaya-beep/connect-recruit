import { slides } from './deck-data.mjs';
import { buildSlide } from './slide-template.mjs';

export async function slide01(presentation, ctx) {
  return buildSlide(presentation, ctx, slides[0], 1);
}