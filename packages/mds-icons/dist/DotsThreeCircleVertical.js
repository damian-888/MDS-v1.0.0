import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...d
}, t) => {
  const a = c(), i = r ? l ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
h.displayName = "DotsThreeCircleVertical";
export {
  h as DotsThreeCircleVertical
};
//# sourceMappingURL=DotsThreeCircleVertical.js.map
