import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const w = s(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...d
}, a) => {
  const t = h(), e = r ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.875 5.25v4.5a1.125 1.125 0 0 1-1.125 1.124h-4.5a1.125 1.125 0 0 1 0-2.25h1.603l-1.78-1.63q-.02-.015-.037-.034a7.126 7.126 0 1 0-5.13 12.164H12a7.08 7.08 0 0 0 4.89-1.942 1.125 1.125 0 1 1 1.545 1.636A9.32 9.32 0 0 1 12 21.374h-.128A9.375 9.375 0 1 1 18.61 5.348l2.015 1.844V5.249a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
w.displayName = "ArrowClockwise";
export {
  w as ArrowClockwise
};
//# sourceMappingURL=ArrowClockwise.js.map
