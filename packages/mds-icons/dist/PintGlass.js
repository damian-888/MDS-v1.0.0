import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: l,
  titleId: a,
  ...d
}, e) => {
  const t = h(), i = l ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": i, ...d, children: [
    l ? /* @__PURE__ */ o("title", { id: i, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.593 2.25a1.13 1.13 0 0 0-.843-.375H5.25a1.125 1.125 0 0 0-1.117 1.26l2.17 18.093a1.875 1.875 0 0 0 1.862 1.647h7.669a1.875 1.875 0 0 0 1.862-1.652l2.17-18.089a1.12 1.12 0 0 0-.273-.884m-2.112 1.875-.18 1.5H6.698l-.18-1.5zm-1.98 16.5H8.498l-1.53-12.75h10.063z" })
  ] });
});
m.displayName = "PintGlass";
export {
  m as PintGlass
};
//# sourceMappingURL=PintGlass.js.map
