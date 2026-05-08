import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as v, useId as c } from "react";
const h = v(({
  size: e = "1em",
  title: a,
  titleId: r,
  ...i
}, d) => {
  const t = c(), l = a ? r ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": l, ...i, children: [
    a ? /* @__PURE__ */ o("title", { id: l, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m19.546 21.046-2.25 2.25a1.127 1.127 0 0 1-1.594-1.594l.33-.327H7.5a2.625 2.625 0 0 1-2.625-2.625v-8.625a1.125 1.125 0 0 1 2.25 0v8.625a.375.375 0 0 0 .375.375h8.531l-.33-.33a1.127 1.127 0 1 1 1.594-1.593l2.25 2.25a1.125 1.125 0 0 1 0 1.594M7.5 7.125a1.125 1.125 0 0 0 .796-1.921l-.327-.33h8.53a.375.375 0 0 1 .376.376v8.625a1.125 1.125 0 1 0 2.25 0V5.25A2.625 2.625 0 0 0 16.5 2.625H7.969l.33-.33A1.127 1.127 0 0 0 6.705.7l-2.25 2.25a1.125 1.125 0 0 0 0 1.594l2.25 2.25c.21.211.497.33.795.33" })
  ] });
});
h.displayName = "DeviceRotate";
export {
  h as DeviceRotate
};
//# sourceMappingURL=DeviceRotate.js.map
