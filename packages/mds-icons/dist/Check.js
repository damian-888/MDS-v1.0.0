import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const t = s(), o = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m21.796 7.545-12 12a1.125 1.125 0 0 1-1.594 0l-5.25-5.25a1.127 1.127 0 1 1 1.594-1.594L9 17.155 20.204 5.953a1.127 1.127 0 0 1 1.594 1.594z" })
  ] });
});
c.displayName = "Check";
export {
  c as Check
};
//# sourceMappingURL=Check.js.map
