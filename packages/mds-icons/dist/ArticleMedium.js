import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...h
}, l) => {
  const o = n(), e = a ? d ?? o : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": e, ...h, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M5.25 12.375A1.125 1.125 0 0 1 4.125 13.5H2.25a1.125 1.125 0 1 1 0-2.25h.375V6.375H2.25a1.125 1.125 0 1 1 0-2.25h1.5a1.13 1.13 0 0 1 .938.5L7.5 8.843l2.813-4.218a1.13 1.13 0 0 1 .937-.5h1.5a1.125 1.125 0 1 1 0 2.25h-.375v4.875h.375a1.125 1.125 0 1 1 0 2.25h-1.875a1.126 1.126 0 0 1-.75-1.962V8.965l-1.687 2.532a1.125 1.125 0 0 1-1.876 0L4.876 8.965v2.573a1.13 1.13 0 0 1 .375.837M16.5 9.75h5.25a1.125 1.125 0 1 0 0-2.25H16.5a1.125 1.125 0 1 0 0 2.25m5.25 1.5H16.5a1.125 1.125 0 1 0 0 2.25h5.25a1.125 1.125 0 1 0 0-2.25m0 3.75H7.5a1.125 1.125 0 1 0 0 2.25h14.25a1.125 1.125 0 1 0 0-2.25m0 3.75H7.5a1.125 1.125 0 1 0 0 2.25h14.25a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
s.displayName = "ArticleMedium";
export {
  s as ArticleMedium
};
//# sourceMappingURL=ArticleMedium.js.map
