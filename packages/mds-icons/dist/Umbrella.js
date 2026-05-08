import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, i) => {
  const m = c(), l = r ? d ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.868 11.84A10.916 10.916 0 0 0 4.594 4.763a10.82 10.82 0 0 0-3.469 7.077A1.875 1.875 0 0 0 3 13.874h7.875v4.875a3.375 3.375 0 1 0 6.75 0 1.125 1.125 0 0 0-2.25 0 1.125 1.125 0 0 1-2.25 0v-4.875H21a1.874 1.874 0 0 0 1.875-2.034zm-13.455-.216C9.663 7.937 11.108 5.67 12 4.605c.893 1.068 2.336 3.334 2.586 7.02zm-3.29-5.206A8.6 8.6 0 0 1 9.28 4.56C8.325 6.117 7.35 8.444 7.16 11.624H3.416c.263-2 1.22-3.843 2.707-5.206m10.718 5.206c-.187-3.18-1.166-5.507-2.123-7.064a8.64 8.64 0 0 1 5.866 7.064z" })
  ] });
});
s.displayName = "Umbrella";
export {
  s as Umbrella
};
//# sourceMappingURL=Umbrella.js.map
