import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as v, useId as m } from "react";
const n = v(({
  size: e = "1em",
  title: a,
  titleId: h,
  ...o
}, i) => {
  const l = m(), r = a ? h ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M7.875 4.5A1.125 1.125 0 0 1 6.75 5.625H4.125V6.75a1.125 1.125 0 0 1-2.25 0v-1.5A1.875 1.875 0 0 1 3.75 3.375h3A1.125 1.125 0 0 1 7.875 4.5M3 14.625A1.125 1.125 0 0 0 4.125 13.5v-3a1.125 1.125 0 1 0-2.25 0v3A1.125 1.125 0 0 0 3 14.625m3.75 3.75H4.125V17.25a1.125 1.125 0 0 0-2.25 0v1.5a1.875 1.875 0 0 0 1.875 1.875h3a1.125 1.125 0 1 0 0-2.25m6.75 0h-3a1.125 1.125 0 1 0 0 2.25h3a1.125 1.125 0 1 0 0-2.25m7.5-2.25a1.125 1.125 0 0 0-1.125 1.125v1.125H17.25a1.125 1.125 0 1 0 0 2.25h3a1.875 1.875 0 0 0 1.875-1.875v-1.5A1.125 1.125 0 0 0 21 16.125m0-6.75a1.125 1.125 0 0 0-1.125 1.125v3a1.125 1.125 0 1 0 2.25 0v-3A1.125 1.125 0 0 0 21 9.375m-.75-6h-3a1.125 1.125 0 0 0 0 2.25h2.625V6.75a1.125 1.125 0 1 0 2.25 0v-1.5a1.875 1.875 0 0 0-1.875-1.875m-6.75 0h-3a1.125 1.125 0 1 0 0 2.25h3a1.125 1.125 0 0 0 0-2.25" })
  ] });
});
n.displayName = "RectangleDashed";
export {
  n as RectangleDashed
};
//# sourceMappingURL=RectangleDashed.js.map
