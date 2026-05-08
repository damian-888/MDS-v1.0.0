import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const t = v(), a = r ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14.625 5.25V16.5a1.125 1.125 0 1 1-2.25 0V12h-7.5v4.5a1.125 1.125 0 0 1-2.25 0V5.25a1.125 1.125 0 0 1 2.25 0v4.5h7.5v-4.5a1.125 1.125 0 1 1 2.25 0m9.375 12a1.125 1.125 0 0 1-1.125 1.125V19.5a1.125 1.125 0 1 1-2.25 0v-1.125h-3.75a1.125 1.125 0 0 1-.912-1.781l4.875-6.75a1.125 1.125 0 0 1 2.037.656v5.625A1.125 1.125 0 0 1 24 17.25m-3.375-3.27-1.55 2.145h1.55z" })
  ] });
});
m.displayName = "TextHFour";
export {
  m as TextHFour
};
//# sourceMappingURL=TextHFour.js.map
