import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...a
}, i) => {
  const m = h(), e = o ? d ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": e, ...a, children: [
    o ? /* @__PURE__ */ l("title", { id: e, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 2.25a7.86 7.86 0 0 1 6.178 3H12a4.88 4.88 0 0 0-4.327 2.632l-1.656-2.87A7.86 7.86 0 0 1 12 4.126M14.625 12a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0m-10.5 0c0-1 .19-1.99.563-2.917l3.093 5.355.019.028a4.88 4.88 0 0 0 4.42 2.403l-1.658 2.872A7.886 7.886 0 0 1 4.125 12m9.005 7.793 3.089-5.355.022-.044a4.86 4.86 0 0 0-.137-5.019h3.32a7.87 7.87 0 0 1-6.294 10.418" })
  ] });
});
s.displayName = "GoogleChromeLogo";
export {
  s as GoogleChromeLogo
};
//# sourceMappingURL=GoogleChromeLogo.js.map
