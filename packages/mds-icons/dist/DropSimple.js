import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const p = c(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const t = m(), e = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12.645.578a1.125 1.125 0 0 0-1.29 0 24.3 24.3 0 0 0-3.954 3.657c-2.634 3.024-4.026 6.23-4.026 9.265a8.625 8.625 0 1 0 17.25 0c0-7.253-7.654-12.694-7.98-12.922M12 19.875A6.38 6.38 0 0 1 5.625 13.5c0-3.123 1.875-5.941 3.44-7.754A23.4 23.4 0 0 1 12 2.916a23.4 23.4 0 0 1 2.934 2.83c1.566 1.813 3.441 4.631 3.441 7.754A6.38 6.38 0 0 1 12 19.875" })
  ] });
});
p.displayName = "DropSimple";
export {
  p as DropSimple
};
//# sourceMappingURL=DropSimple.js.map
