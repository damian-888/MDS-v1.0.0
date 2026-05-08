import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as c } from "react";
const m = h(({
  size: l = "1em",
  title: o,
  titleId: d,
  ...e
}, i) => {
  const t = c(), a = o ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    o ? /* @__PURE__ */ r("title", { id: a, children: o }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M19.875 10.876a1.13 1.13 0 0 0-.954.528q-.233.375-.47.71l-1.365-7.207a1.874 1.874 0 0 0-3.014-1.119l-.017.014L12 5.513l-2.055-1.71-.017-.015a1.875 1.875 0 0 0-3.014 1.116l-1.37 7.211a22 22 0 0 1-.468-.71 1.12 1.12 0 0 0-.951-.53 4.125 4.125 0 0 0 0 8.25h15.75a4.125 4.125 0 0 0 0-8.25M9.007 5.948l1.804 1.5.018.014a1.864 1.864 0 0 0 2.344 0l.018-.014 1.804-1.5 1.078 5.678H7.928zM4.125 16.876a1.875 1.875 0 0 1-.557-3.666c1.097 1.63 2.222 2.813 3.281 3.666zm3.281-2.508.094-.492h9l.094.492c-2.375 2.344-4.38 2.498-4.594 2.508-.215-.01-2.22-.16-4.594-2.508m12.469 2.508h-2.719c1.058-.855 2.183-2.037 3.282-3.666a1.875 1.875 0 0 1-.563 3.666" })
  ] });
});
m.displayName = "CowboyHat";
export {
  m as CowboyHat
};
//# sourceMappingURL=CowboyHat.js.map
