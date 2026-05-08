import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...e
}, t) => {
  const a = s(), i = r ? l ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: i, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m21.046 12.796-6.75 6.75a1.127 1.127 0 0 1-1.594-1.594l4.83-4.827H3.75a1.125 1.125 0 1 1 0-2.25h13.781l-4.827-4.83a1.127 1.127 0 1 1 1.594-1.594l6.75 6.75a1.124 1.124 0 0 1-.002 1.595" })
  ] });
});
m.displayName = "ArrowRight";
export {
  m as ArrowRight
};
//# sourceMappingURL=ArrowRight.js.map
