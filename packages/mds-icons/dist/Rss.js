import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const h = n(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...a
}, l) => {
  const s = m(), d = r ? i ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": d, ...a, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M10.288 13.712a7.08 7.08 0 0 1 2.087 5.038 1.125 1.125 0 0 1-2.25 0 4.875 4.875 0 0 0-4.875-4.875 1.125 1.125 0 0 1 0-2.25 7.08 7.08 0 0 1 5.038 2.087M5.25 7.125a1.125 1.125 0 1 0 0 2.25 9.375 9.375 0 0 1 9.375 9.375 1.125 1.125 0 0 0 2.25 0A11.625 11.625 0 0 0 5.25 7.125m11.402.223A16.02 16.02 0 0 0 5.25 2.625a1.125 1.125 0 1 0 0 2.25 13.78 13.78 0 0 1 9.81 4.064 13.78 13.78 0 0 1 4.065 9.811 1.125 1.125 0 0 0 2.25 0 16.02 16.02 0 0 0-4.723-11.402M5.625 16.875a1.5 1.5 0 1 0 0 2.999 1.5 1.5 0 0 0 0-2.999" })
  ] });
});
h.displayName = "Rss";
export {
  h as Rss
};
//# sourceMappingURL=Rss.js.map
