import { jsxs as a, jsx as i } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const h = c(({
  size: o = "1em",
  title: e,
  titleId: d,
  ...l
}, n) => {
  const t = m(), r = e ? d ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: n, "aria-labelledby": r, ...l, children: [
    e ? /* @__PURE__ */ i("title", { id: r, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.5 7.125H9.375V5.25A2.625 2.625 0 0 1 12 2.625c1.267 0 2.405.902 2.648 2.1a1.125 1.125 0 1 0 2.204-.45c-.458-2.26-2.499-3.9-4.852-3.9A4.88 4.88 0 0 0 7.125 5.25v1.875H4.5A1.875 1.875 0 0 0 2.625 9v10.5A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875V9A1.875 1.875 0 0 0 19.5 7.125m-.375 12H4.875v-9.75h14.25z" })
  ] });
});
h.displayName = "LockSimpleOpen";
export {
  h as LockSimpleOpen
};
//# sourceMappingURL=LockSimpleOpen.js.map
