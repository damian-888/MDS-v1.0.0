import { jsxs as s, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const h = t(({
  size: r = "1em",
  title: l,
  titleId: o,
  ...d
}, a) => {
  const m = n(), e = l ? o ?? m : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: a, "aria-labelledby": e, ...d, children: [
    l ? /* @__PURE__ */ i("title", { id: e, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.063 18.158 13.627 12l6.436-6.157.017-.017a1.875 1.875 0 0 0-1.33-3.201H5.25a1.875 1.875 0 0 0-1.325 3.2l.017.018L10.374 12l-6.432 6.157-.017.017a1.875 1.875 0 0 0 1.325 3.201h13.5a1.875 1.875 0 0 0 1.326-3.2zm-9.961-9.533h3.797L12 10.443zm7.71-3.75-1.564 1.5H7.752l-1.564-1.5zM6.189 19.125l4.687-4.49v1.115a1.125 1.125 0 0 0 2.25 0v-1.116l4.688 4.491z" })
  ] });
});
h.displayName = "HourglassSimpleMedium";
export {
  h as HourglassSimpleMedium
};
//# sourceMappingURL=HourglassSimpleMedium.js.map
