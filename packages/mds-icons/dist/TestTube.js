import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...a
}, i) => {
  const t = c(), l = e ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: i, "aria-labelledby": l, ...a, children: [
    e ? /* @__PURE__ */ o("title", { id: l, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.546 7.83 16.92 2.207a1.125 1.125 0 0 0-1.594 0L3.214 14.322a4.574 4.574 0 0 0 6.468 6.469l10.426-10.43 1.997-.667a1.125 1.125 0 0 0 .44-1.863M8.089 19.198a2.322 2.322 0 0 1-3.282-3.281l2.638-2.637c.724-.226 1.835-.282 3.287.468.647.345 1.34.598 2.057.75zM19.144 8.31a1.14 1.14 0 0 0-.44.27l-3.646 3.648c-.725.226-1.835.281-3.287-.469a7.9 7.9 0 0 0-2.057-.75l6.411-6.413 3.543 3.542z" })
  ] });
});
h.displayName = "TestTube";
export {
  h as TestTube
};
//# sourceMappingURL=TestTube.js.map
