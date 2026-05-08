import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, l) => {
  const c = n(), a = o ? e ?? c : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 12.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.375 0c0 3.996-2.141 7.125-4.875 7.125H5.25c-2.734 0-4.875-3.13-4.875-7.125S2.516 5.625 5.25 5.625h3.281l3.42-3.42a1.12 1.12 0 0 1 .799-.33h3a1.125 1.125 0 1 1 0 2.25h-2.531l-1.5 1.5h7.031c2.734 0 4.875 3.13 4.875 7.125M5.25 17.625h9.916a7.8 7.8 0 0 1-.852-1.875H7.5a1.125 1.125 0 1 1 0-2.25h6.4a11 11 0 0 1-.025-.75c0-1.903.487-3.61 1.29-4.875H5.25c-.736 0-1.522.704-2.04 1.875h6.54a1.125 1.125 0 1 1 0 2.25H2.658a9 9 0 0 0-.033.75c0 2.873 1.384 4.875 2.625 4.875m16.125-4.875c0-2.872-1.384-4.875-2.625-4.875s-2.625 2.003-2.625 4.875c0 2.873 1.384 4.875 2.625 4.875s2.625-2.002 2.625-4.875" })
  ] });
});
s.displayName = "Log";
export {
  s as Log
};
//# sourceMappingURL=Log.js.map
