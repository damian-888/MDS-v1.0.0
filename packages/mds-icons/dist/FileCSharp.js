import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const l = n(), h = a ? i ?? l : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": h, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: h, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m20.296 7.454-5.25-5.25a1.12 1.12 0 0 0-.796-.329h-9A1.875 1.875 0 0 0 3.375 3.75v6.375a1.125 1.125 0 0 0 2.25 0v-6h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5V21a1.125 1.125 0 1 0 2.25 0V8.25a1.13 1.13 0 0 0-.33-.796M15 5.344 17.156 7.5H15zM3.75 16.875c0 .813.516 1.5 1.125 1.5a.97.97 0 0 0 .687-.322 1.125 1.125 0 0 1 1.626 1.557 3.19 3.19 0 0 1-2.313 1.015c-1.86 0-3.375-1.682-3.375-3.75s1.514-3.75 3.375-3.75a3.19 3.19 0 0 1 2.313 1.015 1.125 1.125 0 0 1-1.626 1.557.96.96 0 0 0-.687-.322c-.61 0-1.125.687-1.125 1.5m12.375-.75a1.125 1.125 0 1 0 0-2.25h-.375V13.5a1.125 1.125 0 1 0-2.25 0v.375h-1.125V13.5a1.125 1.125 0 1 0-2.25 0v.375H9.75a1.125 1.125 0 1 0 0 2.25h.375v1.125H9.75a1.125 1.125 0 1 0 0 2.25h.375v.375a1.125 1.125 0 1 0 2.25 0V19.5H13.5v.375a1.125 1.125 0 1 0 2.25 0V19.5h.375a1.125 1.125 0 1 0 0-2.25h-.375v-1.125zM13.5 17.25h-1.125v-1.125H13.5z" })
  ] });
});
s.displayName = "FileCSharp";
export {
  s as FileCSharp
};
//# sourceMappingURL=FileCSharp.js.map
