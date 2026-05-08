import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...t
}, o) => {
  const d = m(), e = a ? l ?? d : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: o, "aria-labelledby": e, ...t, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M14.457 12.533a1.13 1.13 0 0 1 .049 1.095l-1.5 3a1.126 1.126 0 1 1-2.012-1.006l.685-1.372H10.5a1.125 1.125 0 0 1-1.006-1.628l1.5-3a1.125 1.125 0 1 1 2.012 1.006L12.32 12H13.5a1.13 1.13 0 0 1 .957.533M9.75 2.25h4.5a1.125 1.125 0 0 0 0-2.25h-4.5a1.125 1.125 0 1 0 0 2.25m9.375 3.375v15.75A2.625 2.625 0 0 1 16.5 24h-9a2.625 2.625 0 0 1-2.625-2.625V5.625A2.625 2.625 0 0 1 7.5 3h9a2.625 2.625 0 0 1 2.625 2.625m-2.25 0a.375.375 0 0 0-.375-.375h-9a.375.375 0 0 0-.375.375v15.75a.375.375 0 0 0 .375.375h9a.375.375 0 0 0 .375-.375z" })
  ] });
});
s.displayName = "BatteryChargingVertical";
export {
  s as BatteryChargingVertical
};
//# sourceMappingURL=BatteryChargingVertical.js.map
