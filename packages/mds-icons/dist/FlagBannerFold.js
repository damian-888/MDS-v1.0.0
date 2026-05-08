import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const m = t(({
  size: a = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const n = s(), r = l ? d ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    l ? /* @__PURE__ */ o("title", { id: r, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.696 3.89a1.12 1.12 0 0 0-.946-.515h-7.5a1.13 1.13 0 0 0-1.024.656l-.724 1.594H2.625a1.125 1.125 0 0 0-.833 1.882l3.062 3.368-3.062 3.368a1.125 1.125 0 0 0 .833 1.882h6.852a1.13 1.13 0 0 0 1.023-.656l.723-1.594h5.027l-3.026 6.656a1.127 1.127 0 1 0 2.05.938l7.5-16.5a1.13 1.13 0 0 0-.078-1.078M5.168 13.876l2.04-2.243a1.125 1.125 0 0 0 0-1.514l-2.04-2.243h6.312l-2.728 6zm12.107-2.25h-5.028l2.728-6h5.027z" })
  ] });
});
m.displayName = "FlagBannerFold";
export {
  m as FlagBannerFold
};
//# sourceMappingURL=FlagBannerFold.js.map
