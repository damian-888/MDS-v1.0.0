import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const s = v(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...t
}, l) => {
  const a = h(), i = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...t, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M16.125 8.25v7.5a1.125 1.125 0 1 1-2.25 0v-2.625h-3.75v2.625a1.125 1.125 0 1 1-2.25 0v-7.5a1.125 1.125 0 0 1 2.25 0v2.625h3.75V8.25a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
s.displayName = "LetterCircleH";
export {
  s as LetterCircleH
};
//# sourceMappingURL=LetterCircleH.js.map
