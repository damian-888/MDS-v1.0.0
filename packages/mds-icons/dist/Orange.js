import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const n = m(), e = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.312 6.784A6.37 6.37 0 0 0 19.125 1.5 1.125 1.125 0 0 0 18 .375h-.75A6.37 6.37 0 0 0 12 3.14 6.38 6.38 0 0 0 6.75.375H6a1.125 1.125 0 1 0 0 2.25h.75a4.13 4.13 0 0 1 3.994 3.094 8.63 8.63 0 1 0 5.568 1.065m.396-4.125a4.14 4.14 0 0 1-3.418 2.929 4.14 4.14 0 0 1 3.419-2.927zM12 20.625a6.375 6.375 0 1 1 6.375-6.375A6.38 6.38 0 0 1 12 20.625m4.652-4.912a4.88 4.88 0 0 1-3.188 3.187q-.165.05-.337.052a1.125 1.125 0 0 1-.338-2.199 2.63 2.63 0 0 0 1.718-1.717 1.127 1.127 0 0 1 1.796-.525 1.12 1.12 0 0 1 .35 1.2z" })
  ] });
});
s.displayName = "Orange";
export {
  s as Orange
};
//# sourceMappingURL=Orange.js.map
