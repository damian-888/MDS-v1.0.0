import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...l
}, i) => {
  const t = m(), e = o ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": e, ...l, children: [
    o ? /* @__PURE__ */ a("title", { id: e, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.875 12.375h-.064l-2.994-8.98a1.13 1.13 0 0 0-1.067-.77h-3a1.125 1.125 0 0 0 0 2.25h2.189l1.39 4.17-5.586 6.33H7.8a3.75 3.75 0 1 0-.24 2.25h3.69a1.13 1.13 0 0 0 .844-.38l5.062-5.732.525 1.576a3.75 3.75 0 1 0 2.194-.714m-15.75 5.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m15.75 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" })
  ] });
});
s.displayName = "Scooter";
export {
  s as Scooter
};
//# sourceMappingURL=Scooter.js.map
