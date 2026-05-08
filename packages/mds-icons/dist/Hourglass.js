import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const s = h(), a = r ? d ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    r ? /* @__PURE__ */ l("title", { id: a, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.125 7.091V3.75a1.875 1.875 0 0 0-1.875-1.875H6.75A1.875 1.875 0 0 0 4.875 3.75v3.375a1.88 1.88 0 0 0 .75 1.5l4.5 3.375-4.5 3.375a1.88 1.88 0 0 0-.75 1.5v3.375a1.875 1.875 0 0 0 1.875 1.875h10.5a1.875 1.875 0 0 0 1.875-1.875v-3.341a1.89 1.89 0 0 0-.744-1.5L13.866 12l4.515-3.412a1.89 1.89 0 0 0 .744-1.497m-2.25 12.784h-9.75v-2.812L12 13.406l4.875 3.687zm0-12.97L12 10.594 7.125 6.938V4.124h9.75z" })
  ] });
});
m.displayName = "Hourglass";
export {
  m as Hourglass
};
//# sourceMappingURL=Hourglass.js.map
