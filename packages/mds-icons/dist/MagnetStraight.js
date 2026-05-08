import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { forwardRef as l, useId as n } from "react";
const m = l(({
  size: t = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const h = n(), a = r ? i ?? h : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: t, height: t, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.75 3.375H15a1.875 1.875 0 0 0-1.875 1.875v8.25a1.125 1.125 0 1 1-2.25 0V5.25A1.875 1.875 0 0 0 9 3.375H5.25A1.875 1.875 0 0 0 3.375 5.25v8.25A8.625 8.625 0 0 0 12 22.125h.067c4.719-.036 8.559-3.947 8.559-8.719V5.25a1.875 1.875 0 0 0-1.876-1.875m-.375 2.25v2.25h-3v-2.25zm-9.75 0v2.25h-3v-2.25zm3.424 14.25H12A6.375 6.375 0 0 1 5.625 13.5v-3.375h3V13.5a3.375 3.375 0 0 0 6.75 0v-3.375h3v3.281c0 3.541-2.838 6.443-6.326 6.469" })
  ] });
});
m.displayName = "MagnetStraight";
export {
  m as MagnetStraight
};
//# sourceMappingURL=MagnetStraight.js.map
