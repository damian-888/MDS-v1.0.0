import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const s = n(({
  size: a = "1em",
  title: e,
  titleId: o,
  ...d
}, i) => {
  const h = v(), r = e ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    e ? /* @__PURE__ */ l("title", { id: r, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M21 15a1.125 1.125 0 1 0 0-2.25h-1.125v-1.5H21A1.125 1.125 0 1 0 21 9h-1.27a7.85 7.85 0 0 0-1.76-3.627l1.576-1.576a1.127 1.127 0 1 0-1.594-1.594l-1.687 1.688a7.85 7.85 0 0 0-8.54 0L6.036 2.203a1.127 1.127 0 0 0-1.594 1.594L6.03 5.373A7.85 7.85 0 0 0 4.27 9H3a1.125 1.125 0 1 0 0 2.25h1.125v1.5H3A1.125 1.125 0 0 0 3 15h1.125c0 .503.049 1.006.145 1.5H3a1.125 1.125 0 0 0 0 2.25h2.077a7.874 7.874 0 0 0 13.846 0H21a1.125 1.125 0 1 0 0-2.25h-1.27c.096-.494.145-.997.145-1.5zM12 4.877A5.634 5.634 0 0 1 17.42 9H6.58A5.634 5.634 0 0 1 12 4.876m1.125 15.636v-6.636a1.125 1.125 0 0 0-2.25 0v6.637A5.634 5.634 0 0 1 6.375 15v-3.75h11.25V15a5.63 5.63 0 0 1-4.5 5.512" })
  ] });
});
s.displayName = "BugBeetle";
export {
  s as BugBeetle
};
//# sourceMappingURL=BugBeetle.js.map
