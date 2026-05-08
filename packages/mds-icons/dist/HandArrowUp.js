import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const m = h(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const n = v(), l = a ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: l, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.821 12.927a2.66 2.66 0 0 0-2.309-.457l-3.387.774v-.118a3 3 0 0 0-3-3H8.432a3.35 3.35 0 0 0-2.386.988L4.03 13.126H1.875A1.875 1.875 0 0 0 0 15v3.75a1.875 1.875 0 0 0 1.875 1.875h9.375q.139 0 .273-.034l6-1.5q.085-.021.168-.056l3.639-1.55.063-.029a2.682 2.682 0 0 0 .428-4.53M2.25 15.376h1.125v3H2.25zm18.158.057-3.517 1.5-5.78 1.443H5.625v-3.657l2.012-2.011a1.12 1.12 0 0 1 .795-.332h4.693a.75.75 0 1 1 0 1.5H10.5a1.125 1.125 0 0 0 0 2.25h3q.128 0 .252-.028l6.281-1.445.044-.011a.43.43 0 0 1 .488.632.43.43 0 0 1-.158.159m-6.204-9.387a1.125 1.125 0 0 1 0-1.594l3-3a1.125 1.125 0 0 1 1.594 0l3 3A1.126 1.126 0 0 1 20.57 6.29a1.1 1.1 0 0 1-.366-.244l-1.079-1.077v4.782a1.125 1.125 0 1 1-2.25 0V4.969l-1.08 1.077a1.124 1.124 0 0 1-1.59 0" })
  ] });
});
m.displayName = "HandArrowUp";
export {
  m as HandArrowUp
};
//# sourceMappingURL=HandArrowUp.js.map
