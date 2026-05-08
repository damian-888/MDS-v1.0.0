import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as w } from "react";
const h = s(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, a) => {
  const t = w(), l = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": l, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: l, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.546 11.296a1.124 1.124 0 0 1-1.594 0l-4.827-4.827v13.78a1.125 1.125 0 0 1-2.25 0V6.47l-4.83 4.827a1.127 1.127 0 1 1-1.593-1.594l6.75-6.75a1.127 1.127 0 0 1 1.594 0l6.75 6.75a1.125 1.125 0 0 1 0 1.594" })
  ] });
});
h.displayName = "ArrowUp";
export {
  h as ArrowUp
};
//# sourceMappingURL=ArrowUp.js.map
