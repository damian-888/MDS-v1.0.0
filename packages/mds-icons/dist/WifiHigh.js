import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: r = "1em",
  title: i,
  titleId: e,
  ...a
}, l) => {
  const t = h(), o = i ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: l, "aria-labelledby": o, ...a, children: [
    i ? /* @__PURE__ */ d("title", { id: o, children: i }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M13.5 19.125a1.5 1.5 0 1 1-3.001 0 1.5 1.5 0 0 1 3 0m8.963-11.258a16.5 16.5 0 0 0-20.927 0 1.125 1.125 0 0 0 1.428 1.74 14.25 14.25 0 0 1 18.071 0 1.125 1.125 0 1 0 1.428-1.74m-3.015 3.35a12 12 0 0 0-14.897 0 1.125 1.125 0 0 0 1.397 1.763 9.75 9.75 0 0 1 12.103 0 1.125 1.125 0 0 0 1.397-1.763m-3.036 3.343a7.505 7.505 0 0 0-8.825 0 1.125 1.125 0 0 0 1.325 1.819 5.25 5.25 0 0 1 6.175 0 1.126 1.126 0 0 0 1.325-1.82" })
  ] });
});
s.displayName = "WifiHigh";
export {
  s as WifiHigh
};
//# sourceMappingURL=WifiHigh.js.map
