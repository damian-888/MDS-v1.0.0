import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: e,
  titleId: a,
  ...d
}, t) => {
  const l = s(), i = e ? a ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: t, "aria-labelledby": i, ...d, children: [
    e ? /* @__PURE__ */ o("title", { id: i, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M2.625 6A1.125 1.125 0 0 1 3.75 4.875h16.5a1.125 1.125 0 0 1 0 2.25H3.75A1.125 1.125 0 0 1 2.625 6M6 8.625a1.125 1.125 0 0 0 0 2.25h12a1.125 1.125 0 1 0 0-2.25zm14.25 3.75H3.75a1.125 1.125 0 1 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25M18 16.125H6a1.125 1.125 0 1 0 0 2.25h12a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "TextAlignCenter";
export {
  m as TextAlignCenter
};
//# sourceMappingURL=TextAlignCenter.js.map
