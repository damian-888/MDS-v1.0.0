import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const n = h(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const s = m(), l = r ? d ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.125 7.091V3.75a1.875 1.875 0 0 0-1.875-1.875H6.75A1.875 1.875 0 0 0 4.875 3.75v3.375a1.88 1.88 0 0 0 .75 1.5l4.5 3.375-4.5 3.375a1.88 1.88 0 0 0-.75 1.5v3.375a1.875 1.875 0 0 0 1.875 1.875h10.5a1.875 1.875 0 0 0 1.875-1.875v-3.341a1.89 1.89 0 0 0-.744-1.5L13.866 12l4.515-3.412a1.89 1.89 0 0 0 .744-1.497m-2.25-2.966V6.75h-9.75V4.125zM12 10.594 9.875 9h4.228zm4.875 9.281h-9.75v-2.812l3.75-2.813v1.5a1.125 1.125 0 1 0 2.25 0v-1.49l3.75 2.835z" })
  ] });
});
n.displayName = "HourglassMedium";
export {
  n as HourglassMedium
};
//# sourceMappingURL=HourglassMedium.js.map
