import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...i
}, l) => {
  const t = s(), a = e ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    e ? /* @__PURE__ */ o("title", { id: a, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M23.625 16.875a3.75 3.75 0 0 1-6.428 2.625 1.124 1.124 0 1 1 1.606-1.574 1.5 1.5 0 1 0 1.072-2.551 1.125 1.125 0 0 1-.922-1.77l1.39-1.98H18a1.125 1.125 0 1 1 0-2.25h4.5a1.125 1.125 0 0 1 .922 1.77l-1.72 2.456a3.75 3.75 0 0 1 1.923 3.274M13.5 4.125a1.125 1.125 0 0 0-1.125 1.125v4.5h-7.5v-4.5a1.125 1.125 0 0 0-2.25 0V16.5a1.125 1.125 0 0 0 2.25 0V12h7.5v4.5a1.125 1.125 0 1 0 2.25 0V5.25A1.125 1.125 0 0 0 13.5 4.125" })
  ] });
});
v.displayName = "TextHThree";
export {
  v as TextHThree
};
//# sourceMappingURL=TextHThree.js.map
