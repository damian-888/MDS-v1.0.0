import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...o
}, l) => {
  const v = s(), d = a ? i ?? v : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": d, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: d, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6.375 9.568V3.75a1.125 1.125 0 1 0-2.25 0v5.818a3.375 3.375 0 0 0 0 6.364v4.318a1.125 1.125 0 1 0 2.25 0v-4.318a3.375 3.375 0 0 0 0-6.364M5.25 13.875a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25M15.375 8.25a3.38 3.38 0 0 0-2.25-3.182V3.75a1.125 1.125 0 1 0-2.25 0v1.318a3.375 3.375 0 0 0 0 6.364v8.818a1.125 1.125 0 1 0 2.25 0v-8.818a3.38 3.38 0 0 0 2.25-3.182M12 9.375a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m10.125 6.375a3.38 3.38 0 0 0-2.25-3.182V3.75a1.125 1.125 0 1 0-2.25 0v8.818a3.375 3.375 0 0 0 0 6.364v1.318a1.125 1.125 0 1 0 2.25 0v-1.318a3.38 3.38 0 0 0 2.25-3.182m-3.375 1.125a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25" })
  ] });
});
m.displayName = "Sliders";
export {
  m as Sliders
};
//# sourceMappingURL=Sliders.js.map
