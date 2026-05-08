import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const w = h(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const t = s(), d = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": d, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.546 8.296a1.125 1.125 0 0 1-1.594 0l-2.577-2.577v6.28A10.137 10.137 0 0 1 5.25 22.126a1.125 1.125 0 1 1 0-2.25A7.883 7.883 0 0 0 13.125 12V5.719l-2.58 2.577a1.126 1.126 0 0 1-1.923-.797c0-.299.119-.586.33-.797l4.5-4.5a1.125 1.125 0 0 1 1.594 0l4.5 4.5a1.125 1.125 0 0 1 0 1.594" })
  ] });
});
w.displayName = "ArrowBendRightUp";
export {
  w as ArrowBendRightUp
};
//# sourceMappingURL=ArrowBendRightUp.js.map
