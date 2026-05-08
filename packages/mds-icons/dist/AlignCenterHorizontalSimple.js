import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...n
}, d) => {
  const t = m(), i = r ? l ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": i, ...n, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 7.125h-6.375V4.5a1.125 1.125 0 1 0-2.25 0v2.625H4.5A1.875 1.875 0 0 0 2.625 9v6A1.875 1.875 0 0 0 4.5 16.875h6.375V19.5a1.125 1.125 0 1 0 2.25 0v-2.625H19.5A1.875 1.875 0 0 0 21.375 15V9A1.875 1.875 0 0 0 19.5 7.125m-.375 7.5H4.875v-5.25h14.25z" })
  ] });
});
s.displayName = "AlignCenterHorizontalSimple";
export {
  s as AlignCenterHorizontalSimple
};
//# sourceMappingURL=AlignCenterHorizontalSimple.js.map
