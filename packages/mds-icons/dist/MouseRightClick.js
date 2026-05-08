import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: o = "1em",
  title: i,
  titleId: h,
  ...d
}, l) => {
  const t = s(), r = i ? h ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: l, "aria-labelledby": r, ...d, children: [
    i ? /* @__PURE__ */ e("title", { id: r, children: i }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.5 1.125h-3A6.38 6.38 0 0 0 4.125 7.5v9a6.38 6.38 0 0 0 6.375 6.375h3a6.38 6.38 0 0 0 6.375-6.375v-9A6.38 6.38 0 0 0 13.5 1.125m3.938 5.156c.123.395.186.806.187 1.219v1.875h-3.281zm-1.265-1.92-3.048 3.045V3.375h.375c.98 0 1.928.35 2.673.986M10.5 3.375h.375v6h-4.5V7.5A4.13 4.13 0 0 1 10.5 3.375m3 17.25h-3A4.13 4.13 0 0 1 6.375 16.5v-4.875h11.25V16.5a4.13 4.13 0 0 1-4.125 4.125" })
  ] });
});
c.displayName = "MouseRightClick";
export {
  c as MouseRightClick
};
//# sourceMappingURL=MouseRightClick.js.map
