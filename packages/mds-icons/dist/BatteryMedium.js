import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const h = m(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...o
}, t) => {
  const v = n(), e = a ? i ?? v : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ d("title", { id: e, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M18.375 4.875H2.625A2.625 2.625 0 0 0 0 7.5v9a2.625 2.625 0 0 0 2.625 2.625h15.75A2.625 2.625 0 0 0 21 16.5v-9a2.625 2.625 0 0 0-2.625-2.625M18.75 16.5a.375.375 0 0 1-.375.375H2.625a.375.375 0 0 1-.375-.375v-9a.375.375 0 0 1 .375-.375h15.75a.375.375 0 0 1 .375.375zm-9-6.75v4.5a1.125 1.125 0 0 1-2.25 0v-4.5a1.125 1.125 0 0 1 2.25 0M6 9.75v4.5a1.125 1.125 0 0 1-2.25 0v-4.5a1.125 1.125 0 0 1 2.25 0m18 0v4.5a1.125 1.125 0 1 1-2.25 0v-4.5a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
h.displayName = "BatteryMedium";
export {
  h as BatteryMedium
};
//# sourceMappingURL=BatteryMedium.js.map
