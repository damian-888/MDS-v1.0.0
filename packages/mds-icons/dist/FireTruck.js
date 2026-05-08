import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as t } from "react";
const n = m(({
  size: a = "1em",
  title: h,
  titleId: i,
  ...o
}, d) => {
  const v = t(), r = h ? i ?? v : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": h ? void 0 : !0, role: h ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    h ? /* @__PURE__ */ e("title", { id: r, children: h }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M23.92 10.832 22.606 7.55a1.87 1.87 0 0 0-1.74-1.176h-1.742V6a1.125 1.125 0 1 0-2.25 0v8.818a3.4 3.4 0 0 0-2.057 2.057h-4.136a3.375 3.375 0 0 0-6.364 0h-.943V13.5a1.125 1.125 0 0 0-2.25 0v3.75A1.875 1.875 0 0 0 3 19.125h1.318a3.375 3.375 0 0 0 6.364 0h4.136a3.375 3.375 0 0 0 6.364 0h.943A1.875 1.875 0 0 0 24 17.25v-6c0-.143-.027-.285-.08-.418m-3.306-2.207.6 1.5h-2.089v-1.5zM7.5 19.125a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m10.5 0a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m3.182-2.25a3.4 3.4 0 0 0-2.057-2.057v-2.443h2.625v4.5zM2.25 8.625a1.125 1.125 0 0 0 0 2.25h12a1.125 1.125 0 1 0 0-2.25h-1.125v-1.5h1.125a1.125 1.125 0 0 0 0-2.25h-12a1.125 1.125 0 0 0 0 2.25h1.125v1.5zm8.625 0h-1.5v-1.5h1.5zm-5.25-1.5h1.5v1.5h-1.5z" })
  ] });
});
n.displayName = "FireTruck";
export {
  n as FireTruck
};
//# sourceMappingURL=FireTruck.js.map
