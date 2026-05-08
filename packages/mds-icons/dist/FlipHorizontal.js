import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...d
}, e) => {
  const t = m(), l = o ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: e, "aria-labelledby": l, ...d, children: [
    o ? /* @__PURE__ */ i("title", { id: l, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M9.75 1.915a1.86 1.86 0 0 0-2.1 1.107q-.01.022-.018.043l-5.62 14.982a1.875 1.875 0 0 0 1.738 2.58h5.625a1.875 1.875 0 0 0 1.875-1.876v-15a1.86 1.86 0 0 0-1.5-1.836M9 18.376H4.293L9 5.822zm12.987-.329L16.37 3.065l-.018-.043a1.875 1.875 0 0 0-3.602.73v15a1.875 1.875 0 0 0 1.875 1.874h5.625a1.876 1.876 0 0 0 1.738-2.579m-6.987.33V5.821l4.707 12.554z" })
  ] });
});
s.displayName = "FlipHorizontal";
export {
  s as FlipHorizontal
};
//# sourceMappingURL=FlipHorizontal.js.map
