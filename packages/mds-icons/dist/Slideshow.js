import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...a
}, l) => {
  const h = s(), d = o ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": d, ...a, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M17.25 4.125H6.75A1.875 1.875 0 0 0 4.875 6v12a1.875 1.875 0 0 0 1.875 1.875h10.5A1.875 1.875 0 0 0 19.125 18V6a1.875 1.875 0 0 0-1.875-1.875m-.375 13.5h-9.75V6.375h9.75zm6-12.375v13.5a1.125 1.125 0 1 1-2.25 0V5.25a1.125 1.125 0 1 1 2.25 0m-19.5 0v13.5a1.125 1.125 0 0 1-2.25 0V5.25a1.125 1.125 0 0 1 2.25 0" })
  ] });
});
m.displayName = "Slideshow";
export {
  m as Slideshow
};
//# sourceMappingURL=Slideshow.js.map
