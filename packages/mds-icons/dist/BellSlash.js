import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...d
}, i) => {
  const c = n(), r = l ? o ?? c : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m20.333 19.494-15-16.5a1.125 1.125 0 1 0-1.665 1.513l1.387 1.527a7.84 7.84 0 0 0-.93 3.716c0 2.398-.43 4.406-1.244 5.806a1.88 1.88 0 0 0 .68 2.571c.285.165.61.25.94.248h3.392a4.125 4.125 0 0 0 8.215 0h.167l2.393 2.632a1.125 1.125 0 0 0 1.665-1.513M6.375 9.75c0-.648.111-1.292.33-1.902l7.525 8.277H5.127c.828-1.687 1.248-3.83 1.248-6.375M12 19.875a1.875 1.875 0 0 1-1.837-1.5h3.675a1.875 1.875 0 0 1-1.838 1.5M8.334 3.971a1.125 1.125 0 0 1 .597-1.475A7.875 7.875 0 0 1 19.875 9.75c0 1.752.223 3.275.663 4.527a1.123 1.123 0 0 1-.686 1.436 1.124 1.124 0 0 1-1.436-.686c-.525-1.497-.79-3.27-.79-5.277a5.624 5.624 0 0 0-7.818-5.182 1.125 1.125 0 0 1-1.474-.597" })
  ] });
});
s.displayName = "BellSlash";
export {
  s as BellSlash
};
//# sourceMappingURL=BellSlash.js.map
