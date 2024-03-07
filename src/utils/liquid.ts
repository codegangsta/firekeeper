import { Liquid } from "liquidjs";
import type { Set } from "../content/schemas";

const defaults = {
  playerCount: `<img class="inline w-[26px] h-[26px] -mt-1.5" src="/icons/player-count.png">`,
};

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

interface createEngineOptions {
  sets: Set[];
}

export function createEngine({ sets }: createEngineOptions) {
  const globals = {
    ...defaults,
    sets: sets,
    keywords: sets.flatMap((s) => s.keywords).filter((k) => !!k),
  };
  const e = new Liquid({
    globals: {
      ...defaults,
      ...globals,
    },
  });
  e.registerFilter("keyword", (v) => {
    const keyword = globals.keywords.find((k) => k.id === v);
    if (!keyword) {
      return `<span class="text-red-500 font-bold">Keyword not found: ${v}</span>`;
    }
    return `<span class="text-black italic underline decoration-dotted decoration-zinc-800 cursor-help" title="${keyword.description}">${keyword.name}</span>`;
  });
  e.registerFilter("blackDice", (v) => {
    return `<span class="-mt-1.5 relative"><img class="w-6 h-6 inline" src="/icons/die-black.png"><span class="absolute inset-0 top-0.5 text-center text-white text-[16px] font-bold">${v}</span></span>`;
  });
  e.registerFilter("blueDice", (v) => {
    return `<span class="-mt-1.5 relative"><img class="w-6 h-6 inline" src="/icons/die-blue.png"><span class="absolute inset-0 top-0.5 text-center text-white text-[16px] font-bold">${v}</span></span>`;
  });
  e.registerFilter("orangeDice", (v) => {
    return `<span class="-mt-1.5 relative"><img class="w-6 h-6 inline" src="/icons/die-orange.png"><span class="absolute inset-0 top-0.5 text-center text-white text-[16px] font-bold">${v}</span></span>`;
  });
  return e;
}

export function liquify(engine: Liquid, text: string, template = {}) {
  try {
    return engine.parseAndRenderSync(escapeHtml(text), template);
  } catch (e: any) {
    console.error(e);
    return `<span class="text-red-500 font-bold">${e.toString()}</span>`;
  }
}
