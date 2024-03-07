import { Liquid } from "liquidjs";

const engine = new Liquid();

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

export function liquify(text: string, template = {}) {
  return engine.parseAndRenderSync(escapeHtml(text), {
    ...defaults,
    ...template,
  });
}
