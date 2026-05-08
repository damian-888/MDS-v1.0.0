import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const m = v(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const l = h(), t = r ? o ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": t, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: t, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.375 4.875H2.625A2.625 2.625 0 0 0 0 7.5v9a2.625 2.625 0 0 0 2.625 2.625h15.75A2.625 2.625 0 0 0 21 16.5v-9a2.625 2.625 0 0 0-2.625-2.625M18.75 16.5a.375.375 0 0 1-.375.375H2.625a.375.375 0 0 1-.375-.375v-9a.375.375 0 0 1 .375-.375h15.75a.375.375 0 0 1 .375.375zM24 9.75v4.5a1.125 1.125 0 1 1-2.25 0v-4.5a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
m.displayName = "BatteryEmpty";
export {
  m as BatteryEmpty
};
//# sourceMappingURL=BatteryEmpty.js.map
