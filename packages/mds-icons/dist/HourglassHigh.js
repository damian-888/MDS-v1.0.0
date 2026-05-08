import { jsxs as s, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const v = t(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...d
}, e) => {
  const h = n(), a = r ? i ?? h : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: a, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M17.25 1.875H6.75A1.875 1.875 0 0 0 4.875 3.75v3.375a1.88 1.88 0 0 0 .75 1.5l4.5 3.375-4.5 3.375a1.88 1.88 0 0 0-.75 1.5v3.375a1.875 1.875 0 0 0 1.875 1.875h10.5a1.875 1.875 0 0 0 1.875-1.875v-3.341a1.89 1.89 0 0 0-.744-1.5L13.866 12l4.515-3.412a1.89 1.89 0 0 0 .744-1.5V3.75a1.875 1.875 0 0 0-1.875-1.875m-.375 2.25v1.5h-9.75v-1.5zM12 10.594 8.375 7.875h7.218zm4.875 9.281h-9.75v-2.812L12 13.406l4.875 3.687z" })
  ] });
});
v.displayName = "HourglassHigh";
export {
  v as HourglassHigh
};
//# sourceMappingURL=HourglassHigh.js.map
