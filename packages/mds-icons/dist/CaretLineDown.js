import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const w = h(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, l) => {
  const n = s(), o = r ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M3.704 7.546a1.127 1.127 0 0 1 1.594-1.594L12 12.656l6.704-6.705a1.127 1.127 0 1 1 1.594 1.594l-7.5 7.5a1.125 1.125 0 0 1-1.594 0zM19.5 16.875h-15a1.125 1.125 0 1 0 0 2.25h15a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
w.displayName = "CaretLineDown";
export {
  w as CaretLineDown
};
//# sourceMappingURL=CaretLineDown.js.map
