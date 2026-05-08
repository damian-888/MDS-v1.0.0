import { jsxs as a, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...t
}, l) => {
  const n = m(), i = r ? e ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...t, children: [
    r ? /* @__PURE__ */ d("title", { id: i, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m3.9-4.95a4.875 4.875 0 1 1 0-5.852 1.127 1.127 0 0 1-.212 1.592 1.126 1.126 0 0 1-1.587-.24 2.625 2.625 0 1 0 0 3.15 1.126 1.126 0 0 1 2.034.507 1.13 1.13 0 0 1-.236.844" })
  ] });
});
s.displayName = "Copyright";
export {
  s as Copyright
};
//# sourceMappingURL=Copyright.js.map
