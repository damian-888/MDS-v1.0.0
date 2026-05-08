import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const n = s(), l = r ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m22.633 18.58-.005-.008-9.006-15.745a1.875 1.875 0 0 0-3.264 0L1.368 18.58a1.875 1.875 0 0 0 2.255 2.686L12 18.436l8.378 2.83a1.874 1.874 0 0 0 2.256-2.686m-9.508-2.138v-5.193a1.125 1.125 0 1 0-2.25 0v5.193l-7.057 2.384L11.99 4.504l8.19 14.32z" })
  ] });
});
h.displayName = "PaperPlane";
export {
  h as PaperPlane
};
//# sourceMappingURL=PaperPlane.js.map
