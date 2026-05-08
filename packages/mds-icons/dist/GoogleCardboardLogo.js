import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...e
}, i) => {
  const t = m(), d = o ? l ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": d, ...e, children: [
    o ? /* @__PURE__ */ a("title", { id: d, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21 4.125H3A1.875 1.875 0 0 0 1.125 6v12A1.875 1.875 0 0 0 3 19.875h6a1.13 1.13 0 0 0 .796-.33L12 17.345l2.204 2.205c.212.21.498.327.796.326h6A1.875 1.875 0 0 0 22.875 18V6A1.875 1.875 0 0 0 21 4.125m-.375 13.5h-5.156l-2.14-2.14a1.875 1.875 0 0 0-2.652 0l-2.146 2.14H3.375V6.375h17.25zM7.688 15a3.187 3.187 0 1 0 0-6.374 3.187 3.187 0 0 0 0 6.374m0-4.125a.938.938 0 1 1 0 1.875.938.938 0 0 1 0-1.875M16.313 15a3.187 3.187 0 1 0 0-6.375 3.187 3.187 0 0 0 0 6.375m0-4.125a.937.937 0 1 1 0 1.875.937.937 0 0 1 0-1.875" })
  ] });
});
s.displayName = "GoogleCardboardLogo";
export {
  s as GoogleCardboardLogo
};
//# sourceMappingURL=GoogleCardboardLogo.js.map
