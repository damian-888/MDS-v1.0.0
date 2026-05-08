import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: i,
  titleId: d,
  ...e
}, a) => {
  const t = s(), l = i ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: a, "aria-labelledby": l, ...e, children: [
    i ? /* @__PURE__ */ o("title", { id: l, children: i }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.698 19.644 13.336 5.019l1.862-2.907A1.127 1.127 0 0 0 13.302.894L12 2.929 10.698.894a1.125 1.125 0 0 0-1.896 1.213l1.862 2.906-9.362 14.625a1.125 1.125 0 0 0 .948 1.737h19.5a1.126 1.126 0 0 0 .948-1.731m-13.682-.519L12 14.462l2.984 4.663zm8.64 0-4.708-7.356a1.126 1.126 0 0 0-1.896 0l-4.708 7.356H4.306L12 7.103l7.694 12.022z" })
  ] });
});
h.displayName = "Tipi";
export {
  h as Tipi
};
//# sourceMappingURL=Tipi.js.map
