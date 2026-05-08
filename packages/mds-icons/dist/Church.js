import { jsxs as i, jsx as v } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: r = "1em",
  title: a,
  titleId: h,
  ...o
}, d) => {
  const e = n(), l = a ? h ?? e : void 0;
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": l, ...o, children: [
    a ? /* @__PURE__ */ v("title", { id: l, children: a }) : null,
    /* @__PURE__ */ v("path", { fill: "currentColor", d: "m21.578 13.285-3.203-1.922V9.75a1.12 1.12 0 0 0-.562-.977l-4.688-2.68V4.876h1.125a1.125 1.125 0 0 0 0-2.25h-1.125V1.5a1.125 1.125 0 1 0-2.25 0v1.125H9.75a1.125 1.125 0 0 0 0 2.25h1.125v1.219l-4.683 2.68a1.13 1.13 0 0 0-.567.976v1.613l-3.203 1.922a1.13 1.13 0 0 0-.547.965v6A1.125 1.125 0 0 0 3 21.375h7.125a1.125 1.125 0 0 0 1.125-1.125v-4.125a.75.75 0 1 1 1.5 0v4.125a1.125 1.125 0 0 0 1.125 1.125H21a1.125 1.125 0 0 0 1.125-1.125v-6a1.13 1.13 0 0 0-.547-.965M4.125 14.887l1.5-.9v5.138h-1.5zM12 13.125a3 3 0 0 0-3 3v3H7.875v-8.719L12 8.05l4.125 2.357v8.719H15v-3a3 3 0 0 0-3-3m7.875 6h-1.5v-5.138l1.5.9z" })
  ] });
});
m.displayName = "Church";
export {
  m as Church
};
//# sourceMappingURL=Church.js.map
