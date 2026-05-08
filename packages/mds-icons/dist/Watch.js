import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const t = s(), r = a ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 12a7.49 7.49 0 0 0-2.62-5.689l-.66-3.646a1.875 1.875 0 0 0-1.846-1.54H9.627a1.875 1.875 0 0 0-1.845 1.54l-.657 3.646a7.485 7.485 0 0 0 0 11.378l.657 3.646a1.875 1.875 0 0 0 1.845 1.54h4.747a1.875 1.875 0 0 0 1.845-1.54l.661-3.646A7.49 7.49 0 0 0 19.5 12M9.938 3.375h4.125l.272 1.5a7.48 7.48 0 0 0-4.665 0zm4.125 17.25H9.938l-.272-1.5a7.48 7.48 0 0 0 4.665 0zM12 17.25a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5M15.75 12a1.125 1.125 0 0 1-1.125 1.125H12A1.125 1.125 0 0 1 10.875 12V9.375a1.125 1.125 0 1 1 2.25 0v1.5h1.5A1.125 1.125 0 0 1 15.75 12" })
  ] });
});
c.displayName = "Watch";
export {
  c as Watch
};
//# sourceMappingURL=Watch.js.map
