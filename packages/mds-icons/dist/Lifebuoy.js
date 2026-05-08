import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const f = m(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, d) => {
  const t = s(), a = o ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: d, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ l("title", { id: a, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m4.148 12.683a4.86 4.86 0 0 0 0-5.115l2.157-2.157a7.86 7.86 0 0 1 0 9.428zM9.375 12a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0m7.339-6.305-2.156 2.157a4.87 4.87 0 0 0-5.115 0L7.286 5.695a7.86 7.86 0 0 1 9.428 0M5.695 7.29l2.157 2.156a4.87 4.87 0 0 0 0 5.115l-2.157 2.157a7.86 7.86 0 0 1 0-9.428M7.29 18.308l2.156-2.157a4.86 4.86 0 0 0 5.115 0l2.157 2.157a7.86 7.86 0 0 1-9.428 0" })
  ] });
});
f.displayName = "Lifebuoy";
export {
  f as Lifebuoy
};
//# sourceMappingURL=Lifebuoy.js.map
