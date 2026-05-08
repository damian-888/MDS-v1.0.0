import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...l
}, a) => {
  const t = s(), d = o ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": d, ...l, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.75 19.875h-1.875V3.75A1.875 1.875 0 0 0 18 1.875H6A1.875 1.875 0 0 0 4.125 3.75v16.125H2.25a1.125 1.125 0 1 0 0 2.25h19.5a1.125 1.125 0 1 0 0-2.25M6.375 4.125h11.25v15.75H6.375zm9.75 8.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
m.displayName = "Door";
export {
  m as Door
};
//# sourceMappingURL=Door.js.map
