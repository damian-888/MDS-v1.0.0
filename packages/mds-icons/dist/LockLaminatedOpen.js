import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as c } from "react";
const h = m(({
  size: o = "1em",
  title: e,
  titleId: i,
  ...a
}, n) => {
  const t = c(), r = e ? i ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: n, "aria-labelledby": r, ...a, children: [
    e ? /* @__PURE__ */ d("title", { id: r, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 7.125H9.375V5.25A2.625 2.625 0 0 1 12 2.625c1.267 0 2.405.902 2.648 2.1a1.125 1.125 0 1 0 2.204-.45c-.458-2.26-2.499-3.9-4.852-3.9A4.88 4.88 0 0 0 7.125 5.25v1.875H4.5A1.875 1.875 0 0 0 2.625 9v10.5A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875V9A1.875 1.875 0 0 0 19.5 7.125M4.875 13.5h14.25V15H4.875zm14.25-4.125v1.875H4.875V9.375zm-14.25 9.75V17.25h14.25v1.875z" })
  ] });
});
h.displayName = "LockLaminatedOpen";
export {
  h as LockLaminatedOpen
};
//# sourceMappingURL=LockLaminatedOpen.js.map
