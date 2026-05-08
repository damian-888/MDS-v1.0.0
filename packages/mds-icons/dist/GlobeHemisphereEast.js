import { jsxs as s, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const h = m(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...i
}, d) => {
  const t = n(), e = l ? o ?? t : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": e, ...i, children: [
    l ? /* @__PURE__ */ r("title", { id: e, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 2.25a7.84 7.84 0 0 1 4.125 1.17v1.5L14.23 9l-2.669.36-1.753-1.147a1.875 1.875 0 0 0-2.631.495l-1.964 2.934a1.87 1.87 0 0 0-.316 1.031l-.015 2.69A7.875 7.875 0 0 1 12 4.125m-5.587 13.42a1.88 1.88 0 0 0 .712-1.462l.019-3.281 1.694-2.532 1.558 1.02c.386.27.86.385 1.326.32l2.95-.398a1.88 1.88 0 0 0 1.172-.638l2.077-2.418a1.9 1.9 0 0 0 .412-.834 7.85 7.85 0 0 1 1.324 6.514l-1.064-.973a1.88 1.88 0 0 0-1.984-.347l-2.855 1.187a1.88 1.88 0 0 0-1.135 1.457l-.224 1.52a1.875 1.875 0 0 0 1.379 2.086l1.5.392a7.855 7.855 0 0 1-8.857-1.616zm10.948.217-.153-.153a1.9 1.9 0 0 0-.851-.49l-1.688-.442.143-.976 2.438-1.013 1.5 1.368a8 8 0 0 1-1.39 1.706" })
  ] });
});
h.displayName = "GlobeHemisphereEast";
export {
  h as GlobeHemisphereEast
};
//# sourceMappingURL=GlobeHemisphereEast.js.map
