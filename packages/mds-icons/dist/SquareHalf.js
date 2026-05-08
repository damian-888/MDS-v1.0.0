import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const n = t(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, i) => {
  const l = v(), h = r ? a ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": h, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: h, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18.75 3.375H5.25A1.875 1.875 0 0 0 3.375 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-5.625 6h5.25v1.5h-5.25zm0 3.75h5.25v1.5h-5.25zm5.25-6h-5.25v-1.5h5.25zm-12.75-1.5h5.25v12.75h-5.25zm7.5 12.75v-1.5h5.25v1.5z" })
  ] });
});
n.displayName = "SquareHalf";
export {
  n as SquareHalf
};
//# sourceMappingURL=SquareHalf.js.map
