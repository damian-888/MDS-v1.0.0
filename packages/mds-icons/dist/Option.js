import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...a
}, l) => {
  const t = s(), i = o ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": i, ...a, children: [
    o ? /* @__PURE__ */ d("title", { id: i, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.125 18A1.125 1.125 0 0 1 21 19.125h-5.912a1.87 1.87 0 0 1-1.676-1.037L8.679 8.625H3a1.125 1.125 0 0 1 0-2.25h5.912a1.87 1.87 0 0 1 1.676 1.037l4.733 9.463H21A1.125 1.125 0 0 1 22.125 18M14.25 8.625H21a1.125 1.125 0 1 0 0-2.25h-6.75a1.125 1.125 0 1 0 0 2.25" })
  ] });
});
m.displayName = "Option";
export {
  m as Option
};
//# sourceMappingURL=Option.js.map
