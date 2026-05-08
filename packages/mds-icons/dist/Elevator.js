import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const m = v(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...a
}, i) => {
  const l = n(), h = r ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": h, ...a, children: [
    r ? /* @__PURE__ */ e("title", { id: h, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625M15.375 12v7.125h-2.25V12zm-4.5 7.125h-2.25V12h2.25zm8.25 0h-1.5v-8.25A1.125 1.125 0 0 0 16.5 9.75h-9a1.125 1.125 0 0 0-1.125 1.125v8.25h-1.5V4.875h14.25zm-9.75-12A1.125 1.125 0 0 1 10.5 6h3a1.125 1.125 0 0 1 0 2.25h-3a1.125 1.125 0 0 1-1.125-1.125" })
  ] });
});
m.displayName = "Elevator";
export {
  m as Elevator
};
//# sourceMappingURL=Elevator.js.map
