import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const t = h(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M15.75 9.75a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0m-5.25 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M21 18.377h-7.875v-.832a7.875 7.875 0 1 0-2.25 0v.832H3a1.125 1.125 0 1 0 0 2.25h18a1.125 1.125 0 1 0 0-2.25M6.375 9.75A5.625 5.625 0 1 1 12 15.376 5.63 5.63 0 0 1 6.375 9.75" })
  ] });
});
s.displayName = "Webcam";
export {
  s as Webcam
};
//# sourceMappingURL=Webcam.js.map
