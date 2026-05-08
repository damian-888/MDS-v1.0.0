import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const t = s(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m-.547-11.25-.254 1.522a4 4 0 0 1 .426-.022 3.75 3.75 0 0 1 0 7.5 3.7 3.7 0 0 1-2.678-1.087 1.125 1.125 0 0 1 1.606-1.575 1.46 1.46 0 0 0 1.072.412 1.5 1.5 0 1 0 0-3 1.46 1.46 0 0 0-1.072.412 1.125 1.125 0 0 1-1.913-.975l.75-4.5a1.125 1.125 0 0 1 1.11-.937h3.75a1.125 1.125 0 0 1 0 2.25z" })
  ] });
});
c.displayName = "NumberCircleFive";
export {
  c as NumberCircleFive
};
//# sourceMappingURL=NumberCircleFive.js.map
