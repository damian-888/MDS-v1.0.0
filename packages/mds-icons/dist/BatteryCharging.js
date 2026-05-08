import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const s = h(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...o
}, d) => {
  const t = v(), e = a ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M18.375 4.875H2.625A2.625 2.625 0 0 0 0 7.5v9a2.625 2.625 0 0 0 2.625 2.625h15.75A2.625 2.625 0 0 0 21 16.5v-9a2.625 2.625 0 0 0-2.625-2.625M18.75 16.5a.375.375 0 0 1-.375.375H2.625a.375.375 0 0 1-.375-.375v-9a.375.375 0 0 1 .375-.375h15.75a.375.375 0 0 1 .375.375zM24 9.75v4.5a1.125 1.125 0 1 1-2.25 0v-4.5a1.125 1.125 0 1 1 2.25 0m-10.652 1.688a1.12 1.12 0 0 1 0 1.124l-1.5 2.626a1.124 1.124 0 1 1-1.954-1.116l.542-.947H9.375a1.125 1.125 0 0 1-.977-1.687l1.5-2.626a1.128 1.128 0 0 1 1.954 1.126l-.538.937h1.061a1.13 1.13 0 0 1 .973.563" })
  ] });
});
s.displayName = "BatteryCharging";
export {
  s as BatteryCharging
};
//# sourceMappingURL=BatteryCharging.js.map
