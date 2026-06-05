import { slides } from './deck-data.mjs';
import { buildSlide } from './slide-template.mjs';

export async function slide15(presentation, ctx) {
  return buildSlide(presentation, ctx, slides[14], 15);
}