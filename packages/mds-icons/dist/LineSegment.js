import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...l
}, n) => {
  const a = s(), i = e ? d ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: n, "aria-labelledby": i, ...l, children: [
    e ? /* @__PURE__ */ o("title", { id: i, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.388 3.614a3.375 3.375 0 0 0-5.433 3.844l-7.5 7.5a3.38 3.38 0 0 0-3.844.656 3.374 3.374 0 1 0 5.438.933l7.5-7.5a3.375 3.375 0 0 0 3.843-5.433zM6.794 18.8a1.125 1.125 0 1 1 0-.003zm12-12A1.125 1.125 0 1 1 17.2 5.213a1.125 1.125 0 0 1 1.594 1.588" })
  ] });
});
h.displayName = "LineSegment";
export {
  h as LineSegment
};
//# sourceMappingURL=LineSegment.js.map
