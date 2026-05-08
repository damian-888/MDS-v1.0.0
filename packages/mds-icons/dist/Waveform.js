import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const v = n(), a = r ? d ?? v : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M5.625 9v6a1.125 1.125 0 0 1-2.25 0V9a1.125 1.125 0 0 1 2.25 0M8.25 1.875A1.125 1.125 0 0 0 7.125 3v18a1.125 1.125 0 0 0 2.25 0V3A1.125 1.125 0 0 0 8.25 1.875m3.75 3A1.125 1.125 0 0 0 10.875 6v12a1.125 1.125 0 1 0 2.25 0V6A1.125 1.125 0 0 0 12 4.875m3.75 3A1.125 1.125 0 0 0 14.625 9v6a1.125 1.125 0 1 0 2.25 0V9a1.125 1.125 0 0 0-1.125-1.125m3.75-1.5A1.125 1.125 0 0 0 18.375 7.5v9a1.125 1.125 0 1 0 2.25 0v-9A1.125 1.125 0 0 0 19.5 6.375" })
  ] });
});
s.displayName = "Waveform";
export {
  s as Waveform
};
//# sourceMappingURL=Waveform.js.map
