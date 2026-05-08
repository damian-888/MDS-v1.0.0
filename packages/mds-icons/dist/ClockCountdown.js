import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...l
}, n) => {
  const a = m(), d = o ? i ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: n, "aria-labelledby": d, ...l, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.125 12.844A10.137 10.137 0 1 1 11.156 1.875a1.129 1.129 0 1 1 .188 2.25 7.886 7.886 0 1 0 8.53 8.531 1.128 1.128 0 1 1 2.25.188m-11.25-5.719V12A1.125 1.125 0 0 0 12 13.125h4.875a1.125 1.125 0 0 0 0-2.25h-3.75v-3.75a1.125 1.125 0 0 0-2.25 0M19.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-3-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" })
  ] });
});
s.displayName = "ClockCountdown";
export {
  s as ClockCountdown
};
//# sourceMappingURL=ClockCountdown.js.map
