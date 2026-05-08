import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...t
}, h) => {
  const o = n(), e = a ? d ?? o : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": e, ...t, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M8.625 1.125A1.125 1.125 0 0 1 9.75 0h4.5a1.125 1.125 0 1 1 0 2.25h-4.5a1.125 1.125 0 0 1-1.125-1.125m10.5 4.5v15.75A2.625 2.625 0 0 1 16.5 24h-9a2.625 2.625 0 0 1-2.625-2.625V5.625A2.625 2.625 0 0 1 7.5 3h9a2.625 2.625 0 0 1 2.625 2.625m-2.25 0a.375.375 0 0 0-.375-.375h-9a.375.375 0 0 0-.375.375v15.75a.375.375 0 0 0 .375.375h9a.375.375 0 0 0 .375-.375zm-2.25 8.625h-5.25a1.125 1.125 0 1 0 0 2.25h5.25a1.125 1.125 0 1 0 0-2.25m0 3.75h-5.25a1.125 1.125 0 1 0 0 2.25h5.25a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
s.displayName = "BatteryVerticalMedium";
export {
  s as BatteryVerticalMedium
};
//# sourceMappingURL=BatteryVerticalMedium.js.map
