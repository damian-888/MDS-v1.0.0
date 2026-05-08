import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as c, useId as s } from "react";
const h = c(({
  size: i = "1em",
  title: r,
  titleId: d,
  ...a
}, e) => {
  const n = s(), l = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": l, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m22.327 7.364-5.69-5.69a1.876 1.876 0 0 0-2.653 0L9.113 6.564c-1.166-.312-3.439-.536-5.788 1.36a1.875 1.875 0 0 0-.15 2.787l4.262 4.262-3.732 3.732A1.127 1.127 0 1 0 5.3 20.297l3.731-3.732 4.263 4.262c.351.351.827.548 1.324.548q.065.001.131-.004a1.87 1.87 0 0 0 1.365-.745c.44-.585 1.031-1.513 1.354-2.626.322-1.112.323-2.145.015-3.13l4.847-4.863a1.875 1.875 0 0 0-.002-2.643m-6.962 6.449a1.125 1.125 0 0 0-.21 1.297c.322.643.648 1.969-.588 3.811L5.07 9.425c1.977-1.368 3.706-.622 3.844-.562a1.094 1.094 0 0 0 1.295-.215l5.103-5.12 5.156 5.157z" })
  ] });
});
h.displayName = "PushPin";
export {
  h as PushPin
};
//# sourceMappingURL=PushPin.js.map
