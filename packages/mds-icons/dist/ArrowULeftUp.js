import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as w } from "react";
const f = s(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...a
}, i) => {
  const t = w(), e = r ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: e, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.875 7.5v8.25a6.375 6.375 0 0 1-12.75 0V5.719l-2.58 2.577a1.127 1.127 0 1 1-1.593-1.594l4.5-4.5a1.125 1.125 0 0 1 1.594 0l4.5 4.5a1.127 1.127 0 0 1-1.594 1.594L9.375 5.719v10.03a4.125 4.125 0 0 0 8.25 0V7.5a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
f.displayName = "ArrowULeftUp";
export {
  f as ArrowULeftUp
};
//# sourceMappingURL=ArrowULeftUp.js.map
