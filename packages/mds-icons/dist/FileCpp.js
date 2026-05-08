import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const s = v(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const l = n(), h = a ? i ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": h, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: h, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4.5 16.875c0 .813.516 1.5 1.125 1.5a.96.96 0 0 0 .687-.322 1.125 1.125 0 0 1 1.626 1.557 3.19 3.19 0 0 1-2.313 1.015c-1.86 0-3.375-1.682-3.375-3.75s1.514-3.75 3.375-3.75a3.19 3.19 0 0 1 2.313 1.015 1.125 1.125 0 0 1-1.626 1.557.96.96 0 0 0-.687-.322c-.61 0-1.125.687-1.125 1.5m-1.125-6.75V3.75A1.875 1.875 0 0 1 5.25 1.875h9a1.13 1.13 0 0 1 .796.33l5.25 5.25a1.13 1.13 0 0 1 .329.795v1.875a1.125 1.125 0 1 1-2.25 0V9.75h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5H5.625v6a1.125 1.125 0 0 1-2.25 0M15 5.344V7.5h2.156zM13.875 15.75h-.75V15a1.125 1.125 0 1 0-2.25 0v.75h-.75a1.125 1.125 0 1 0 0 2.25h.75v.75a1.125 1.125 0 1 0 2.25 0V18h.75a1.125 1.125 0 1 0 0-2.25m6.75 0h-.75V15a1.125 1.125 0 1 0-2.25 0v.75h-.75a1.125 1.125 0 1 0 0 2.25h.75v.75a1.125 1.125 0 1 0 2.25 0V18h.75a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
s.displayName = "FileCpp";
export {
  s as FileCpp
};
//# sourceMappingURL=FileCpp.js.map
