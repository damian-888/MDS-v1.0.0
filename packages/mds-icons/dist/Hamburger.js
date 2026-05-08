import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const c = h(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const t = m(), l = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m21.366 14.318-3.722 1.353-3.35-1.34a1.13 1.13 0 0 0-.837 0l-3.332 1.333-3.332-1.333a1.13 1.13 0 0 0-.802-.013l-4.125 1.5a1.125 1.125 0 0 0 .769 2.115l.76-.277A4.13 4.13 0 0 0 7.5 21.375h9a4.13 4.13 0 0 0 4.125-4.125v-.27l1.51-.547a1.126 1.126 0 0 0-.77-2.115M16.5 19.125h-9a1.875 1.875 0 0 1-1.875-1.875v-.405l.731-.266 3.351 1.34c.268.108.568.108.836 0l3.332-1.333 3.332 1.333c.257.103.543.108.803.014l.27-.1a1.875 1.875 0 0 1-1.78 1.292M1.125 12a1.125 1.125 0 0 1 1.125-1.125h19.5a1.125 1.125 0 1 1 0 2.25H2.25A1.125 1.125 0 0 1 1.125 12M4.52 9.75H19.48a1.91 1.91 0 0 0 1.536-.777 1.84 1.84 0 0 0 .27-1.655C20.261 4.114 16.443 1.875 12 1.875S3.74 4.113 2.713 7.317a1.83 1.83 0 0 0 .27 1.655 1.9 1.9 0 0 0 1.536.778M12 4.125c3.16 0 5.964 1.392 6.938 3.375H5.063C6.038 5.517 8.842 4.125 12 4.125" })
  ] });
});
c.displayName = "Hamburger";
export {
  c as Hamburger
};
//# sourceMappingURL=Hamburger.js.map
