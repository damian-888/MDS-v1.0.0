import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...t
}, i) => {
  const l = h(), o = a ? d ?? l : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...t, children: [
    a ? /* @__PURE__ */ e("title", { id: o, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.375 4.875H2.625A2.625 2.625 0 0 0 0 7.5v9a2.625 2.625 0 0 0 2.625 2.625h15.75A2.625 2.625 0 0 0 21 16.5v-9a2.625 2.625 0 0 0-2.625-2.625M18.75 16.5a.375.375 0 0 1-.375.375H2.625a.375.375 0 0 1-.375-.375v-9a.375.375 0 0 1 .375-.375h15.75a.375.375 0 0 1 .375.375zM6 9.75v4.5a1.125 1.125 0 0 1-2.25 0v-4.5a1.125 1.125 0 0 1 2.25 0m18 0v4.5a1.125 1.125 0 1 1-2.25 0v-4.5a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
s.displayName = "BatteryLow";
export {
  s as BatteryLow
};
//# sourceMappingURL=BatteryLow.js.map
