import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const t = s(), a = l ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    l ? /* @__PURE__ */ o("title", { id: a, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.361 20.018 19.3 3.517a1.874 1.874 0 0 0-1.861-1.643H6.563a1.875 1.875 0 0 0-1.861 1.643l-2.063 16.5A1.875 1.875 0 0 0 4.5 22.124h3.815a1.87 1.87 0 0 0 1.817-1.406L12 13.5l1.867 7.213a1.875 1.875 0 0 0 1.819 1.412H19.5a1.875 1.875 0 0 0 1.861-2.108M17.107 4.124l.188 1.5H6.705l.188-1.5zm-9.082 15.75h-3.1l1.05-8.4a4.135 4.135 0 0 0 3.008-3.6h1.892v.982zm7.951 0-2.85-11.018v-.982h1.892a4.13 4.13 0 0 0 3.008 3.6l1.05 8.4z" })
  ] });
});
m.displayName = "Pants";
export {
  m as Pants
};
//# sourceMappingURL=Pants.js.map
