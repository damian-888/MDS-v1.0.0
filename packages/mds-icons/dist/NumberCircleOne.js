import { jsxs as a, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, n) => {
  const t = s(), i = r ? o ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M13.5 7.5v9a1.125 1.125 0 1 1-2.25 0V9.602l-.5.335A1.127 1.127 0 0 1 9.5 8.063l2.25-1.5a1.125 1.125 0 0 1 1.75.937" })
  ] });
});
c.displayName = "NumberCircleOne";
export {
  c as NumberCircleOne
};
//# sourceMappingURL=NumberCircleOne.js.map
