import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, t) => {
  const l = m(), i = o ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": i, ...e, children: [
    o ? /* @__PURE__ */ a("title", { id: i, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 3.375h-15A2.625 2.625 0 0 0 1.875 6v10.5A2.625 2.625 0 0 0 4.5 19.125h15a2.625 2.625 0 0 0 2.625-2.625V6A2.625 2.625 0 0 0 19.5 3.375m.375 13.125a.375.375 0 0 1-.375.375h-15a.375.375 0 0 1-.375-.375V6a.375.375 0 0 1 .375-.375h15a.375.375 0 0 1 .375.375zm-3.75 4.875A1.125 1.125 0 0 1 15 22.5H9a1.125 1.125 0 1 1 0-2.25h6a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "Monitor";
export {
  s as Monitor
};
//# sourceMappingURL=Monitor.js.map
