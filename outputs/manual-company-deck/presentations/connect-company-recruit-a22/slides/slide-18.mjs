import { slides } from './deck-data.mjs';
import { buildSlide } from './slide-template.mjs';

export async function slide18(presentation, ctx) {
  return buildSlide(presentation, ctx, slides[17], 18);
}