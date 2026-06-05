import path from "node:path";

const C = {
  navy: "#071A35",
  navy2: "#0D274A",
  ink: "#102033",
  muted: "#64748B",
  blue: "#005AAB",
  cyan: "#08AFC8",
  pale: "#F4FAFC",
  line: "#DCE8EF",
  white: "#FFFFFF",
  soft: "#EAF7FA",
};

const FONT = {
  title: "Yu Gothic UI",
  body: "Yu Gothic UI",
  en: "Aptos",
};

function asset(ctx, name) {
  return path.join(ctx.workspaceDir, "assets", name);
}

function addText(ctx, slide, text, x, y, w, h, opt = {}) {
  return ctx.addText(slide, {
    text,
    left: x,
    top: y,
    width: w,
    height: h,
    fontSize: opt.size ?? 24,
    color: opt.color ?? C.ink,
    bold: opt.bold ?? false,
    typeface: opt.face ?? FONT.body,
    align: opt.align ?? "left",
    valign: opt.valign ?? "top",
    insets: opt.insets ?? { left: 0, right: 0, top: 0, bottom: 0 },
    fill: opt.fill ?? "#00000000",
    line: ctx.line("#00000000", 0),
  });
}

function rect(ctx, slide, x, y, w, h, fill, line = "#00000000", width = 0) {
  return ctx.addShape(slide, {
    left: x,
    top: y,
    width: w,
    height: h,
    fill,
    line: ctx.line(line, width),
  });
}

function footer(ctx, slide, data, number, dark = false) {
  const color = dark ? "#B9D6E1" : C.muted;
  addText(ctx, slide, data.section, 64, 662, 420, 22, { size: 13, color, face: FONT.en });
  addText(ctx, slide, String(number).padStart(2, "0"), 1150, 662, 60, 22, { size: 13, color, face: FONT.en, align: "right" });
}

function sectionPill(ctx, slide, data, dark = false) {
  const fill = dark ? "#12385F" : C.soft;
  const color = dark ? "#DDF7FF" : C.blue;
  rect(ctx, slide, 64, 60, 142, 34, fill);
  addText(ctx, slide, data.label, 82, 68, 110, 18, { size: 12, color, bold: true, face: FONT.en, align: "center" });
}

function titleBlock(ctx, slide, data, x = 64, y = 116, w = 760, dark = false) {
  addText(ctx, slide, data.title, x, y, w, 142, {
    size: data.title.length > 36 ? 34 : 42,
    color: dark ? C.white : C.ink,
    bold: true,
    face: FONT.title,
  });
}

function bodyText(ctx, slide, data, x = 64, y = 300, w = 700, dark = false) {
  addText(ctx, slide, data.body ?? "", x, y, w, 166, {
    size: 22,
    color: dark ? "#D8E6EE" : "#304255",
    face: FONT.body,
  });
}

async function cover(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  await ctx.addImage(slide, { path: asset(ctx, data.image), left: 0, top: 0, width: 1280, height: 720, fit: "cover" });
  rect(ctx, slide, 0, 0, 1280, 720, "#06182CCC");
  rect(ctx, slide, 760, 0, 520, 720, "#05B8D51F");
  addText(ctx, slide, data.note, 70, 54, 360, 30, { size: 18, color: "#BFEAF3", bold: true });
  addText(ctx, slide, data.title, 70, 198, 790, 190, { size: 54, color: C.white, bold: true, face: FONT.title });
  addText(ctx, slide, data.subtitle, 74, 430, 650, 80, { size: 23, color: "#D9EAF1" });
  rect(ctx, slide, 74, 548, 188, 3, C.cyan);
  footer(ctx, slide, data, number, true);
  return slide;
}

async function darkSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.navy);
  rect(ctx, slide, 858, 0, 422, 720, C.navy2);
  rect(ctx, slide, 928, 112, 206, 206, "#08AFC826");
  rect(ctx, slide, 1010, 390, 138, 138, "#005AAB33");
  sectionPill(ctx, slide, data, true);
  titleBlock(ctx, slide, data, 64, 146, 790, true);
  bodyText(ctx, slide, data, 66, 394, 690, true);
  footer(ctx, slide, data, number, true);
  return slide;
}

async function messageSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.white);
  rect(ctx, slide, 0, 0, 1280, 96, C.pale);
  rect(ctx, slide, 928, 96, 352, 624, "#F8FBFD");
  sectionPill(ctx, slide, data);
  titleBlock(ctx, slide, data, 64, 146, 780);
  bodyText(ctx, slide, data, 66, 374, 690);
  if (data.chips) {
    data.chips.forEach((chip, i) => {
      const x = 760 + (i % 2) * 190;
      const y = 210 + Math.floor(i / 2) * 86;
      rect(ctx, slide, x, y, 160, 54, C.soft, C.line, 1);
      addText(ctx, slide, chip, x + 14, y + 17, 132, 20, { size: 17, color: C.blue, bold: true, align: "center" });
    });
  } else {
    rect(ctx, slide, 828, 206, 190, 190, C.soft);
    rect(ctx, slide, 892, 270, 190, 190, "#E9F2FF");
    rect(ctx, slide, 956, 334, 190, 190, "#E9FBFF");
  }
  footer(ctx, slide, data, number);
  return slide;
}

async function philosophySlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.white);
  sectionPill(ctx, slide, data);
  addText(ctx, slide, data.subtitle, 64, 112, 420, 28, { size: 18, color: C.cyan, face: FONT.en });
  addText(ctx, slide, data.title, 64, 188, 890, 150, { size: 44, color: C.ink, bold: true, face: FONT.title });
  rect(ctx, slide, 66, 384, 96, 4, C.cyan);
  addText(ctx, slide, data.body, 66, 430, 850, 126, { size: 22, color: "#3A4C5F" });
  rect(ctx, slide, 1010, 112, 96, 430, "#E9F7FA");
  rect(ctx, slide, 1088, 112, 34, 430, C.cyan);
  footer(ctx, slide, data, number);
  return slide;
}

async function cardsSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.white);
  sectionPill(ctx, slide, data);
  titleBlock(ctx, slide, data, 64, 126, 800);
  addText(ctx, slide, data.body, 66, 282, 660, 90, { size: 20, color: "#3A4C5F" });
  const cards = data.cards ?? [];
  const cols = cards.length > 4 ? 3 : 2;
  const startX = 64;
  const startY = 410;
  const gap = 20;
  const cw = cols === 3 ? 360 : 520;
  const ch = cards.length > 4 ? 82 : 96;
  cards.forEach((card, i) => {
    const x = startX + (i % cols) * (cw + gap);
    const y = startY + Math.floor(i / cols) * (ch + gap);
    rect(ctx, slide, x, y, cw, ch, i % 2 === 0 ? C.pale : "#F8FBFD", C.line, 1);
    addText(ctx, slide, card, x + 24, y + 22, cw - 48, ch - 28, { size: cards.length > 4 ? 18 : 20, color: C.ink, bold: true, align: "center" });
  });
  footer(ctx, slide, data, number);
  return slide;
}

async function stepsSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.white);
  sectionPill(ctx, slide, data);
  titleBlock(ctx, slide, data, 64, 122, 800);
  bodyText(ctx, slide, data, 66, 300, 710);
  const y = 486;
  const steps = data.steps ?? [];
  steps.forEach((step, i) => {
    const x = 86 + i * 388;
    rect(ctx, slide, x, y, 300, 98, i === 1 ? "#EAF7FA" : "#F7FBFD", C.line, 1);
    addText(ctx, slide, `0${i + 1}`, x + 18, y + 16, 48, 28, { size: 20, color: C.cyan, bold: true, face: FONT.en });
    addText(ctx, slide, step, x + 70, y + 20, 204, 56, { size: 18, color: C.ink, bold: true });
    if (i < steps.length - 1) {
      addText(ctx, slide, ">", x + 322, y + 34, 28, 30, { size: 26, color: C.blue, bold: true, align: "center" });
    }
  });
  footer(ctx, slide, data, number);
  return slide;
}

async function metricSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.white);
  rect(ctx, slide, 690, 0, 590, 720, C.navy);
  sectionPill(ctx, slide, data);
  titleBlock(ctx, slide, data, 64, 138, 610);
  bodyText(ctx, slide, data, 66, 396, 570);
  addText(ctx, slide, "約", 770, 206, 60, 40, { size: 28, color: "#A9DCE8", bold: true });
  addText(ctx, slide, data.metric, 760, 246, 320, 130, { size: 104, color: C.white, bold: true, face: FONT.en, align: "center" });
  addText(ctx, slide, data.unit, 1080, 318, 74, 48, { size: 36, color: C.white, bold: true });
  addText(ctx, slide, "地域に積み重ねてきた信頼", 780, 420, 330, 36, { size: 22, color: "#D9EAF1", align: "center" });
  footer(ctx, slide, data, number, false);
  return slide;
}

async function photoTextSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.white);
  await ctx.addImage(slide, { path: asset(ctx, data.image), left: 720, top: 0, width: 560, height: 720, fit: "cover" });
  rect(ctx, slide, 720, 0, 560, 720, "#071A3544");
  sectionPill(ctx, slide, data);
  titleBlock(ctx, slide, data, 64, 142, 590);
  bodyText(ctx, slide, data, 66, 390, 560);
  footer(ctx, slide, data, number);
  return slide;
}

async function jobSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.white);
  rect(ctx, slide, 0, 0, 1280, 118, C.navy);
  sectionPill(ctx, slide, data, true);
  addText(ctx, slide, data.section, 64, 150, 410, 34, { size: 22, color: C.blue, bold: true });
  titleBlock(ctx, slide, data, 64, 210, 740);
  bodyText(ctx, slide, data, 66, 430, 710);
  data.tags.forEach((tag, i) => {
    const y = 206 + i * 92;
    rect(ctx, slide, 862, y, 278, 58, C.soft, C.line, 1);
    addText(ctx, slide, tag, 884, y + 17, 234, 22, { size: 18, color: C.ink, bold: true, align: "center" });
  });
  footer(ctx, slide, data, number);
  return slide;
}

async function closingSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  await ctx.addImage(slide, { path: asset(ctx, data.image), left: 0, top: 0, width: 1280, height: 720, fit: "cover" });
  rect(ctx, slide, 0, 0, 1280, 720, "#071A35DD");
  sectionPill(ctx, slide, data, true);
  addText(ctx, slide, data.title, 96, 178, 940, 180, { size: 46, color: C.white, bold: true, face: FONT.title });
  addText(ctx, slide, data.body, 100, 430, 720, 90, { size: 22, color: "#D9EAF1" });
  rect(ctx, slide, 100, 548, 210, 3, C.cyan);
  footer(ctx, slide, data, number, true);
  return slide;
}

export async function buildSlide(presentation, ctx, data, number) {
  if (data.kind === "cover") return cover(presentation, ctx, data, number);
  if (data.kind === "dark") return darkSlide(presentation, ctx, data, number);
  if (data.kind === "philosophy") return philosophySlide(presentation, ctx, data, number);
  if (data.kind === "cards") return cardsSlide(presentation, ctx, data, number);
  if (data.kind === "steps") return stepsSlide(presentation, ctx, data, number);
  if (data.kind === "metric") return metricSlide(presentation, ctx, data, number);
  if (data.kind === "photoText") return photoTextSlide(presentation, ctx, data, number);
  if (data.kind === "job") return jobSlide(presentation, ctx, data, number);
  if (data.kind === "closing") return closingSlide(presentation, ctx, data, number);
  return messageSlide(presentation, ctx, data, number);
}
