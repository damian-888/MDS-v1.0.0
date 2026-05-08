import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...e
}, t) => {
  const l = s(), i = o ? a ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": i, ...e, children: [
    o ? /* @__PURE__ */ d("title", { id: i, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M7.125 8.625a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 7.125a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.375 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-12.75 3.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.375 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.375 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" })
  ] });
});
h.displayName = "DotsSix";
export {
  h as DotsSix
};
//# sourceMappingURL=DotsSix.js.map
