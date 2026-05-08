import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const m = v(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, l) => {
  const h = n(), a = o ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M18 11.625a1.125 1.125 0 0 0 1.125-1.125V6.75A1.125 1.125 0 0 0 18 5.625h-3.375V2.25A1.125 1.125 0 0 0 13.5 1.125h-3A1.125 1.125 0 0 0 9.375 2.25 3.375 3.375 0 0 1 6 5.625 1.125 1.125 0 0 0 4.875 6.75v3.75A1.125 1.125 0 0 0 6 11.625h1.875V16.5a6.38 6.38 0 0 0 6.375 6.375H18a1.125 1.125 0 0 0 1.125-1.125v-4.5A1.125 1.125 0 0 0 18 16.125h-3a.375.375 0 0 1-.375-.375v-4.125zm-3 6.75h1.875v2.25H14.25a4.13 4.13 0 0 1-4.125-4.125v-6A1.125 1.125 0 0 0 9 9.375H7.125V7.762a5.64 5.64 0 0 0 4.387-4.387h.863V6.75A1.125 1.125 0 0 0 13.5 7.875h3.375v1.5H13.5a1.125 1.125 0 0 0-1.125 1.125v5.25A2.625 2.625 0 0 0 15 18.375" })
  ] });
});
m.displayName = "TumblrLogo";
export {
  m as TumblrLogo
};
//# sourceMappingURL=TumblrLogo.js.map
