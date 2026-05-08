import { jsxs as m, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...v
}, d) => {
  const i = n(), o = a ? e ?? i : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": o, ...v, children: [
    a ? /* @__PURE__ */ l("title", { id: o, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M5.625 8.998v6a1.125 1.125 0 0 1-2.25 0v-6a1.125 1.125 0 0 1 2.25 0m-.293-6.006a1.125 1.125 0 1 0-1.665 1.513l3.458 3.803v12.69a1.125 1.125 0 0 0 2.25 0V10.78l1.5 1.65v5.568a1.125 1.125 0 0 0 2.25 0v-3.094l5.542 6.094a1.125 1.125 0 0 0 1.665-1.513zM12 7.549a1.125 1.125 0 0 0 1.125-1.125v-.426a1.125 1.125 0 1 0-2.25 0v.426A1.125 1.125 0 0 0 12 7.549m3.75 4.125a1.125 1.125 0 0 0 1.125-1.125v-1.55a1.125 1.125 0 1 0-2.25 0v1.55a1.126 1.126 0 0 0 1.125 1.125m3.75-5.3a1.125 1.125 0 0 0-1.125 1.124v7.176a1.125 1.125 0 1 0 2.25 0V7.498A1.125 1.125 0 0 0 19.5 6.373" })
  ] });
});
s.displayName = "WaveformSlash";
export {
  s as WaveformSlash
};
//# sourceMappingURL=WaveformSlash.js.map
