import { jsxs as a, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: i = "1em",
  title: o,
  titleId: e,
  ...l
}, n) => {
  const t = h(), r = o ? e ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: n, "aria-labelledby": r, ...l, children: [
    o ? /* @__PURE__ */ d("title", { id: r, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21 4.125H3A1.875 1.875 0 0 0 1.125 6v12A1.875 1.875 0 0 0 3 19.875h18A1.875 1.875 0 0 0 22.875 18V6A1.875 1.875 0 0 0 21 4.125m-.375 13.5H3.375V6.375h17.25zM4.875 12a4.125 4.125 0 0 1 6.188-3.573 1.125 1.125 0 0 1-1.126 1.948 1.876 1.876 0 1 0 0 3.25 1.125 1.125 0 1 1 1.126 1.947A4.125 4.125 0 0 1 4.875 12m7.5 0a4.125 4.125 0 0 1 6.188-3.573 1.125 1.125 0 0 1-1.125 1.948 1.876 1.876 0 1 0 0 3.25 1.125 1.125 0 1 1 1.125 1.947A4.125 4.125 0 0 1 12.375 12" })
  ] });
});
m.displayName = "ClosedCaptioning";
export {
  m as ClosedCaptioning
};
//# sourceMappingURL=ClosedCaptioning.js.map
