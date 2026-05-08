import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const m = h(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, i) => {
  const s = n(), a = o ? d ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    o ? /* @__PURE__ */ l("title", { id: a, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.125 7.091V3.75a1.875 1.875 0 0 0-1.875-1.875H6.75A1.875 1.875 0 0 0 4.875 3.75v3.375a1.88 1.88 0 0 0 .75 1.5l4.5 3.375-4.5 3.375a1.88 1.88 0 0 0-.75 1.5v3.375a1.875 1.875 0 0 0 1.875 1.875h10.5a1.875 1.875 0 0 0 1.875-1.875v-3.341a1.89 1.89 0 0 0-.744-1.5L13.866 12l4.515-3.412a1.89 1.89 0 0 0 .744-1.497m-3.533 9.034h-7.22L12 13.406zm-8.467 3.75v-1.5h9.75v1.5zm9.75-12.97L12 10.594 7.125 6.938V4.124h9.75z" })
  ] });
});
m.displayName = "HourglassLow";
export {
  m as HourglassLow
};
//# sourceMappingURL=HourglassLow.js.map
