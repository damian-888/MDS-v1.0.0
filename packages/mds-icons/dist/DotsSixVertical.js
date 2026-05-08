import { jsxs as m, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: i = "1em",
  title: r,
  titleId: e,
  ...d
}, t) => {
  const l = s(), o = r ? e ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M10.125 5.625a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.25 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8.625 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.75 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-6.75 6.375a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.75 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" })
  ] });
});
c.displayName = "DotsSixVertical";
export {
  c as DotsSixVertical
};
//# sourceMappingURL=DotsSixVertical.js.map
