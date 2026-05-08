import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const s = h(({
  size: e = "1em",
  title: l,
  titleId: a,
  ...i
}, d) => {
  const m = n(), o = l ? a ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": o, ...i, children: [
    l ? /* @__PURE__ */ r("title", { id: o, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M21.046 16.546 19.594 18l1.455 1.454a1.126 1.126 0 0 1-.797 1.924 1.13 1.13 0 0 1-.797-.33L18 19.594l-1.454 1.455a1.127 1.127 0 0 1-1.594-1.594L16.406 18l-1.455-1.454a1.126 1.126 0 1 1 1.594-1.594L18 16.406l1.454-1.455a1.124 1.124 0 0 1 1.594 0 1.124 1.124 0 0 1 0 1.594zM22.125 12A1.125 1.125 0 0 1 21 13.125H9.426c.41 4.646 3.246 6.972 3.28 6.997A1.124 1.124 0 0 1 12 22.125 10.125 10.125 0 1 1 22.125 12m-7.293-7.346a13.5 13.5 0 0 1 2.002 6.221h2.96a7.9 7.9 0 0 0-4.962-6.221M11.03 5.928a11.2 11.2 0 0 0-1.604 4.947h5.15c-.28-3.178-1.696-5.27-2.573-6.281q-.541.627-.973 1.334m-6.822 4.947h2.96a13.5 13.5 0 0 1 2-6.221 7.9 7.9 0 0 0-4.96 6.221m2.96 2.25h-2.96a7.9 7.9 0 0 0 4.96 6.221 13.5 13.5 0 0 1-2-6.221" })
  ] });
});
s.displayName = "GlobeSimpleX";
export {
  s as GlobeSimpleX
};
//# sourceMappingURL=GlobeSimpleX.js.map
