import { jsxs as a, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...l
}, t) => {
  const n = c(), e = o ? d ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": e, ...l, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.375 10.5c0 2.212-.777 4.24-2.19 5.707-1.324 1.377-3.123 2.167-4.935 2.167-1.448 0-2.51-.392-3.27-.873l-.885 3.756a1.124 1.124 0 1 1-2.19-.516l3-12.75a1.124 1.124 0 1 1 2.19.516l-1.542 6.556c.327.392 1.118 1.061 2.697 1.061 2.396 0 4.875-2.105 4.875-5.625a6.375 6.375 0 1 0-11.898 3.188 1.125 1.125 0 0 1-1.947 1.125 8.625 8.625 0 1 1 16.095-4.313" })
  ] });
});
h.displayName = "PinterestLogo";
export {
  h as PinterestLogo
};
//# sourceMappingURL=PinterestLogo.js.map
