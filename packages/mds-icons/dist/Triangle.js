import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: a = "1em",
  title: r,
  titleId: l,
  ...o
}, d) => {
  const n = h(), e = r ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.525 17.447 14.326 3.21a2.694 2.694 0 0 0-4.652 0L1.476 17.447a2.57 2.57 0 0 0 0 2.598 2.65 2.65 0 0 0 2.326 1.33h16.397a2.65 2.65 0 0 0 2.324-1.33 2.57 2.57 0 0 0 .002-2.598m-1.95 1.472a.42.42 0 0 1-.375.206H3.802a.42.42 0 0 1-.375-.206.33.33 0 0 1 0-.35l8.198-14.237a.445.445 0 0 1 .75 0l8.199 14.237a.33.33 0 0 1 0 .35" })
  ] });
});
m.displayName = "Triangle";
export {
  m as Triangle
};
//# sourceMappingURL=Triangle.js.map
