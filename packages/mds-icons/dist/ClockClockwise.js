import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const w = s(({
  size: l = "1em",
  title: o,
  titleId: i,
  ...d
}, a) => {
  const t = c(), r = o ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": r, ...d, children: [
    o ? /* @__PURE__ */ e("title", { id: r, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.125 7.5v3.863l3.203 1.922a1.124 1.124 0 1 1-1.157 1.93l-3.75-2.25a1.13 1.13 0 0 1-.546-.965V7.5a1.125 1.125 0 1 1 2.25 0M21 4.875A1.125 1.125 0 0 0 19.875 6v.69a40 40 0 0 0-1.246-1.32 9.376 9.376 0 1 0-.194 13.448 1.126 1.126 0 0 0-1.545-1.637 7.125 7.125 0 1 1 .143-10.224 36 36 0 0 1 1.55 1.668H17.25a1.125 1.125 0 1 0 0 2.25H21a1.125 1.125 0 0 0 1.125-1.125V6A1.125 1.125 0 0 0 21 4.875" })
  ] });
});
w.displayName = "ClockClockwise";
export {
  w as ClockClockwise
};
//# sourceMappingURL=ClockClockwise.js.map
