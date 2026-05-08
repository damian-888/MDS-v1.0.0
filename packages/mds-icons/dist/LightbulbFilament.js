import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: i = "1em",
  title: a,
  titleId: e,
  ...o
}, d) => {
  const t = m(), l = a ? e ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": l, ...o, children: [
    a ? /* @__PURE__ */ r("title", { id: l, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M16.875 21.749a1.125 1.125 0 0 1-1.125 1.125h-7.5a1.125 1.125 0 1 1 0-2.25h7.5a1.125 1.125 0 0 1 1.125 1.125m3.75-12a8.67 8.67 0 0 1-3.469 6.912.73.73 0 0 0-.28.588A1.875 1.875 0 0 1 15 19.124H9a1.876 1.876 0 0 1-1.875-1.875v-.022a.73.73 0 0 0-.305-.581 8.57 8.57 0 0 1-3.445-6.844c-.025-4.676 3.75-8.566 8.418-8.678a8.625 8.625 0 0 1 8.832 8.625m-2.25 0a6.374 6.374 0 0 0-6.53-6.375c-3.449.083-6.239 2.958-6.22 6.411a6.33 6.33 0 0 0 2.548 5.063 3.01 3.01 0 0 1 1.18 2.026h1.522v-2.907l-2.67-2.673a1.127 1.127 0 1 1 1.593-1.593L12 11.905 14.204 9.7a1.127 1.127 0 1 1 1.594 1.593l-2.673 2.673v2.907h1.524a2.99 2.99 0 0 1 1.163-2.015 6.32 6.32 0 0 0 2.563-5.11" })
  ] });
});
s.displayName = "LightbulbFilament";
export {
  s as LightbulbFilament
};
//# sourceMappingURL=LightbulbFilament.js.map
