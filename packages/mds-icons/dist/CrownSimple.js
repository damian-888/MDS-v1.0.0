import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...a
}, d) => {
  const n = s(), o = l ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": o, ...a, children: [
    l ? /* @__PURE__ */ e("title", { id: o, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.81 6.563a1.86 1.86 0 0 0-2.208.441l-2.768 2.983-3.125-7.01-.006-.013a1.874 1.874 0 0 0-3.405 0l-.006.014-3.125 7.008-2.768-2.983A1.875 1.875 0 0 0 1.155 8.58c0 .015.006.03.009.044l2.124 9.73a1.875 1.875 0 0 0 1.842 1.522H18.87a1.875 1.875 0 0 0 1.842-1.522l2.124-9.728c0-.015.007-.029.008-.044a1.86 1.86 0 0 0-1.035-2.018m-3.241 11.062H5.432l-1.77-8.108 3.013 3.248a1.127 1.127 0 0 0 1.857-.306L12 4.67l3.47 7.788a1.125 1.125 0 0 0 1.852.306l3.013-3.248z" })
  ] });
});
c.displayName = "CrownSimple";
export {
  c as CrownSimple
};
//# sourceMappingURL=CrownSimple.js.map
