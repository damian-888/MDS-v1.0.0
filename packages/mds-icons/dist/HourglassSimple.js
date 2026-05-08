import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const h = n(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...d
}, a) => {
  const s = m(), o = l ? i ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: a, "aria-labelledby": o, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: o, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.063 18.158 13.627 12l6.436-6.157.017-.017a1.875 1.875 0 0 0-1.33-3.201H5.25a1.875 1.875 0 0 0-1.325 3.2l.017.018L10.374 12l-6.432 6.157-.017.017a1.875 1.875 0 0 0 1.325 3.201h13.5a1.875 1.875 0 0 0 1.326-3.2zm-2.25-13.283L12 10.443 6.188 4.875zM6.188 19.125 12 13.557l5.813 5.568z" })
  ] });
});
h.displayName = "HourglassSimple";
export {
  h as HourglassSimple
};
//# sourceMappingURL=HourglassSimple.js.map
