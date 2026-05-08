import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, e) => {
  const l = n(), h = a ? o ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": h, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: h, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M17.625 4.658V3a1.875 1.875 0 0 0-1.875-1.875h-7.5A1.875 1.875 0 0 0 6.375 3v1.657a4.13 4.13 0 0 0-3 3.968V18.75A4.13 4.13 0 0 0 7.5 22.875h9a4.13 4.13 0 0 0 4.125-4.125V8.625a4.13 4.13 0 0 0-3-3.968m-2.25-.158h-2.25V3.375h2.25zm-4.5-1.125V4.5h-2.25V3.375zm7.5 15.375a1.875 1.875 0 0 1-1.875 1.875h-9a1.875 1.875 0 0 1-1.875-1.875V8.625A1.875 1.875 0 0 1 7.5 6.75h9a1.875 1.875 0 0 1 1.875 1.875zm-2.625-3.562a2.813 2.813 0 0 1-2.625 2.805v.382a1.125 1.125 0 1 1-2.25 0V18h-.75a1.125 1.125 0 1 1 0-2.25h2.813a.562.562 0 1 0 0-1.125h-1.876a2.813 2.813 0 0 1-.187-5.618V9a1.125 1.125 0 1 1 2.25 0h.75a1.125 1.125 0 0 1 0 2.25h-2.812a.562.562 0 1 0 0 1.125h1.874a2.81 2.81 0 0 1 2.813 2.813" })
  ] });
});
s.displayName = "TipJar";
export {
  s as TipJar
};
//# sourceMappingURL=TipJar.js.map
