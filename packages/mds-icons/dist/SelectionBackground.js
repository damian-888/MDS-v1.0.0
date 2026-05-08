import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const c = t(({
  size: o = "1em",
  title: a,
  titleId: d,
  ...i
}, h) => {
  const l = m(), r = a ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14.625 7.5H4.5a1.875 1.875 0 0 0-1.875 1.875V19.5A1.875 1.875 0 0 0 4.5 21.375h10.125A1.875 1.875 0 0 0 16.5 19.5V9.375A1.875 1.875 0 0 0 14.625 7.5m-.375 11.625H4.875V9.75h9.375zM12.375 3.75A1.125 1.125 0 0 1 13.5 2.625H15a1.125 1.125 0 0 1 0 2.25h-1.5a1.125 1.125 0 0 1-1.125-1.125m9 .75v.75a1.125 1.125 0 1 1-2.25 0v-.375h-.375a1.125 1.125 0 0 1 0-2.25h.75A1.875 1.875 0 0 1 21.375 4.5m0 4.5v1.5a1.125 1.125 0 1 1-2.25 0V9a1.125 1.125 0 1 1 2.25 0m0 5.25V15a1.875 1.875 0 0 1-1.875 1.875h-.75a1.125 1.125 0 1 1 0-2.25h.375v-.375a1.125 1.125 0 1 1 2.25 0m-14.25-9V4.5A1.875 1.875 0 0 1 9 2.625h.75a1.125 1.125 0 0 1 0 2.25h-.375v.375a1.125 1.125 0 0 1-2.25 0" })
  ] });
});
c.displayName = "SelectionBackground";
export {
  c as SelectionBackground
};
//# sourceMappingURL=SelectionBackground.js.map
