import { Liquid } from "liquidjs";

const defaults = {
  playerCount: `<img class="inline w-[26px] h-[26px] -mt-1.5" src="/icons/player-count.png">`,
};

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function createEngine(globals = {}) {
  const e = new Liquid({
    globals: {
      ...defaults,
      ...globals,
    },
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
