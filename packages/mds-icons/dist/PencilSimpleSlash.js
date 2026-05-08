import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: a = "1em",
  title: l,
  titleId: r,
  ...o
}, d) => {
  const n = h(), e = l ? r ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    l ? /* @__PURE__ */ i("title", { id: e, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M5.333 2.993a1.125 1.125 0 1 0-1.665 1.513l4.278 4.706-4.772 4.772a1.86 1.86 0 0 0-.549 1.326v4.19A1.875 1.875 0 0 0 4.5 21.375h4.19a1.86 1.86 0 0 0 1.325-.55l4.447-4.445 4.206 4.626a1.127 1.127 0 0 0 1.599.086 1.125 1.125 0 0 0 .066-1.599zM8.53 19.125H4.875v-3.657l4.586-4.586 3.486 3.834zM21.577 6.613l-4.19-4.189a1.875 1.875 0 0 0-2.651 0L11.36 5.799a1.125 1.125 0 0 0 1.364 1.764l3.681 3.687-.05.05a1.13 1.13 0 0 0 .365 1.837 1.13 1.13 0 0 0 1.228-.244l3.626-3.625a1.876 1.876 0 0 0 .002-2.655M18 9.656 14.344 6l1.72-1.72 3.655 3.656z" })
  ] });
});
m.displayName = "PencilSimpleSlash";
export {
  m as PencilSimpleSlash
};
//# sourceMappingURL=PencilSimpleSlash.js.map
