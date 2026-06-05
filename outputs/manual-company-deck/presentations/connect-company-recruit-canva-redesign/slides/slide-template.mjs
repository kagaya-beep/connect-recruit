import path from "node:path";

const C = {
  ink: "#123047",
  deep: "#053A63",
  blue: "#0067B1",
  teal: "#3EC6CF",
  mint: "#DDF6F4",
  pale: "#F5FBFB",
  paper: "#FFFFFF",
  line: "#BDE7E7",
  muted: "#657789",
  gold: "#D6A63A",
  navy: "#062540",
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
    fontSize: opt.size ?? 22,
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

function circle(ctx, slide, x, y, size, fill, line = "#00000000", width = 0) {
  return ctx.addShape(slide, {
    geometry: "ellipse",
    left: x,
    top: y,
    width: size,
    height: size,
    fill,
    line: ctx.line(line, width),
  });
}

function watercolor(ctx, slide, variant = "light") {
  const a = variant === "dark" ? "#3EC6CF33" : "#58D5D733";
  const b = variant === "dark" ? "#0067B133" : "#BDE7E766";
  circle(ctx, slide, 895, -76, 260, a);
  circle(ctx, slide, 1025, 54, 185, b);
  circle(ctx, slide, 1012, 505, 250, "#E6F8F766");
  rect(ctx, slide, 0, 650, 1280, 20, "#B4EAE6");
  rect(ctx, slide, 0, 670, 1280, 50, "#EAF9F8");
}

function sideLabel(ctx, slide, text, dark = false) {
  rect(ctx, slide, 0, 118, 42, 172, dark ? "#0B587A" : "#83D7D4");
  addText(ctx, slide, text, 8, 134, 28, 140, {
    size: 15,
    color: dark ? "#EAFBFC" : C.paper,
    bold: true,
    face: FONT.en,
    align: "center",
  });
}

function header(ctx, slide, data, number, opt = {}) {
  const dark = opt.dark ?? false;
  sideLabel(ctx, slide, data.label, dark);
  addText(ctx, slide, data.section, 74, 64, 380, 24, {
    size: 16,
    color: dark ? "#B9F4F2" : C.teal,
    bold: true,
    face: FONT.en,
  });
  rect(ctx, slide, 74, 96, 150, 3, dark ? C.teal : "#9EE4E1");
  rect(ctx, slide, 228, 96, 84, 3, dark ? "#377EA2" : "#E0F5F4");
  addText(ctx, slide, String(number).padStart(2, "0"), 1174, 654, 42, 20, {
    size: 13,
    color: dark ? "#A7D9DF" : "#8FA3AE",
    face: FONT.en,
    align: "right",
  });
}

function title(ctx, slide, data, x = 74, y = 128, w = 760, dark = false, size = 38) {
  addText(ctx, slide, data.title, x, y, w, 132, {
    size,
    color: dark ? C.paper : C.ink,
    bold: true,
    face: FONT.title,
  });
}

function body(ctx, slide, data, x = 76, y = 318, w = 650, dark = false, size = 20) {
  addText(ctx, slide, data.body ?? "", x, y, w, 112, {
    size,
    color: dark ? "#D9EEF2" : "#405567",
  });
}

async function cover(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.paper);
  await ctx.addImage(slide, { path: asset(ctx, data.image), left: 682, top: 0, width: 598, height: 720, fit: "cover" });
  rect(ctx, slide, 682, 0, 598, 720, "#FFFFFF66");
  watercolor(ctx, slide);
  addText(ctx, slide, data.note, 78, 70, 300, 30, { size: 17, color: C.deep, bold: true });
  title(ctx, slide, data, 78, 212, 640, false, 48);
  rect(ctx, slide, 78, 404, 190, 4, C.teal);
  addText(ctx, slide, data.subtitle, 82, 438, 590, 48, { size: 22, color: C.blue, bold: true });
  addText(ctx, slide, "COMPANY / RECRUIT", 78, 610, 300, 24, { size: 16, color: C.muted, face: FONT.en });
  addText(ctx, slide, String(number).padStart(2, "0"), 1174, 654, 42, 20, { size: 13, color: C.muted, face: FONT.en, align: "right" });
  return slide;
}

async function darkSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.navy);
  watercolor(ctx, slide, "dark");
  rect(ctx, slide, 724, 126, 355, 355, "#1D6A872B");
  circle(ctx, slide, 892, 226, 164, "#3EC6CF24");
  header(ctx, slide, data, number, { dark: true });
  title(ctx, slide, data, 78, 164, 700, true, 42);
  body(ctx, slide, data, 80, 412, 700, true, 21);
  return slide;
}

async function messageSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.paper);
  watercolor(ctx, slide);
  header(ctx, slide, data, number);
  title(ctx, slide, data, 78, 144, 700, false, 40);
  body(ctx, slide, data, 80, 336, 640);
  if (data.chips) {
    data.chips.forEach((chip, i) => {
      const x = 812 + (i % 2) * 142;
      const y = 192 + Math.floor(i / 2) * 82;
      rect(ctx, slide, x, y, 114, 46, "#EAF9F8", "#BDE7E7", 1);
      addText(ctx, slide, chip, x + 10, y + 13, 94, 18, { size: 16, color: C.deep, bold: true, align: "center" });
    });
  } else {
    circle(ctx, slide, 850, 190, 190, "#DDF6F4AA");
    circle(ctx, slide, 980, 312, 145, "#EBF8FFAA");
  }
  return slide;
}

async function philosophySlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.paper);
  watercolor(ctx, slide);
  header(ctx, slide, data, number);
  addText(ctx, slide, data.subtitle, 78, 126, 420, 26, { size: 18, color: C.teal, face: FONT.en });
  title(ctx, slide, data, 78, 194, 900, false, 42);
  rect(ctx, slide, 82, 386, 120, 4, C.teal);
  addText(ctx, slide, data.body, 82, 436, 850, 92, { size: 21, color: "#3E5263" });
  rect(ctx, slide, 1016, 104, 48, 410, "#83D7D4");
  rect(ctx, slide, 1080, 104, 22, 410, "#E0F5F4");
  return slide;
}

async function cardsSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.paper);
  watercolor(ctx, slide);
  header(ctx, slide, data, number);
  title(ctx, slide, data, 78, 126, 820, false, 38);
  addText(ctx, slide, data.body, 80, 286, 740, 66, { size: 19, color: "#405567" });
  const cards = data.cards ?? [];
  const cols = cards.length > 4 ? 3 : 2;
  const cw = cols === 3 ? 328 : 448;
  const ch = cards.length > 4 ? 82 : 92;
  const sx = 80;
  const sy = 418;
  cards.forEach((card, i) => {
    const x = sx + (i % cols) * (cw + 24);
    const y = sy + Math.floor(i / cols) * (ch + 22);
    rect(ctx, slide, x + 6, y + 8, cw, ch, "#BEE8E633");
    rect(ctx, slide, x, y, cw, ch, "#F3FBFB", "#BDE7E7", 1);
    addText(ctx, slide, card, x + 24, y + 25, cw - 48, ch - 28, {
      size: cards.length > 4 ? 18 : 20,
      color: C.ink,
      bold: true,
      align: "center",
    });
  });
  return slide;
}

async function stepsSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.paper);
  watercolor(ctx, slide);
  header(ctx, slide, data, number);
  title(ctx, slide, data, 78, 122, 820, false, 38);
  body(ctx, slide, data, 80, 300, 720, false, 19);
  const steps = data.steps ?? [];
  steps.forEach((step, i) => {
    const x = 92 + i * 360;
    const y = 494;
    circle(ctx, slide, x, y, 72, i === 1 ? "#83D7D4" : "#E4F8F7", "#BDE7E7", 1);
    addText(ctx, slide, `0${i + 1}`, x + 18, y + 22, 36, 20, { size: 18, color: i === 1 ? C.paper : C.blue, bold: true, face: FONT.en, align: "center" });
    rect(ctx, slide, x + 84, y + 8, 220, 56, "#F8FCFC", "#BDE7E7", 1);
    addText(ctx, slide, step, x + 102, y + 24, 184, 20, { size: 17, color: C.ink, bold: true, align: "center" });
    if (i < steps.length - 1) addText(ctx, slide, "→", x + 314, y + 20, 34, 24, { size: 26, color: C.teal, bold: true, align: "center" });
  });
  return slide;
}

async function metricSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.paper);
  watercolor(ctx, slide);
  header(ctx, slide, data, number);
  title(ctx, slide, data, 78, 132, 610, false, 38);
  addText(ctx, slide, data.body, 80, 392, 540, 88, { size: 19, color: "#405567" });
  circle(ctx, slide, 744, 126, 390, "#DDF6F4");
  circle(ctx, slide, 815, 192, 256, "#FFFFFF");
  addText(ctx, slide, "約", 820, 244, 60, 34, { size: 28, color: C.blue, bold: true });
  addText(ctx, slide, data.metric, 790, 282, 320, 94, { size: 86, color: C.deep, bold: true, face: FONT.en, align: "center" });
  addText(ctx, slide, data.unit, 1050, 342, 70, 36, { size: 30, color: C.deep, bold: true });
  addText(ctx, slide, "地域に積み重ねてきた信頼", 794, 416, 320, 32, { size: 20, color: C.muted, align: "center" });
  return slide;
}

async function photoTextSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.paper);
  watercolor(ctx, slide);
  header(ctx, slide, data, number);
  const imageName = data.section === "コネクト光" && data.image === "hp_connect_hikari_blue.png"
    ? "connect-hikari-community-flow.png"
    : data.image;
  title(ctx, slide, data, 78, 128, 590, false, 38);
  addText(ctx, slide, data.body, 80, 364, 548, 112, { size: 19, color: "#405567" });
  rect(ctx, slide, 704, 132, 444, 318, "#EAF9F8");
  await ctx.addImage(slide, { path: asset(ctx, imageName), left: 728, top: 156, width: 396, height: 270, fit: "cover" });
  rect(ctx, slide, 684, 112, 92, 92, "#83D7D433");
  return slide;
}

async function jobSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  rect(ctx, slide, 0, 0, 1280, 720, C.paper);
  watercolor(ctx, slide);
  header(ctx, slide, data, number);
  addText(ctx, slide, data.section, 78, 132, 420, 26, { size: 19, color: C.blue, bold: true });
  title(ctx, slide, data, 78, 192, 720, false, 36);
  addText(ctx, slide, data.body, 80, 406, 680, 84, { size: 19, color: "#405567" });
  data.tags.forEach((tag, i) => {
    const y = 190 + i * 86;
    rect(ctx, slide, 848, y, 250, 54, "#F3FBFB", "#BDE7E7", 1);
    addText(ctx, slide, tag, 870, y + 16, 206, 20, { size: 17, color: C.ink, bold: true, align: "center" });
  });
  return slide;
}

async function closingSlide(presentation, ctx, data, number) {
  const slide = presentation.slides.add();
  await ctx.addImage(slide, { path: asset(ctx, data.image), left: 0, top: 0, width: 1280, height: 720, fit: "cover" });
  rect(ctx, slide, 0, 0, 1280, 720, "#062540D9");
  circle(ctx, slide, 920, 70, 240, "#3EC6CF26");
  circle(ctx, slide, 1020, 448, 210, "#FFFFFF17");
  header(ctx, slide, data, number, { dark: true });
  title(ctx, slide, data, 94, 194, 830, true, 44);
  addText(ctx, slide, data.body, 98, 444, 700, 72, { size: 21, color: "#DDF4F6" });
  rect(ctx, slide, 98, 552, 210, 4, C.teal);
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
