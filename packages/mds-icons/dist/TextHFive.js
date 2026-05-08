import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const s = n(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...d
}, l) => {
  const t = v(), a = e ? o ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    e ? /* @__PURE__ */ i("title", { id: a, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M23.625 16.875a3.75 3.75 0 0 1-3.75 3.75 3.7 3.7 0 0 1-2.678-1.087 1.123 1.123 0 0 1 .383-1.832 1.13 1.13 0 0 1 1.223.256 1.46 1.46 0 0 0 1.072.413 1.5 1.5 0 1 0 0-3 1.46 1.46 0 0 0-1.072.412 1.125 1.125 0 0 1-1.913-.975l.75-4.5a1.125 1.125 0 0 1 1.11-.937h3.75a1.125 1.125 0 0 1 0 2.25h-2.797l-.254 1.522a4 4 0 0 1 .426-.022 3.75 3.75 0 0 1 3.75 3.75M13.5 4.125a1.125 1.125 0 0 0-1.125 1.125v4.5h-7.5v-4.5a1.125 1.125 0 0 0-2.25 0V16.5a1.125 1.125 0 0 0 2.25 0V12h7.5v4.5a1.125 1.125 0 1 0 2.25 0V5.25A1.125 1.125 0 0 0 13.5 4.125" })
  ] });
});
s.displayName = "TextHFive";
export {
  s as TextHFive
};
//# sourceMappingURL=TextHFive.js.map
