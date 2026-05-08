import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, t) => {
  const a = h(), l = o ? e ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": l, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: l, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.546 12.046a1.124 1.124 0 0 1-1.594 0L12 6.094l-5.954 5.952a1.127 1.127 0 1 1-1.594-1.594l6.75-6.75a1.127 1.127 0 0 1 1.594 0l6.75 6.75a1.125 1.125 0 0 1 0 1.594" })
  ] });
});
m.displayName = "Control";
export {
  m as Control
};
//# sourceMappingURL=Control.js.map
