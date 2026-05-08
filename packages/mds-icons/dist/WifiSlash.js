import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: i = "1em",
  title: a,
  titleId: o,
  ...d
}, e) => {
  const t = h(), r = a ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M20.332 19.492a1.126 1.126 0 1 1-1.665 1.513l-4.813-5.294a5.26 5.26 0 0 0-4.941.665 1.125 1.125 0 1 1-1.326-1.818 7.44 7.44 0 0 1 3.93-1.418l-1.813-1.995a9.8 9.8 0 0 0-3.756 1.833 1.125 1.125 0 0 1-1.397-1.764A12 12 0 0 1 8.026 9.3L6.403 7.518a14.2 14.2 0 0 0-3.439 2.089 1.126 1.126 0 1 1-1.428-1.742 16.5 16.5 0 0 1 3.282-2.098l-1.15-1.262a1.125 1.125 0 1 1 1.664-1.513zM12 17.623a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.051-4.645a1.125 1.125 0 0 0 1.397-1.764 12 12 0 0 0-3.51-1.93 1.125 1.125 0 0 0-.739 2.125 9.7 9.7 0 0 1 2.852 1.569m4.412-5.113A16.53 16.53 0 0 0 10.888 4.16a1.127 1.127 0 1 0 .149 2.25 14.272 14.272 0 0 1 9.998 3.199 1.125 1.125 0 1 0 1.428-1.74z" })
  ] });
});
m.displayName = "WifiSlash";
export {
  m as WifiSlash
};
//# sourceMappingURL=WifiSlash.js.map
