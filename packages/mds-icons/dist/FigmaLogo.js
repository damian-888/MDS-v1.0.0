import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, l) => {
  const m = n(), a = o ? d ?? m : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...e, children: [
    o ? /* @__PURE__ */ i("title", { id: a, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M18.577 9a4.124 4.124 0 0 0-2.827-7.125H9A4.125 4.125 0 0 0 6.174 9a4.115 4.115 0 0 0 .115 6.105 4.5 4.5 0 1 0 7.586 3.27v-2.703A4.125 4.125 0 0 0 18.577 9m-.952-3a1.875 1.875 0 0 1-1.875 1.875h-1.875v-3.75h1.875A1.875 1.875 0 0 1 17.625 6m-10.5 0A1.875 1.875 0 0 1 9 4.125h2.625v3.75H9A1.875 1.875 0 0 1 7.125 6M9 13.875a1.875 1.875 0 1 1 0-3.75h2.625v3.75zm2.625 4.5a2.25 2.25 0 1 1-2.25-2.25h2.25zm4.125-4.5a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75" })
  ] });
});
s.displayName = "FigmaLogo";
export {
  s as FigmaLogo
};
//# sourceMappingURL=FigmaLogo.js.map
