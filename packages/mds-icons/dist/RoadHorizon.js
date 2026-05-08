import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const v = h(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...e
}, l) => {
  const n = s(), a = o ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...e, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.3 18.98a1.125 1.125 0 0 1-1.531-.429L14.343 7.125h-1.218V7.5a1.125 1.125 0 0 1-2.25 0v-.375h-1.22L3.23 18.551A1.125 1.125 0 1 1 1.27 17.45L7.076 7.125H2.25a1.125 1.125 0 0 1 0-2.25h19.5a1.125 1.125 0 0 1 0 2.25h-4.827l5.807 10.324a1.125 1.125 0 0 1-.43 1.532M12 10.126a1.125 1.125 0 0 0-1.125 1.125v1.5a1.125 1.125 0 1 0 2.25 0v-1.5A1.125 1.125 0 0 0 12 10.125m0 5.25a1.125 1.125 0 0 0-1.125 1.125V18a1.125 1.125 0 1 0 2.25 0v-1.5A1.125 1.125 0 0 0 12 15.375" })
  ] });
});
v.displayName = "RoadHorizon";
export {
  v as RoadHorizon
};
//# sourceMappingURL=RoadHorizon.js.map
