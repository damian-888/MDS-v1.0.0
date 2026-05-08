import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, i) => {
  const c = s(), l = r ? d ?? c : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.32 3.737a1.125 1.125 0 0 0-1.057-1.057c-3.712-.219-6.993.219-9.75 1.3C7.875 5.014 5.842 6.617 4.63 8.616c-1.652 2.729-1.655 6.042-.042 9.205l-1.634 1.634a1.128 1.128 0 0 0 1.594 1.594l1.634-1.634c1.57.8 3.176 1.205 4.73 1.205a8.56 8.56 0 0 0 4.475-1.247c1.999-1.212 3.602-3.246 4.636-5.883 1.078-2.76 1.516-6.04 1.298-9.753m-7.102 13.708c-1.883 1.141-4.093 1.227-6.349.274l7.926-7.926a1.126 1.126 0 0 0-1.228-1.838q-.207.086-.366.245l-7.92 7.93c-.95-2.25-.864-4.464.282-6.348 1.96-3.237 6.613-5.036 12.562-4.898.13 5.947-1.67 10.6-4.907 12.561" })
  ] });
});
m.displayName = "Leaf";
export {
  m as Leaf
};
//# sourceMappingURL=Leaf.js.map
