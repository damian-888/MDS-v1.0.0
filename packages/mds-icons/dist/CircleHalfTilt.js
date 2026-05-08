import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const v = m(({
  size: r = "1em",
  title: l,
  titleId: o,
  ...a
}, d) => {
  const t = s(), i = l ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": i, ...a, children: [
    l ? /* @__PURE__ */ e("title", { id: i, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.16 4.837A10.132 10.132 0 1 0 4.826 19.162 10.132 10.132 0 0 0 19.16 4.837M16.5 18.47a7.8 7.8 0 0 1-1.5.82v-8.695l1.5-1.5zM6.432 6.429a7.88 7.88 0 0 1 10.284-.739L5.693 16.719A7.88 7.88 0 0 1 6.432 6.43M9 16.594v2.69a7.8 7.8 0 0 1-1.715-.975zm2.25 3.245v-5.495l1.5-1.5v6.997a8 8 0 0 1-1.5-.002m7.5-3.775V7.936a7.9 7.9 0 0 1 0 8.128" })
  ] });
});
v.displayName = "CircleHalfTilt";
export {
  v as CircleHalfTilt
};
//# sourceMappingURL=CircleHalfTilt.js.map
