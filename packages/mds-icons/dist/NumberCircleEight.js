import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, t) => {
  const a = h(), i = r ? d ?? a : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m2.588-8.335a3.374 3.374 0 1 0-5.175 0 3.75 3.75 0 1 0 5.175 0m-3.713-2.165a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0M12 15.75a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" })
  ] });
});
s.displayName = "NumberCircleEight";
export {
  s as NumberCircleEight
};
//# sourceMappingURL=NumberCircleEight.js.map
