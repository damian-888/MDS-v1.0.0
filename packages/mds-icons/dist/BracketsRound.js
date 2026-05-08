import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as c, useId as s } from "react";
const m = c(({
  size: o = "1em",
  title: r,
  titleId: a,
  ...i
}, t) => {
  const l = s(), d = r ? a ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.718 20.83a1.126 1.126 0 0 1-1.546.384C6 21.109 1.875 18.563 1.875 12c0-6.562 4.125-9.109 4.297-9.214a1.125 1.125 0 0 1 1.163 1.925c-.143.09-3.21 2.068-3.21 7.29 0 5.22 3.08 7.207 3.21 7.288a1.125 1.125 0 0 1 .383 1.541m10.11-18.044a1.124 1.124 0 1 0-1.164 1.925c.131.082 3.211 2.057 3.211 7.29 0 5.231-3.08 7.207-3.203 7.284a1.126 1.126 0 1 0 1.156 1.929c.172-.105 4.297-2.651 4.297-9.214 0-6.562-4.125-9.109-4.297-9.214" })
  ] });
});
m.displayName = "BracketsRound";
export {
  m as BracketsRound
};
//# sourceMappingURL=BracketsRound.js.map
