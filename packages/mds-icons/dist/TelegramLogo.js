import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const g = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...a
}, i) => {
  const m = s(), l = o ? d ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": l, ...a, children: [
    o ? /* @__PURE__ */ e("title", { id: l, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.702 2.17a1.22 1.22 0 0 0-1.24-.211l-19 7.435a1.708 1.708 0 0 0 .293 3.268l4.62.907v5.18A1.875 1.875 0 0 0 9.6 20.052l2.125-2.204 3.495 3.059a1.875 1.875 0 0 0 3.066-.988l3.808-16.552a1.22 1.22 0 0 0-.392-1.195m-8.633 5.097-5.83 4.178-3.228-.632zm-4.444 10.55v-2.69l1.406 1.232zm7.608.987-6.926-6.072 9.967-7.142z" })
  ] });
});
g.displayName = "TelegramLogo";
export {
  g as TelegramLogo
};
//# sourceMappingURL=TelegramLogo.js.map
