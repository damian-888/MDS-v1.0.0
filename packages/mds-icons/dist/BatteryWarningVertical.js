import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: a,
  titleId: t,
  ...o
}, d) => {
  const l = m(), e = a ? t ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M10.875 12.75V9.375a1.125 1.125 0 1 1 2.25 0v3.375a1.125 1.125 0 1 1-2.25 0M12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.75 2.25h4.5a1.125 1.125 0 0 0 0-2.25h-4.5a1.125 1.125 0 1 0 0 2.25m9.375 3.375v15.75A2.625 2.625 0 0 1 16.5 24h-9a2.625 2.625 0 0 1-2.625-2.625V5.625A2.625 2.625 0 0 1 7.5 3h9a2.625 2.625 0 0 1 2.625 2.625m-2.25 0a.375.375 0 0 0-.375-.375h-9a.375.375 0 0 0-.375.375v15.75a.375.375 0 0 0 .375.375h9a.375.375 0 0 0 .375-.375z" })
  ] });
});
s.displayName = "BatteryWarningVertical";
export {
  s as BatteryWarningVertical
};
//# sourceMappingURL=BatteryWarningVertical.js.map
