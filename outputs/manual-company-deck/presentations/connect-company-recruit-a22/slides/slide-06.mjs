import { slides } from './deck-data.mjs';
import { buildSlide } from './slide-template.mjs';

export async function slide06(presentation, ctx) {
  return buildSlide(presentation, ctx, slides[5], 6);
}