import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, l) => {
  const t = m(), i = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m20.35 13.156 1.24-2.08a1.125 1.125 0 1 0-1.93-1.153l-3.024 5.063-.023.044a3.75 3.75 0 1 0 3.736-1.875m-.475 5.219a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M14.625 5.25V16.5a1.125 1.125 0 1 1-2.25 0V12h-7.5v4.5a1.125 1.125 0 0 1-2.25 0V5.25a1.125 1.125 0 0 1 2.25 0v4.5h7.5v-4.5a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
s.displayName = "TextHSix";
export {
  s as TextHSix
};
//# sourceMappingURL=TextHSix.js.map
