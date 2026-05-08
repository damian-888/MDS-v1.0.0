import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...l
}, a) => {
  const t = m(), d = o ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": d, ...l, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M15 3.375a8.63 8.63 0 0 0-7.594 4.534 6.375 6.375 0 1 0-.656 12.716H15a8.625 8.625 0 1 0 0-17.25m0 15H6.75a4.126 4.126 0 0 1-.17-8.25A8.6 8.6 0 0 0 6.374 12a1.125 1.125 0 0 0 2.25 0A6.375 6.375 0 1 1 15 18.375" })
  ] });
});
h.displayName = "Cloud";
export {
  h as Cloud
};
//# sourceMappingURL=Cloud.js.map
