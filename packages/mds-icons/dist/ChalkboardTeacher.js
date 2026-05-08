import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...h
}, i) => {
  const l = s(), e = a ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": e, ...h, children: [
    a ? /* @__PURE__ */ o("title", { id: e, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M5.25 7.875A1.125 1.125 0 0 1 6.375 6.75h11.25a1.125 1.125 0 0 1 1.125 1.125v8.25a1.125 1.125 0 1 1-2.25 0V9H6.375A1.125 1.125 0 0 1 5.25 7.875M22.125 5.25v13.5a1.875 1.875 0 0 1-1.875 1.875h-6.257a1.12 1.12 0 0 1-1.069-.774 3.375 3.375 0 0 0-6.35 0 1.125 1.125 0 0 1-1.067.774H3.75a1.875 1.875 0 0 1-1.875-1.875V5.25A1.875 1.875 0 0 1 3.75 3.375h16.5a1.875 1.875 0 0 1 1.875 1.875M9.75 15.375a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m10.125-9.75H4.125v12.75h.649a5.64 5.64 0 0 1 2.04-2.171 3.75 3.75 0 1 1 5.872 0 5.64 5.64 0 0 1 2.04 2.171h5.149z" })
  ] });
});
c.displayName = "ChalkboardTeacher";
export {
  c as ChalkboardTeacher
};
//# sourceMappingURL=ChalkboardTeacher.js.map
