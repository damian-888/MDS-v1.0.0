import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const l = n(), t = r ? i ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": t, ...o, children: [
    r ? /* @__PURE__ */ e("title", { id: t, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M8.625 1.125A1.125 1.125 0 0 1 9.75 0h4.5a1.125 1.125 0 1 1 0 2.25h-4.5a1.125 1.125 0 0 1-1.125-1.125m10.5 4.5v15.75A2.625 2.625 0 0 1 16.5 24h-9a2.625 2.625 0 0 1-2.625-2.625V5.625A2.625 2.625 0 0 1 7.5 3h9a2.625 2.625 0 0 1 2.625 2.625m-2.25 0a.375.375 0 0 0-.375-.375h-9a.375.375 0 0 0-.375.375v15.75a.375.375 0 0 0 .375.375h9a.375.375 0 0 0 .375-.375z" })
  ] });
});
s.displayName = "BatteryVerticalEmpty";
export {
  s as BatteryVerticalEmpty
};
//# sourceMappingURL=BatteryVerticalEmpty.js.map
