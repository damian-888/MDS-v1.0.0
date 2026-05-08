import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const n = m(), l = r ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...o, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.375 12a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 1 1 0-2.25h16.5A1.125 1.125 0 0 1 21.375 12m-10.17-2.954a1.125 1.125 0 0 0 1.593 0l3-3a1.127 1.127 0 1 0-1.594-1.594l-1.079 1.08V1.5a1.125 1.125 0 1 0-2.25 0v4.031l-1.08-1.077a1.127 1.127 0 0 0-1.593 1.594zm1.593 5.906a1.125 1.125 0 0 0-1.594 0l-3 3a1.127 1.127 0 1 0 1.594 1.594l1.077-1.077V22.5a1.125 1.125 0 1 0 2.25 0v-4.031l1.08 1.08a1.127 1.127 0 1 0 1.593-1.594z" })
  ] });
});
c.displayName = "ArrowsInLineVertical";
export {
  c as ArrowsInLineVertical
};
//# sourceMappingURL=ArrowsInLineVertical.js.map
