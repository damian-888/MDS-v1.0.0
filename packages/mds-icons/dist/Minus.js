import { jsxs as a, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: i = "1em",
  title: r,
  titleId: e,
  ...l
}, n) => {
  const t = h(), o = r ? e ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 12a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 1 1 0-2.25h16.5A1.125 1.125 0 0 1 21.375 12" })
  ] });
});
m.displayName = "Minus";
export {
  m as Minus
};
//# sourceMappingURL=Minus.js.map
