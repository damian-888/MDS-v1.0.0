import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: l = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const h = v(), r = a ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4.5 11.25a1.125 1.125 0 0 0 1.125-1.125v-6h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v.375a1.125 1.125 0 1 0 2.25 0V8.25a1.13 1.13 0 0 0-.33-.796l-5.25-5.25a1.12 1.12 0 0 0-.795-.329h-9A1.875 1.875 0 0 0 3.375 3.75v6.375A1.125 1.125 0 0 0 4.5 11.25M17.156 7.5H15V5.344zm-2.369 7.406-1.406 1.969 1.406 1.969a1.126 1.126 0 0 1-1.094 1.779 1.13 1.13 0 0 1-.733-.467L12 18.811l-.96 1.345a1.127 1.127 0 0 1-1.83-1.312l1.406-1.969-1.406-1.969a1.125 1.125 0 1 1 1.83-1.312l.96 1.345.96-1.345a1.127 1.127 0 0 1 1.83 1.312zm-6.162-.656A1.125 1.125 0 0 1 7.5 15.375h-.75V19.5a1.125 1.125 0 0 1-2.25 0v-4.125h-.75a1.125 1.125 0 1 1 0-2.25H7.5a1.125 1.125 0 0 1 1.125 1.125m12.75 0a1.125 1.125 0 0 1-1.125 1.125h-.75V19.5a1.125 1.125 0 1 1-2.25 0v-4.125h-.75a1.125 1.125 0 1 1 0-2.25h3.75a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
m.displayName = "FileTxt";
export {
  m as FileTxt
};
//# sourceMappingURL=FileTxt.js.map
