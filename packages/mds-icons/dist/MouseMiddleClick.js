import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: e = "1em",
  title: d,
  titleId: r,
  ...l
}, h) => {
  const v = n(), i = d ? r ?? v : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": d ? void 0 : !0, role: d ? "img" : void 0, ref: h, "aria-labelledby": i, ...l, children: [
    d ? /* @__PURE__ */ o("title", { id: i, children: d }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M13.5 1.125h-3A6.38 6.38 0 0 0 4.125 7.5v9a6.38 6.38 0 0 0 6.375 6.375h3a6.38 6.38 0 0 0 6.375-6.375v-9A6.38 6.38 0 0 0 13.5 1.125M17.625 7.5v1.875H15V8.25a1.875 1.875 0 0 0-1.875-1.875v-3h.375A4.13 4.13 0 0 1 17.625 7.5M11.25 8.625h1.5v3.75h-1.5zm-.75-5.25h.375v3A1.875 1.875 0 0 0 9 8.25v1.125H6.375V7.5A4.13 4.13 0 0 1 10.5 3.375m3 17.25h-3A4.13 4.13 0 0 1 6.375 16.5v-4.875H9v1.125a1.875 1.875 0 0 0 1.875 1.875h2.25A1.875 1.875 0 0 0 15 12.75v-1.125h2.625V16.5a4.13 4.13 0 0 1-4.125 4.125" })
  ] });
});
s.displayName = "MouseMiddleClick";
export {
  s as MouseMiddleClick
};
//# sourceMappingURL=MouseMiddleClick.js.map
