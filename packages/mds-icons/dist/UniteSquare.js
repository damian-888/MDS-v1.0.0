import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const t = n(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.375 15V9a1.125 1.125 0 0 0-1.125-1.125h-4.125V3.75A1.125 1.125 0 0 0 15 2.625H3.75A1.125 1.125 0 0 0 2.625 3.75V15a1.125 1.125 0 0 0 1.125 1.125h4.125v4.125A1.125 1.125 0 0 0 9 21.375h11.25a1.125 1.125 0 0 0 1.125-1.125zm-5.906 4.125L4.875 8.531V6.47l12.656 12.656zm-9-14.25H8.53l10.594 10.594v2.062zm12.656 7.406-2.156-2.156h2.156zm-5.25-5.25-2.156-2.156h2.156zm-9 4.688 2.156 2.156H4.875zm5.25 5.25 2.156 2.156h-2.156z" })
  ] });
});
s.displayName = "UniteSquare";
export {
  s as UniteSquare
};
//# sourceMappingURL=UniteSquare.js.map
