import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const t = h(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m2.695-8.093L12 15.375h2.25a1.125 1.125 0 1 1 0 2.25h-4.5a1.125 1.125 0 0 1-.9-1.8l4.047-5.396a1.125 1.125 0 1 0-1.958-1.054 1.125 1.125 0 0 1-2.122-.75 3.375 3.375 0 1 1 5.878 3.157" })
  ] });
});
s.displayName = "NumberCircleTwo";
export {
  s as NumberCircleTwo
};
//# sourceMappingURL=NumberCircleTwo.js.map
