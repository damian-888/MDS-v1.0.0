import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, t) => {
  const a = s(), i = r ? d ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 9.375q-.368 0-.732.05l2.463-4.372a1.124 1.124 0 0 0-.846-1.67 1.125 1.125 0 0 0-1.116.565L7.125 12.2A5.625 5.625 0 1 0 12 9.375m0 9a3.374 3.374 0 1 1 0-6.748 3.374 3.374 0 0 1 0 6.748" })
  ] });
});
h.displayName = "NumberSix";
export {
  h as NumberSix
};
//# sourceMappingURL=NumberSix.js.map
