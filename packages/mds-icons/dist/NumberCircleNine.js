import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const c = t(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const n = s(), i = r ? d ?? n : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m1.875-12.997a3.75 3.75 0 1 0-2.35 6.967l-1.24 2.078a1.125 1.125 0 1 0 1.93 1.154L15.249 12a3.75 3.75 0 0 0-1.373-5.122m-.576 3.997a1.5 1.5 0 1 1-2.595-1.501 1.5 1.5 0 0 1 2.593 1.501z" })
  ] });
});
c.displayName = "NumberCircleNine";
export {
  c as NumberCircleNine
};
//# sourceMappingURL=NumberCircleNine.js.map
