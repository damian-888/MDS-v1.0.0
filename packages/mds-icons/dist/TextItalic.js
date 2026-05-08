import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, t) => {
  const a = s(), i = r ? o ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.125 5.25A1.125 1.125 0 0 1 18 6.375h-2.94l-3.75 11.25h2.19a1.125 1.125 0 1 1 0 2.25H6a1.125 1.125 0 1 1 0-2.25h2.94l3.75-11.25H10.5a1.125 1.125 0 1 1 0-2.25H18a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
c.displayName = "TextItalic";
export {
  c as TextItalic
};
//# sourceMappingURL=TextItalic.js.map
