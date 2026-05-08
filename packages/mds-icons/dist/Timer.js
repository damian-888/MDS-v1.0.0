import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, l) => {
  const t = h(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 4.125a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9m0 15.75a6.75 6.75 0 1 1 6.75-6.75 6.76 6.76 0 0 1-6.75 6.75m3.42-10.546a1.125 1.125 0 0 1 0 1.594l-2.624 2.625a1.126 1.126 0 1 1-1.594-1.594l2.625-2.625a1.125 1.125 0 0 1 1.594 0M8.626 1.5A1.125 1.125 0 0 1 9.75.375h4.5a1.125 1.125 0 1 1 0 2.25h-4.5A1.125 1.125 0 0 1 8.625 1.5" })
  ] });
});
s.displayName = "Timer";
export {
  s as Timer
};
//# sourceMappingURL=Timer.js.map
