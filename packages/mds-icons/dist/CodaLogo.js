import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const v = h(({
  size: a = "1em",
  title: o,
  titleId: e,
  ...i
}, l) => {
  const t = s(), r = o ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: r, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.5 8.625a3.36 3.36 0 0 1 1.817.513 1.5 1.5 0 0 0 2.308-1.263V4.5a1.875 1.875 0 0 0-1.875-1.875H5.25A1.875 1.875 0 0 0 3.375 4.5v15a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-3.375a1.5 1.5 0 0 0-2.306-1.264c-.617.396-1.115.54-1.774.514H16.5a3.375 3.375 0 0 1 0-6.75m-.023 9a4.9 4.9 0 0 0 1.898-.281v1.781H5.625V4.875h12.75v1.81a5.8 5.8 0 0 0-1.875-.31 5.625 5.625 0 0 0-.023 11.25" })
  ] });
});
v.displayName = "CodaLogo";
export {
  v as CodaLogo
};
//# sourceMappingURL=CodaLogo.js.map
