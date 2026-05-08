import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const h = n(), r = a ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m18.656 11.748-4.676-1.724-1.728-4.68a1.867 1.867 0 0 0-3.504 0l-1.724 4.68-4.68 1.724a1.867 1.867 0 0 0 0 3.504l4.676 1.724 1.728 4.68a1.867 1.867 0 0 0 3.504 0l1.724-4.676 4.68-1.728a1.868 1.868 0 0 0 0-3.504m-5.942 3.296a1.12 1.12 0 0 0-.666.667L10.5 19.9l-1.544-4.19a1.12 1.12 0 0 0-.667-.667L4.1 13.5l4.19-1.544a1.12 1.12 0 0 0 .667-.667L10.5 7.1l1.544 4.19a1.12 1.12 0 0 0 .666.667l4.191 1.544zm.41-11.294a1.125 1.125 0 0 1 1.126-1.125h1.125V1.5a1.125 1.125 0 1 1 2.25 0v1.125h1.125a1.125 1.125 0 0 1 0 2.25h-1.125V6a1.125 1.125 0 0 1-2.25 0V4.875H14.25a1.125 1.125 0 0 1-1.125-1.125m10.5 4.5A1.125 1.125 0 0 1 22.5 9.375h-.375v.375a1.125 1.125 0 0 1-2.25 0v-.375H19.5a1.125 1.125 0 1 1 0-2.25h.375V6.75a1.125 1.125 0 1 1 2.25 0v.375h.375a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "Sparkle";
export {
  s as Sparkle
};
//# sourceMappingURL=Sparkle.js.map
