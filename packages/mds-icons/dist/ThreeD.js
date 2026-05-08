import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const h = m(), a = r ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: a, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M8.25 13.875a1.5 1.5 0 0 0-1.5-1.5 1.125 1.125 0 0 1-.922-1.77l1.39-1.98H4.876a1.125 1.125 0 0 1 0-2.25h4.5a1.125 1.125 0 0 1 .922 1.77l-1.72 2.456a3.748 3.748 0 0 1-.061 6.585 3.75 3.75 0 0 1-4.444-.686 1.125 1.125 0 0 1 1.606-1.575 1.5 1.5 0 0 0 2.572-1.05m7.125-7.5a5.625 5.625 0 0 1 0 11.25h-2.25A1.125 1.125 0 0 1 12 16.5v-9a1.125 1.125 0 0 1 1.125-1.125zm0 2.25H14.25v6.75h1.125a3.375 3.375 0 0 0 0-6.75M3 5.25h18A1.125 1.125 0 0 0 21 3H3a1.125 1.125 0 0 0 0 2.25m18 13.5H3A1.125 1.125 0 1 0 3 21h18a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
s.displayName = "ThreeD";
export {
  s as ThreeD
};
//# sourceMappingURL=ThreeD.js.map
