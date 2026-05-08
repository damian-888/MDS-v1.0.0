import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const f = n(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...l
}, i) => {
  const t = s(), a = e ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: i, "aria-labelledby": a, ...l, children: [
    e ? /* @__PURE__ */ o("title", { id: a, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.375 4.5v15a1.875 1.875 0 0 1-1.875 1.875h-6.375a1.125 1.125 0 1 1 0-2.25h6V4.875H4.875v8.25a1.125 1.125 0 1 1-2.25 0V4.5A1.875 1.875 0 0 1 4.5 2.625h15A1.875 1.875 0 0 1 21.375 4.5m-9.33 9.704a1.124 1.124 0 0 0-1.593 0L6 18.656l-1.454-1.452a1.126 1.126 0 0 0-1.838 1.228q.086.207.244.366l2.25 2.25a1.125 1.125 0 0 0 1.594 0l5.25-5.25a1.125 1.125 0 0 0 0-1.594" })
  ] });
});
f.displayName = "CheckSquareOffset";
export {
  f as CheckSquareOffset
};
//# sourceMappingURL=CheckSquareOffset.js.map
