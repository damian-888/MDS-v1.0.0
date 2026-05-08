import { jsxs as i, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: h = "1em",
  title: r,
  titleId: e,
  ...l
}, v) => {
  const d = n(), o = r ? e ?? d : void 0;
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: v, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21.75 10.125h-8.625v-1.5h.375a1.875 1.875 0 0 0 1.875-1.875v-3A1.875 1.875 0 0 0 13.5 1.875h-3A1.875 1.875 0 0 0 8.625 3.75v3A1.875 1.875 0 0 0 10.5 8.625h.375v1.5H2.25a1.125 1.125 0 1 0 0 2.25h2.625v2.25H4.5A1.875 1.875 0 0 0 2.625 16.5v3A1.875 1.875 0 0 0 4.5 21.375h3A1.875 1.875 0 0 0 9.375 19.5v-3A1.875 1.875 0 0 0 7.5 14.625h-.375v-2.25h9.75v.75a1.125 1.125 0 1 0 2.25 0v-.75h2.625a1.125 1.125 0 1 0 0-2.25m-10.875-6h2.25v2.25h-2.25zm-3.75 15h-2.25v-2.25h2.25zm13.92-2.58L19.595 18l1.455 1.454a1.124 1.124 0 0 1 0 1.594 1.124 1.124 0 0 1-1.594 0L18 19.594l-1.454 1.455a1.127 1.127 0 1 1-1.594-1.594L16.406 18l-1.455-1.454a1.127 1.127 0 1 1 1.594-1.594L18 16.406l1.454-1.455a1.124 1.124 0 0 1 1.594 0 1.124 1.124 0 0 1 0 1.594z" })
  ] });
});
m.displayName = "NetworkX";
export {
  m as NetworkX
};
//# sourceMappingURL=NetworkX.js.map
