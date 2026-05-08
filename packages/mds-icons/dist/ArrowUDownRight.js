import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as w } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...a
}, e) => {
  const t = w(), i = r ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: i, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m21.796 16.546-4.5 4.5a1.127 1.127 0 1 1-1.594-1.594l2.58-2.577H8.25a6.375 6.375 0 1 1 0-12.75h8.25a1.125 1.125 0 0 1 0 2.25H8.25a4.125 4.125 0 0 0 0 8.25h10.031l-2.58-2.58a1.124 1.124 0 0 1 0-1.593 1.124 1.124 0 0 1 1.594 0l4.5 4.5a1.126 1.126 0 0 1 0 1.594" })
  ] });
});
s.displayName = "ArrowUDownRight";
export {
  s as ArrowUDownRight
};
//# sourceMappingURL=ArrowUDownRight.js.map
