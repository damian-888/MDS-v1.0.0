import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: o = "1em",
  title: a,
  titleId: l,
  ...d
}, e) => {
  const t = s(), r = a ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M15.75 11.25a1.13 1.13 0 0 1-.48.922l-3.75 2.625a1.125 1.125 0 0 1-1.77-.922v-5.25a1.125 1.125 0 0 1 1.77-.922l3.75 2.625a1.13 1.13 0 0 1 .48.922M22.125 6v10.5a2.625 2.625 0 0 1-2.625 2.625h-15A2.625 2.625 0 0 1 1.875 16.5V6A2.625 2.625 0 0 1 4.5 3.375h15A2.625 2.625 0 0 1 22.125 6m-2.25 0a.375.375 0 0 0-.375-.375h-15A.375.375 0 0 0 4.125 6v10.5a.375.375 0 0 0 .375.375h15a.375.375 0 0 0 .375-.375zM15 20.25H9a1.125 1.125 0 1 0 0 2.25h6a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "MonitorPlay";
export {
  m as MonitorPlay
};
//# sourceMappingURL=MonitorPlay.js.map
