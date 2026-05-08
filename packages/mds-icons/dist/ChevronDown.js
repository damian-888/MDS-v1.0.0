import { jsxs as l, jsx as n } from "react/jsx-runtime";
import { forwardRef as a, useId as h } from "react";
const m = a(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, t) => {
  const s = h(), e = o ? d ?? s : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ n("title", { id: e, children: o }) : null,
    /* @__PURE__ */ n("path", { d: "m6 9 6 6 6-6" })
  ] });
});
m.displayName = "ChevronDown";
export {
  m as ChevronDown
};
//# sourceMappingURL=ChevronDown.js.map
