import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { forwardRef as l, useId as n } from "react";
const m = l(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, t) => {
  const i = n(), h = a ? o ?? i : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": h, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: h, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.75 13.125a1.125 1.125 0 0 1-1.125 1.125h-.375v.375a1.125 1.125 0 1 1-2.25 0v-.375h-.375a1.125 1.125 0 1 1 0-2.25H15v-.375a1.125 1.125 0 1 1 2.25 0V12h.375a1.125 1.125 0 0 1 1.125 1.125M9.375 12h-3a1.125 1.125 0 1 0 0 2.25h3a1.125 1.125 0 1 0 0-2.25m13.5-3.375v8.625A1.875 1.875 0 0 1 21 19.125H3a1.875 1.875 0 0 1-1.875-1.875V8.625A1.875 1.875 0 0 1 3 6.75h1.125v-1.5A1.875 1.875 0 0 1 6 3.375h3a1.875 1.875 0 0 1 1.875 1.875v1.5h2.25v-1.5A1.875 1.875 0 0 1 15 3.375h3a1.875 1.875 0 0 1 1.875 1.875v1.5H21a1.875 1.875 0 0 1 1.875 1.875m-7.5-1.875h2.25V5.625h-2.25zm-9 0h2.25V5.625h-2.25zM20.625 9H3.375v7.875h17.25z" })
  ] });
});
m.displayName = "CarBattery";
export {
  m as CarBattery
};
//# sourceMappingURL=CarBattery.js.map
