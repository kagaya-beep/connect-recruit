import { slides } from './deck-data.mjs';
import { buildSlide } from './slide-template.mjs';

export async function slide22(presentation, ctx) {
  return buildSlide(presentation, ctx, slides[21], 22);
}