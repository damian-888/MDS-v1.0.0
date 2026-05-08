import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: r = "1em",
  title: l,
  titleId: o,
  ...c
}, d) => {
  const i = s(), a = l ? o ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": a, ...c, children: [
    l ? /* @__PURE__ */ e("title", { id: a, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m22.794 12.332-3-7.5a1.125 1.125 0 0 0-1.287-.68l-5.382 1.192V3.75a1.125 1.125 0 1 0-2.25 0v2.097L5.006 7.152a1.13 1.13 0 0 0-.8.68l-3 7.492q-.083.206-.081.426c0 1.137.581 2.103 1.636 2.719.76.425 1.617.651 2.489.656a5.16 5.16 0 0 0 2.49-.656c1.054-.616 1.635-1.582 1.635-2.719 0-.143-.027-.285-.08-.418L6.784 9.06l4.09-.905v10.969H9.75a1.125 1.125 0 1 0 0 2.25h4.5a1.125 1.125 0 1 0 0-2.25h-1.125V7.653l3.79-.844-2.21 5.522q-.08.201-.08.419c0 1.137.581 2.103 1.636 2.719a5.04 5.04 0 0 0 4.978 0c1.055-.616 1.636-1.582 1.636-2.719 0-.143-.027-.285-.08-.418M5.25 16.875c-.348 0-1.687-.175-1.857-.954l1.857-4.642 1.857 4.642c-.17.779-1.51.954-1.857.954m13.5-3c-.348 0-1.687-.175-1.857-.954l1.857-4.642 1.857 4.642c-.17.779-1.51.954-1.857.954" })
  ] });
});
h.displayName = "Scales";
export {
  h as Scales
};
//# sourceMappingURL=Scales.js.map
