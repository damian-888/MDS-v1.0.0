import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const f = n(({
  size: i = "1em",
  title: a,
  titleId: d,
  ...l
}, e) => {
  const t = s(), r = a ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...l, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M13.5 19.124a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.843-11.625 1.455-1.454a1.127 1.127 0 1 0-1.593-1.594L18.75 5.905l-1.454-1.452a1.127 1.127 0 1 0-1.594 1.594l1.454 1.452-1.452 1.454a1.127 1.127 0 0 0 1.593 1.594l1.453-1.454 1.454 1.455a1.126 1.126 0 1 0 1.593-1.594zm-3.928 7.06a7.5 7.5 0 0 0-8.824 0 1.125 1.125 0 1 0 1.324 1.818 5.25 5.25 0 0 1 6.176 0 1.125 1.125 0 0 0 1.324-1.819m-3.29-9.31A1.125 1.125 0 0 0 12 4.124 16.52 16.52 0 0 0 1.536 7.866a1.125 1.125 0 1 0 1.428 1.739A14.27 14.27 0 0 1 12 6.374a1.125 1.125 0 0 0 1.125-1.125m0 4.5A1.125 1.125 0 0 0 12 8.624a11.88 11.88 0 0 0-7.449 2.591 1.125 1.125 0 0 0 1.397 1.764A9.65 9.65 0 0 1 12 10.874a1.125 1.125 0 0 0 1.125-1.125" })
  ] });
});
f.displayName = "WifiX";
export {
  f as WifiX
};
//# sourceMappingURL=WifiX.js.map
