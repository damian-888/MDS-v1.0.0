import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: l,
  ...a
}, e) => {
  const t = s(), i = r ? l ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: i, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m15.704 11.955 2.577-2.58H8.25a4.125 4.125 0 1 0 0 8.25h8.25a1.125 1.125 0 0 1 0 2.25H8.25a6.375 6.375 0 1 1 0-12.75h10.031l-2.577-2.578a1.125 1.125 0 0 1 .797-1.924 1.13 1.13 0 0 1 .797.33l4.5 4.5a1.125 1.125 0 0 1 0 1.594l-4.5 4.5a1.127 1.127 0 0 1-1.594-1.594z" })
  ] });
});
m.displayName = "ArrowUUpRight";
export {
  m as ArrowUUpRight
};
//# sourceMappingURL=ArrowUUpRight.js.map
