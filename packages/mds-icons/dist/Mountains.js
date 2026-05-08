import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...l
}, e) => {
  const n = s(), a = o ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: e, "aria-labelledby": a, ...l, children: [
    o ? /* @__PURE__ */ i("title", { id: a, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M15 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m8.843 14.426-5.116-8.632a1.86 1.86 0 0 0-1.613-.919 1.86 1.86 0 0 0-1.612.919l-1.754 2.958-3.508-5.954a1.874 1.874 0 0 0-3.23 0L.156 18.18a1.125 1.125 0 0 0 .969 1.696h21.75a1.125 1.125 0 0 0 .968-1.699M8.625 8.238l1.553 2.637H7.073zm-5.531 9.387 2.651-4.5h5.76l2.651 4.5zm13.674 0-1.716-2.906 2.063-3.478 3.786 6.384z" })
  ] });
});
h.displayName = "Mountains";
export {
  h as Mountains
};
//# sourceMappingURL=Mountains.js.map
