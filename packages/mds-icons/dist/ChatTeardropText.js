import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...t
}, i) => {
  const l = m(), e = r ? d ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...t, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.5 10.125a1.125 1.125 0 0 1-1.125 1.125H9A1.125 1.125 0 1 1 9 9h6.375a1.125 1.125 0 0 1 1.125 1.125m-1.125 2.625H9A1.125 1.125 0 1 0 9 15h6.375a1.125 1.125 0 1 0 0-2.25m6.75-1.125a9.76 9.76 0 0 1-9.75 9.75H4.5A1.875 1.875 0 0 1 2.625 19.5v-7.875a9.75 9.75 0 0 1 19.5 0m-2.25 0a7.5 7.5 0 0 0-15 0v7.5h7.5a7.51 7.51 0 0 0 7.5-7.5" })
  ] });
});
s.displayName = "ChatTeardropText";
export {
  s as ChatTeardropText
};
//# sourceMappingURL=ChatTeardropText.js.map
