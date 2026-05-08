import { jsxs as h, jsx as t } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...l
}, o) => {
  const d = s(), e = a ? i ?? d : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: o, "aria-labelledby": e, ...l, children: [
    a ? /* @__PURE__ */ t("title", { id: e, children: a }) : null,
    /* @__PURE__ */ t("path", { fill: "currentColor", d: "M8.625 1.125A1.125 1.125 0 0 1 9.75 0h4.5a1.125 1.125 0 1 1 0 2.25h-4.5a1.125 1.125 0 0 1-1.125-1.125m10.5 4.5v15.75A2.625 2.625 0 0 1 16.5 24h-9a2.625 2.625 0 0 1-2.625-2.625V5.625A2.625 2.625 0 0 1 7.5 3h9a2.625 2.625 0 0 1 2.625 2.625m-2.25 0a.375.375 0 0 0-.375-.375h-9a.375.375 0 0 0-.375.375v15.75a.375.375 0 0 0 .375.375h9a.375.375 0 0 0 .375-.375zM14.25 12h-1.125v-1.125a1.125 1.125 0 1 0-2.25 0V12H9.75a1.125 1.125 0 1 0 0 2.25h1.125v1.125a1.125 1.125 0 1 0 2.25 0V14.25h1.125a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
m.displayName = "BatteryPlusVertical";
export {
  m as BatteryPlusVertical
};
//# sourceMappingURL=BatteryPlusVertical.js.map
