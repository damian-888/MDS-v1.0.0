import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as w, useId as s } from "react";
const f = w(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...a
}, i) => {
  const t = s(), e = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.875 8.25v8.25a1.125 1.125 0 1 1-2.25 0V8.25a4.125 4.125 0 0 0-8.25 0v10.031l2.58-2.58a1.127 1.127 0 1 1 1.593 1.594l-4.5 4.5a1.125 1.125 0 0 1-1.594 0l-4.5-4.5a1.127 1.127 0 1 1 1.594-1.594l2.577 2.58V8.25a6.375 6.375 0 0 1 12.75 0" })
  ] });
});
f.displayName = "ArrowULeftDown";
export {
  f as ArrowULeftDown
};
//# sourceMappingURL=ArrowULeftDown.js.map
