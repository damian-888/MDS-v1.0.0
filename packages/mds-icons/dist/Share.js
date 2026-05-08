import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...l
}, i) => {
  const h = s(), e = r ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m21.796 10.546-4.5 4.5a1.127 1.127 0 0 1-1.594-1.594l2.58-2.577h-2.813A7.875 7.875 0 0 0 7.84 16.78a1.125 1.125 0 0 1-2.179-.562 10.12 10.12 0 0 1 9.807-7.594h2.812l-2.577-2.58a1.127 1.127 0 1 1 1.594-1.594l4.5 4.5a1.125 1.125 0 0 1-.002 1.595M18 19.125H4.125V8.25a1.125 1.125 0 0 0-2.25 0v12A1.125 1.125 0 0 0 3 21.375h15a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "Share";
export {
  m as Share
};
//# sourceMappingURL=Share.js.map
