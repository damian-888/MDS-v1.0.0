import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: h = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const l = n(), r = a ? i ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.5 10.125a1.125 1.125 0 0 1-1.125 1.125h-3.75a1.125 1.125 0 1 1 0-2.25h3.75A1.125 1.125 0 0 1 7.5 10.125M6.375 12.75h-3.75a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 1 0 0-2.25m0 3.75h-3.75a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 1 0 0-2.25m7.5-3.75h-3.75a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 1 0 0-2.25m0 3.75h-3.75a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 1 0 0-2.25m3.75-9h3.75a1.125 1.125 0 0 0 0-2.25h-3.75a1.125 1.125 0 0 0 0 2.25m3.75 1.5h-3.75a1.125 1.125 0 0 0 0 2.25h3.75a1.125 1.125 0 1 0 0-2.25m0 3.75h-3.75a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 1 0 0-2.25m0 3.75h-3.75a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
s.displayName = "Equalizer";
export {
  s as Equalizer
};
//# sourceMappingURL=Equalizer.js.map
