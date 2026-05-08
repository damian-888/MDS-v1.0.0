import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const u = h(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const t = s(), a = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.375 9.75a1.125 1.125 0 1 1-2.25 0V6.469l-5.58 5.579a1.127 1.127 0 1 1-1.593-1.594l5.58-5.579H14.25a1.125 1.125 0 0 1 0-2.25h6a1.125 1.125 0 0 1 1.125 1.125zM17.25 12a1.125 1.125 0 0 0-1.125 1.125v6H4.875V7.875h6a1.125 1.125 0 0 0 0-2.25H4.5A1.875 1.875 0 0 0 2.625 7.5v12A1.875 1.875 0 0 0 4.5 21.375h12a1.875 1.875 0 0 0 1.875-1.875v-6.375A1.125 1.125 0 0 0 17.25 12" })
  ] });
});
u.displayName = "ArrowSquareOut";
export {
  u as ArrowSquareOut
};
//# sourceMappingURL=ArrowSquareOut.js.map
