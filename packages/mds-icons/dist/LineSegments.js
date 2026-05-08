import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: l = "1em",
  title: e,
  titleId: i,
  ...o
}, d) => {
  const n = s(), r = e ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    e ? /* @__PURE__ */ a("title", { id: r, children: e }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M22.638 2.864A3.376 3.376 0 0 0 17.75 7.52l-2.234 4.149a3.4 3.4 0 0 0-1.968.288l-1.5-1.5a3.375 3.375 0 1 0-6.42-1.539 3.38 3.38 0 0 0 .875 2.35l-2.239 4.15a3.374 3.374 0 1 0 2.55 4.738 3.38 3.38 0 0 0-.57-3.672l2.235-4.15q.259.042.52.043c.503 0 1-.112 1.454-.328l1.5 1.5a3.375 3.375 0 1 0 5.544-.814l2.236-4.15q.256.04.516.042a3.375 3.375 0 0 0 2.387-5.761zM8.2 8.208A1.127 1.127 0 1 1 9.794 9.8 1.127 1.127 0 0 1 8.2 8.208M4.544 19.55a1.125 1.125 0 1 1 0-.002zm11.25-3.75a1.125 1.125 0 1 1 .002-.003zm5.25-9.75a1.125 1.125 0 1 1 .003-.004z" })
  ] });
});
c.displayName = "LineSegments";
export {
  c as LineSegments
};
//# sourceMappingURL=LineSegments.js.map
