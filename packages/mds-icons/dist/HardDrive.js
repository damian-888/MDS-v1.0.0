import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const s = v(({
  size: d = "1em",
  title: r,
  titleId: o,
  ...a
}, l) => {
  const t = h(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21 5.625H3A1.875 1.875 0 0 0 1.125 7.5v9A1.875 1.875 0 0 0 3 18.375h18a1.875 1.875 0 0 0 1.875-1.875v-9A1.875 1.875 0 0 0 21 5.625m-.375 10.5H3.375v-8.25h17.25zM15.375 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" })
  ] });
});
s.displayName = "HardDrive";
export {
  s as HardDrive
};
//# sourceMappingURL=HardDrive.js.map
