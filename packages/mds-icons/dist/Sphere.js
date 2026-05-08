import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const h = n(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...a
}, c) => {
  const l = m(), o = r ? i ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: c, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m7.875 10.112c-.052.132-.534.666-2.145 1.156q-.812.24-1.647.389A28 28 0 0 0 16.125 12c0-2.61-.37-5.328-1.148-7.29a7.89 7.89 0 0 1 4.898 7.277m-7.888-7.862c.132.053.666.534 1.156 2.145.469 1.556.732 3.592.732 5.73q-.001.923-.064 1.811-.887.063-1.811.064c-2.138 0-4.174-.26-5.73-.732-1.61-.487-2.092-1.024-2.145-1.156a7.884 7.884 0 0 1 7.862-7.862M4.71 14.977c1.961.778 4.678 1.148 7.289 1.148q.766 0 1.532-.043a15 15 0 0 1-.39 1.648c-.486 1.61-1.023 2.093-1.155 2.145a7.89 7.89 0 0 1-7.276-4.898m10.266 4.312c.392-.99.682-2.175.871-3.44 1.266-.188 2.45-.48 3.441-.872a7.92 7.92 0 0 1-4.312 4.312" })
  ] });
});
h.displayName = "Sphere";
export {
  h as Sphere
};
//# sourceMappingURL=Sphere.js.map
