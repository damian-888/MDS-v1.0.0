import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const t = m(), o = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.875 15A5.625 5.625 0 0 1 7.5 19.192 1.125 1.125 0 1 1 9 17.517a3.373 3.373 0 0 0 5.6-2.917 3.374 3.374 0 0 0-3.35-2.974 1.126 1.126 0 0 1-.9-1.8l3.15-4.2H8.25a1.125 1.125 0 0 1 0-2.25h7.5a1.125 1.125 0 0 1 .9 1.8l-3.42 4.56A5.635 5.635 0 0 1 16.875 15" })
  ] });
});
s.displayName = "NumberThree";
export {
  s as NumberThree
};
//# sourceMappingURL=NumberThree.js.map
