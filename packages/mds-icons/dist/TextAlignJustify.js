import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: i,
  titleId: a,
  ...d
}, t) => {
  const l = s(), e = i ? a ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: t, "aria-labelledby": e, ...d, children: [
    i ? /* @__PURE__ */ o("title", { id: e, children: i }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M2.625 6A1.125 1.125 0 0 1 3.75 4.875h16.5a1.125 1.125 0 0 1 0 2.25H3.75A1.125 1.125 0 0 1 2.625 6M20.25 8.625H3.75a1.125 1.125 0 0 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25m0 3.75H3.75a1.125 1.125 0 1 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25m0 3.75H3.75a1.125 1.125 0 1 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "TextAlignJustify";
export {
  m as TextAlignJustify
};
//# sourceMappingURL=TextAlignJustify.js.map
