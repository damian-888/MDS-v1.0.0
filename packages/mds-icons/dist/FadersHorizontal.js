import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, h) => {
  const l = s(), o = a ? e ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.5 7.5a1.125 1.125 0 0 1 1.125-1.125h2.625a1.125 1.125 0 0 1 0 2.25h-2.625A1.125 1.125 0 0 1 16.5 7.5M3.75 8.625h9V9.75a1.125 1.125 0 1 0 2.25 0v-4.5a1.125 1.125 0 1 0-2.25 0v1.125h-9a1.125 1.125 0 0 0 0 2.25m16.5 6.75h-8.625a1.125 1.125 0 1 0 0 2.25h8.625a1.125 1.125 0 1 0 0-2.25m-12.375-2.25A1.125 1.125 0 0 0 6.75 14.25v1.125h-3a1.125 1.125 0 1 0 0 2.25h3v1.125a1.125 1.125 0 0 0 2.25 0v-4.5a1.125 1.125 0 0 0-1.125-1.125" })
  ] });
});
v.displayName = "FadersHorizontal";
export {
  v as FadersHorizontal
};
//# sourceMappingURL=FadersHorizontal.js.map
