import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const m = v(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...a
}, d) => {
  const l = n(), h = o ? i ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: d, "aria-labelledby": h, ...a, children: [
    o ? /* @__PURE__ */ e("title", { id: h, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.25 7.875h-5.625V3.75a1.875 1.875 0 0 0-1.875-1.875h-6A1.875 1.875 0 0 0 4.875 3.75v4.5a1.875 1.875 0 0 0 1.875 1.875h5.625v3.75H6.75a1.875 1.875 0 0 0-1.875 1.875v4.5a1.875 1.875 0 0 0 1.875 1.875h6a1.875 1.875 0 0 0 1.875-1.875v-4.125h5.625a1.875 1.875 0 0 0 1.875-1.875v-4.5a1.875 1.875 0 0 0-1.875-1.875m-7.875 12h-5.25v-3.75h5.25zm0-12h-5.25v-3.75h5.25zm7.5 6h-5.25v-3.75h5.25z" })
  ] });
});
m.displayName = "ReplitLogo";
export {
  m as ReplitLogo
};
//# sourceMappingURL=ReplitLogo.js.map
