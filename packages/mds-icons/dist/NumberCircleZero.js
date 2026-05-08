import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const a = s(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, m) => {
  const t = c(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: m, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m0-13.5c-2.65 0-4.5 2.313-4.5 5.625s1.85 5.625 4.5 5.625 4.5-2.313 4.5-5.625-1.85-5.625-4.5-5.625m0 9c-2.187 0-2.25-3.03-2.25-3.375S9.813 8.625 12 8.625s2.25 3.03 2.25 3.375-.063 3.375-2.25 3.375" })
  ] });
});
a.displayName = "NumberCircleZero";
export {
  a as NumberCircleZero
};
//# sourceMappingURL=NumberCircleZero.js.map
