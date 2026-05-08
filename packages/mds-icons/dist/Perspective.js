import { jsxs as v, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...l
}, a) => {
  const t = s(), i = e ? d ?? t : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    e ? /* @__PURE__ */ o("title", { id: i, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.5 10.874h-1.125V4.5a1.874 1.874 0 0 0-2.21-1.844l-15 2.727a1.875 1.875 0 0 0-1.54 1.845v3.647H1.5a1.125 1.125 0 0 0 0 2.25h1.125v3.648a1.875 1.875 0 0 0 1.54 1.844l15 2.727a1.873 1.873 0 0 0 2.21-1.844v-6.375H22.5a1.125 1.125 0 1 0 0-2.25M4.875 7.54l14.25-2.59v5.924H4.875zm14.25 11.51-14.25-2.591v-3.335h14.25z" })
  ] });
});
h.displayName = "Perspective";
export {
  h as Perspective
};
//# sourceMappingURL=Perspective.js.map
