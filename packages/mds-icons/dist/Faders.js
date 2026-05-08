import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const s = h(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...v
}, i) => {
  const l = n(), d = a ? o ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": d, ...v, children: [
    a ? /* @__PURE__ */ e("title", { id: d, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.125 11.625v8.625a1.125 1.125 0 1 1-2.25 0v-8.625a1.125 1.125 0 1 1 2.25 0M18.75 18a1.125 1.125 0 0 0-1.125 1.125v1.125a1.125 1.125 0 1 0 2.25 0v-1.125A1.125 1.125 0 0 0 18.75 18M21 14.25h-1.125V3.75a1.125 1.125 0 1 0-2.25 0v10.5H16.5a1.125 1.125 0 1 0 0 2.25H21a1.125 1.125 0 1 0 0-2.25M5.25 15a1.125 1.125 0 0 0-1.125 1.125v4.125a1.125 1.125 0 0 0 2.25 0v-4.125A1.125 1.125 0 0 0 5.25 15m2.25-3.75H6.375v-7.5a1.125 1.125 0 0 0-2.25 0v7.5H3a1.125 1.125 0 1 0 0 2.25h4.5a1.125 1.125 0 1 0 0-2.25m6.75-4.5h-1.125v-3a1.125 1.125 0 1 0-2.25 0v3H9.75a1.125 1.125 0 0 0 0 2.25h4.5a1.125 1.125 0 0 0 0-2.25" })
  ] });
});
s.displayName = "Faders";
export {
  s as Faders
};
//# sourceMappingURL=Faders.js.map
