import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...a
}, l) => {
  const h = s(), e = o ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...a, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21 19.125h-1.125a8.635 8.635 0 0 0-6-13.427V3A1.875 1.875 0 0 0 12 1.125H7.5A1.875 1.875 0 0 0 5.625 3v9A1.875 1.875 0 0 0 7.5 13.875H12A1.875 1.875 0 0 0 13.875 12V7.976a6.384 6.384 0 0 1 4.661 8.965 6.3 6.3 0 0 1-1.678 2.184H3a1.125 1.125 0 1 0 0 2.25h18a1.125 1.125 0 1 0 0-2.25m-9.375-7.5h-3.75v-8.25h3.75zm-4.875 6a1.125 1.125 0 1 1 0-2.25h6a1.125 1.125 0 1 1 0 2.25z" })
  ] });
});
c.displayName = "Microscope";
export {
  c as Microscope
};
//# sourceMappingURL=Microscope.js.map
