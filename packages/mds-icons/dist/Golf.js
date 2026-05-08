import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...l
}, a) => {
  const t = s(), d = o ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": d, ...l, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.875 9.375a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-4.5 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M20.625 9A8.624 8.624 0 1 1 12 .375 8.635 8.635 0 0 1 20.625 9m-2.25 0A6.375 6.375 0 1 0 12 15.375 6.38 6.38 0 0 0 18.375 9m-3 9.55a10.18 10.18 0 0 1-6.75 0 1.125 1.125 0 1 0-.75 2.12c.969.344 1.977.564 3 .657v1.548a1.125 1.125 0 1 0 2.25 0v-1.55a12.4 12.4 0 0 0 3-.657 1.126 1.126 0 0 0-.75-2.121z" })
  ] });
});
c.displayName = "Golf";
export {
  c as Golf
};
//# sourceMappingURL=Golf.js.map
