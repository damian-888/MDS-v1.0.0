import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const h = m(({
  size: o = "1em",
  title: l,
  titleId: i,
  ...d
}, a) => {
  const s = n(), r = l ? i ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: a, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.063 18.158 13.627 12l6.436-6.157.017-.017a1.875 1.875 0 0 0-1.33-3.201H5.25a1.875 1.875 0 0 0-1.325 3.2l.017.018L10.374 12l-6.432 6.157-.017.017a1.875 1.875 0 0 0 1.325 3.201h13.5a1.875 1.875 0 0 0 1.326-3.2zm-6.164-2.783h-3.797L12 13.557zm3.914-10.5L12 10.443 6.188 4.875zM6.188 19.125l1.566-1.5h8.496l1.563 1.5z" })
  ] });
});
h.displayName = "HourglassSimpleLow";
export {
  h as HourglassSimpleLow
};
//# sourceMappingURL=HourglassSimpleLow.js.map
