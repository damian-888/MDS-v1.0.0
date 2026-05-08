import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as c, useId as h } from "react";
const s = c(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...l
}, n) => {
  const a = h(), e = o ? i ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: n, "aria-labelledby": e, ...l, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 7.125H9.375V5.25A2.625 2.625 0 0 1 12 2.625c1.267 0 2.405.902 2.648 2.1a1.125 1.125 0 1 0 2.204-.45c-.458-2.26-2.499-3.9-4.852-3.9A4.88 4.88 0 0 0 7.125 5.25v1.875H4.5A1.875 1.875 0 0 0 2.625 9v10.5A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875V9A1.875 1.875 0 0 0 19.5 7.125m-.375 12H4.875v-9.75h14.25zM10.5 14.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" })
  ] });
});
s.displayName = "LockOpen";
export {
  s as LockOpen
};
//# sourceMappingURL=LockOpen.js.map
