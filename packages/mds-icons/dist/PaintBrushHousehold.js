import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const u = s(({
  size: a = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const t = h(), o = l ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    l ? /* @__PURE__ */ r("title", { id: o, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M21.888 2.113a3.375 3.375 0 0 0-4.773 0l-.037.038-4.927 5.407-.544-.542a2.625 2.625 0 0 0-3.712 0l-7.19 7.19a1.124 1.124 0 0 0 0 1.593l7.5 7.5a1.125 1.125 0 0 0 1.594 0l7.19-7.19a2.625 2.625 0 0 0 0-3.713l-.544-.544 5.408-4.927.037-.037a3.374 3.374 0 0 0-.002-4.775M9 20.908l-.844-.844 1.642-1.643a1.127 1.127 0 1 0-1.594-1.593L6.562 18.47l-1.03-1.031 1.642-1.643a1.127 1.127 0 1 0-1.594-1.593l-1.643 1.642-.843-.844 3.656-3.656 5.906 5.906zM20.312 5.28l-6.256 5.701a1.125 1.125 0 0 0-.038 1.628l1.377 1.376a.375.375 0 0 1 0 .53l-1.145 1.143L8.344 9.75l1.143-1.143a.375.375 0 0 1 .531 0l1.376 1.376a1.125 1.125 0 0 0 1.628-.038l5.7-6.256a1.127 1.127 0 0 1 1.595 1.594z" })
  ] });
});
u.displayName = "PaintBrushHousehold";
export {
  u as PaintBrushHousehold
};
//# sourceMappingURL=PaintBrushHousehold.js.map
