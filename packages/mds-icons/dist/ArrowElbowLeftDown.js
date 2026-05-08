import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as w, useId as s } from "react";
const h = w(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, a) => {
  const t = s(), l = o ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": l, ...i, children: [
    o ? /* @__PURE__ */ e("title", { id: l, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.875 6.75a1.125 1.125 0 0 1-1.125 1.125H9.375v9.656l2.58-2.58a1.127 1.127 0 1 1 1.593 1.594l-4.5 4.5a1.125 1.125 0 0 1-1.594 0l-4.5-4.5a1.127 1.127 0 1 1 1.594-1.594l2.577 2.58V6.75A1.125 1.125 0 0 1 8.25 5.625h13.5a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
h.displayName = "ArrowElbowLeftDown";
export {
  h as ArrowElbowLeftDown
};
//# sourceMappingURL=ArrowElbowLeftDown.js.map
