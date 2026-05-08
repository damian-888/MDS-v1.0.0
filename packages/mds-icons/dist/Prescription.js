import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const c = s(({
  size: i = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const t = h(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m17.719 17.625 1.83-1.83a1.126 1.126 0 1 0-1.594-1.593l-1.83 1.83-3.1-3.094a5.25 5.25 0 0 0-1.4-10.313H6.75A1.125 1.125 0 0 0 5.625 3.75V18a1.125 1.125 0 0 0 2.25 0v-4.875h2.156l4.5 4.5-1.83 1.83a1.127 1.127 0 0 0 1.594 1.593l1.83-1.83 1.83 1.83a1.127 1.127 0 0 0 1.593-1.593zM7.875 4.875h3.75a3 3 0 0 1 0 6h-3.75z" })
  ] });
});
c.displayName = "Prescription";
export {
  c as Prescription
};
//# sourceMappingURL=Prescription.js.map
