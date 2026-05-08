import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...t
}, l) => {
  const a = m(), i = r ? d ?? a : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...t, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m.75-12.75h-3A1.125 1.125 0 0 0 8.625 8.25v7.5a1.125 1.125 0 1 0 2.25 0v-1.125h1.875a3.75 3.75 0 0 0 0-7.5m0 5.25h-1.875v-3h1.875a1.5 1.5 0 0 1 0 3" })
  ] });
});
s.displayName = "LetterCircleP";
export {
  s as LetterCircleP
};
//# sourceMappingURL=LetterCircleP.js.map
