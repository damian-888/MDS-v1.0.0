import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const m = t(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...i
}, o) => {
  const n = s(), r = a ? d ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: o, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M15.375 20.25a1.125 1.125 0 0 1-1.125 1.125h-4.5a1.125 1.125 0 1 1 0-2.25h4.5a1.125 1.125 0 0 1 1.125 1.125m7.15-2.803-.437-.76a1.125 1.125 0 0 0-1.95 1.126l.436.757a.33.33 0 0 1 0 .35.42.42 0 0 1-.375.206H18a1.125 1.125 0 0 0 0 2.25h2.2a2.654 2.654 0 0 0 2.676-2.63c0-.456-.121-.904-.352-1.299M6 19.125H3.802a.42.42 0 0 1-.375-.206.33.33 0 0 1 0-.35l.435-.756a1.125 1.125 0 0 0-1.95-1.125l-.436.758a2.58 2.58 0 0 0 0 2.598 2.66 2.66 0 0 0 2.326 1.331H6a1.125 1.125 0 1 0 0-2.25m12.953-4.5a1.126 1.126 0 0 0 .974-1.687l-2.156-3.75a1.125 1.125 0 1 0-1.95 1.125l2.156 3.75a1.12 1.12 0 0 0 .977.562M15.61 5.438l-1.283-2.229a2.694 2.694 0 0 0-4.652 0L8.391 5.438a1.125 1.125 0 0 0 1.949 1.125l1.285-2.231a.445.445 0 0 1 .75 0l1.285 2.23a1.125 1.125 0 0 0 1.95-1.124M7.767 8.775a1.125 1.125 0 0 0-1.536.413l-2.157 3.75a1.126 1.126 0 0 0 1.95 1.125l2.157-3.75a1.125 1.125 0 0 0-.414-1.538" })
  ] });
});
m.displayName = "TriangleDashed";
export {
  m as TriangleDashed
};
//# sourceMappingURL=TriangleDashed.js.map
