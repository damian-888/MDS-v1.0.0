import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...l
}, e) => {
  const t = m(), a = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": a, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: a, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.5 3.375h-15A2.625 2.625 0 0 0 1.875 6v10.5A2.625 2.625 0 0 0 4.5 19.125h15a2.625 2.625 0 0 0 2.625-2.625V6A2.625 2.625 0 0 0 19.5 3.375m.375 13.125a.375.375 0 0 1-.375.375h-15a.375.375 0 0 1-.375-.375V6a.375.375 0 0 1 .375-.375h15a.375.375 0 0 1 .375.375zm-3.75 4.875A1.125 1.125 0 0 1 15 22.5H9a1.125 1.125 0 1 1 0-2.25h6a1.125 1.125 0 0 1 1.125 1.125m-1.08-11.67a1.127 1.127 0 1 1-1.593 1.593l-.327-.33v3.282a1.125 1.125 0 1 1-2.25 0v-3.281l-.33.33a1.127 1.127 0 1 1-1.593-1.594l2.25-2.25a1.125 1.125 0 0 1 1.594 0z" })
  ] });
});
s.displayName = "MonitorArrowUp";
export {
  s as MonitorArrowUp
};
//# sourceMappingURL=MonitorArrowUp.js.map
