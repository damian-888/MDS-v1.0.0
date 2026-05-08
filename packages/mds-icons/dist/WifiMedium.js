import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const f = n(({
  size: r = "1em",
  title: i,
  titleId: o,
  ...l
}, a) => {
  const t = s(), d = i ? o ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: a, "aria-labelledby": d, ...l, children: [
    i ? /* @__PURE__ */ e("title", { id: d, children: i }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.5 19.125a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.949-7.908a12 12 0 0 0-14.897 0 1.125 1.125 0 0 0 1.397 1.763 9.75 9.75 0 0 1 12.103 0 1.125 1.125 0 0 0 1.397-1.764m-3.036 3.343a7.505 7.505 0 0 0-8.826 0 1.125 1.125 0 0 0 1.326 1.818 5.25 5.25 0 0 1 6.175 0 1.125 1.125 0 1 0 1.325-1.818" })
  ] });
});
f.displayName = "WifiMedium";
export {
  f as WifiMedium
};
//# sourceMappingURL=WifiMedium.js.map
