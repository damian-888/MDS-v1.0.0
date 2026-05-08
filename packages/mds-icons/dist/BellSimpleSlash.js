import { jsxs as c, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const s = h(({
  size: a = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const t = n(), e = l ? i ?? t : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    l ? /* @__PURE__ */ r("title", { id: e, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m20.333 19.494-15-16.5a1.125 1.125 0 1 0-1.665 1.513l1.387 1.527a7.84 7.84 0 0 0-.93 3.716c0 2.398-.43 4.406-1.244 5.806a1.88 1.88 0 0 0 .68 2.571c.285.165.61.25.94.248h11.774l2.393 2.632a1.125 1.125 0 0 0 1.665-1.513M5.127 16.125c.828-1.687 1.248-3.83 1.248-6.375 0-.648.111-1.292.33-1.902l7.525 8.277zM16.125 21A1.125 1.125 0 0 1 15 22.125H9a1.125 1.125 0 1 1 0-2.25h6A1.125 1.125 0 0 1 16.125 21M8.334 3.97a1.125 1.125 0 0 1 .597-1.474A7.875 7.875 0 0 1 19.875 9.75c0 1.752.223 3.275.663 4.527a1.123 1.123 0 0 1-.686 1.436 1.124 1.124 0 0 1-1.436-.686c-.525-1.497-.79-3.27-.79-5.277a5.624 5.624 0 0 0-7.818-5.182 1.125 1.125 0 0 1-1.474-.597" })
  ] });
});
s.displayName = "BellSimpleSlash";
export {
  s as BellSimpleSlash
};
//# sourceMappingURL=BellSimpleSlash.js.map
