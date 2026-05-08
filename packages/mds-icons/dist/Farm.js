import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, l) => {
  const m = h(), o = a ? e ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.61 19.417a1.126 1.126 0 1 1-1.516 1.665A19.08 19.08 0 0 0 2.25 16.125a1.125 1.125 0 1 1 0-2.25 21.32 21.32 0 0 1 14.36 5.542m-7.007-.188a17.5 17.5 0 0 0-7.353-1.604 1.125 1.125 0 1 0 0 2.25 15.24 15.24 0 0 1 6.413 1.397 1.125 1.125 0 1 0 .938-2.045zM22.875 15a1.125 1.125 0 0 1-1.125 1.125q-1.48 0-2.942.225a25.3 25.3 0 0 1 3.055 3.196 1.126 1.126 0 1 1-1.755 1.406A22.78 22.78 0 0 0 2.25 12.375a1.125 1.125 0 1 1 0-2.25c1.382 0 2.761.113 4.125.338V7.5a1.13 1.13 0 0 1 .45-.9l6-4.5a1.125 1.125 0 0 1 1.35 0l6 4.5a1.13 1.13 0 0 1 .45.9v2.651q.563-.025 1.125-.026a1.125 1.125 0 1 1 0 2.25 22.8 22.8 0 0 0-6.977 1.083q.87.501 1.702 1.074a21.4 21.4 0 0 1 5.275-.657A1.125 1.125 0 0 1 22.875 15m-8.25-4.875h-2.25v1.81q1.11-.448 2.25-.787zm-6 .815q.758.197 1.5.442V9a1.125 1.125 0 0 1 1.125-1.125h4.5A1.125 1.125 0 0 1 16.875 9v1.594q.75-.146 1.5-.249V8.062L13.5 4.406 8.625 8.063z" })
  ] });
});
s.displayName = "Farm";
export {
  s as Farm
};
//# sourceMappingURL=Farm.js.map
