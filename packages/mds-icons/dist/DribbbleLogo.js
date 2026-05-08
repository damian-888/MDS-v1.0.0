import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const h = n(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...d
}, l) => {
  const m = c(), a = o ? i ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m7.793 9h-.292c-1.308 0-2.61.16-3.88.474a16 16 0 0 0-.996-2.219 16.2 16.2 0 0 0 3.084-2.545 7.85 7.85 0 0 1 2.084 4.29m-3.855-5.69c-.761.78-1.61 1.468-2.532 2.05a16.3 16.3 0 0 0-2.867-2.972 7.83 7.83 0 0 1 5.399.921m-7.919.025a14 14 0 0 1 3.366 3.081 13.85 13.85 0 0 1-6.786 1.014A7.92 7.92 0 0 1 8.02 5.21M4.125 12q.001-.242.016-.482.927.106 1.859.107c2.29.002 4.554-.485 6.641-1.427q.487.89.836 1.842-1.042.419-2.017.98a16.2 16.2 0 0 0-5.033 4.54A7.85 7.85 0 0 1 4.126 12m4.103 6.911a14 14 0 0 1 4.356-3.943q.728-.418 1.5-.744a13.9 13.9 0 0 1-.021 5.375 7.86 7.86 0 0 1-5.834-.688m8.278-.458q.079-.8.08-1.607c0-1.12-.117-2.236-.348-3.332a14 14 0 0 1 3.262-.389h.292a7.88 7.88 0 0 1-3.286 5.328" })
  ] });
});
h.displayName = "DribbbleLogo";
export {
  h as DribbbleLogo
};
//# sourceMappingURL=DribbbleLogo.js.map
