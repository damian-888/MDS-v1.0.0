import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const v = m(({
  size: e = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const h = n(), r = a ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M10.687 13.626a1.126 1.126 0 0 0-1.875 0l-1.406 2.107-.628-.946a1.126 1.126 0 0 0-1.882.016l-3.592 5.589a1.125 1.125 0 0 0 .946 1.733h12a1.126 1.126 0 0 0 .937-1.75zm-6.375 6.249 1.547-2.41.614.92a1.125 1.125 0 0 0 1.875 0l1.406-2.107 2.394 3.597zm15.984-12.42-5.25-5.25a1.13 1.13 0 0 0-.796-.33h-9A1.875 1.875 0 0 0 3.375 3.75v7.875a1.125 1.125 0 1 0 2.25 0v-7.5h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125a1.125 1.125 0 1 0 0 2.25h.375a1.875 1.875 0 0 0 1.875-1.875v-12a1.13 1.13 0 0 0-.33-.796M15 5.343 17.156 7.5H15z" })
  ] });
});
v.displayName = "FileImage";
export {
  v as FileImage
};
//# sourceMappingURL=FileImage.js.map
