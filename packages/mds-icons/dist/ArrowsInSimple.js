import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, d) => {
  const n = s(), a = r ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.296 5.295 16.594 9h1.781a1.125 1.125 0 1 1 0 2.25h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5a1.125 1.125 0 0 1 2.25 0v1.781l3.704-3.705a1.127 1.127 0 1 1 1.594 1.594zM10.125 12.75h-4.5a1.125 1.125 0 1 0 0 2.25h1.781l-3.702 3.704a1.127 1.127 0 1 0 1.594 1.594L9 16.594v1.78a1.125 1.125 0 1 0 2.25 0v-4.5a1.125 1.125 0 0 0-1.125-1.124" })
  ] });
});
m.displayName = "ArrowsInSimple";
export {
  m as ArrowsInSimple
};
//# sourceMappingURL=ArrowsInSimple.js.map
