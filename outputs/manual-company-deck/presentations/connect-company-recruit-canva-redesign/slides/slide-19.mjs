import { slides } from './deck-data.mjs';
import { buildSlide } from './slide-template.mjs';

export async function slide19(presentation, ctx) {
  return buildSlide(presentation, ctx, slides[18], 19);
}