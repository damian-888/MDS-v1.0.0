import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const t = m(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M4.875 3.75v16.5a1.125 1.125 0 0 1-2.25 0V3.75a1.125 1.125 0 0 1 2.25 0m1.5 5.625V6A1.875 1.875 0 0 1 8.25 4.125h8.25A1.875 1.875 0 0 1 18.375 6v3.375A1.875 1.875 0 0 1 16.5 11.25H8.25a1.875 1.875 0 0 1-1.875-1.875M8.625 9h7.5V6.375h-7.5zm13.5 5.625V18a1.875 1.875 0 0 1-1.875 1.875h-12A1.875 1.875 0 0 1 6.375 18v-3.375A1.875 1.875 0 0 1 8.25 12.75h12a1.875 1.875 0 0 1 1.875 1.875m-2.25.375H8.625v2.625h11.25z" })
  ] });
});
s.displayName = "AlignLeft";
export {
  s as AlignLeft
};
//# sourceMappingURL=AlignLeft.js.map
