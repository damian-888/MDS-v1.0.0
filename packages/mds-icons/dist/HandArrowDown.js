import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const w = h(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const n = v(), l = a ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: l, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.821 12.926a2.66 2.66 0 0 0-2.309-.457l-3.387.774v-.118a3 3 0 0 0-3-3H8.432a3.35 3.35 0 0 0-2.386.988L4.03 13.125H1.875A1.875 1.875 0 0 0 0 15v3.75a1.875 1.875 0 0 0 1.875 1.875h9.375q.139 0 .273-.034l6-1.5q.085-.021.168-.056l3.639-1.55.063-.029a2.682 2.682 0 0 0 .428-4.53M2.25 15.375h1.125v3H2.25zm18.158.057-3.517 1.5-5.78 1.443H5.625v-3.656l2.012-2.012a1.12 1.12 0 0 1 .795-.332h4.693a.75.75 0 1 1 0 1.5H10.5a1.125 1.125 0 1 0 0 2.25h3q.128 0 .252-.028l6.281-1.445.044-.011a.433.433 0 0 1 .33.791m-6.204-7.886a1.127 1.127 0 1 1 1.594-1.594l1.077 1.08V2.25a1.125 1.125 0 1 1 2.25 0v4.781l1.08-1.08a1.126 1.126 0 0 1 1.923.797 1.13 1.13 0 0 1-.33.797l-3 3a1.125 1.125 0 0 1-1.594 0z" })
  ] });
});
w.displayName = "HandArrowDown";
export {
  w as HandArrowDown
};
//# sourceMappingURL=HandArrowDown.js.map
