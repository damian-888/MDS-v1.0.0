import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as l, useId as m } from "react";
const n = l(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, t) => {
  const v = m(), d = r ? e ?? v : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: d, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.375 13.913V12.75a9.41 9.41 0 0 0-6-8.747V3.75A1.875 1.875 0 0 0 13.5 1.875h-3A1.875 1.875 0 0 0 8.625 3.75v.253a9.41 9.41 0 0 0-6 8.747v1.162a1.875 1.875 0 0 0-1.5 1.838V18A1.875 1.875 0 0 0 3 19.875h18A1.875 1.875 0 0 0 22.875 18v-2.25a1.875 1.875 0 0 0-1.5-1.838m-2.25-1.163v1.125h-3.75v-7.4a7.16 7.16 0 0 1 3.75 6.275m-6-8.625v9.75h-2.25v-9.75zm-4.5 2.35v7.4h-3.75V12.75a7.16 7.16 0 0 1 3.75-6.275m12 11.15H3.375v-1.5h17.25z" })
  ] });
});
n.displayName = "HardHat";
export {
  n as HardHat
};
//# sourceMappingURL=HardHat.js.map
