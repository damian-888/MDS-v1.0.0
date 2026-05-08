import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const v = s(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, t) => {
  const l = h(), o = r ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.625 4.5v3.75a1.125 1.125 0 1 1-2.25 0V5.625H15.75a1.125 1.125 0 0 1 0-2.25h3.75A1.125 1.125 0 0 1 20.625 4.5M8.25 18.375H5.625V15.75a1.125 1.125 0 0 0-2.25 0v3.75A1.125 1.125 0 0 0 4.5 20.625h3.75a1.125 1.125 0 1 0 0-2.25m11.25-3.75a1.125 1.125 0 0 0-1.125 1.125v2.625H15.75a1.125 1.125 0 1 0 0 2.25h3.75a1.125 1.125 0 0 0 1.125-1.125v-3.75a1.125 1.125 0 0 0-1.125-1.125M8.25 3.375H4.5A1.125 1.125 0 0 0 3.375 4.5v3.75a1.125 1.125 0 0 0 2.25 0V5.625H8.25a1.125 1.125 0 0 0 0-2.25" })
  ] });
});
v.displayName = "CornersOut";
export {
  v as CornersOut
};
//# sourceMappingURL=CornersOut.js.map
