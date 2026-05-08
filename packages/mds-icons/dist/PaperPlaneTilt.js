import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const t = h(), a = l ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    l ? /* @__PURE__ */ e("title", { id: a, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.576 2.424a1.88 1.88 0 0 0-1.835-.479l-.02.007L1.728 7.406a1.875 1.875 0 0 0-.287 3.492l7.84 3.82 3.816 7.843a1.86 1.86 0 0 0 1.687 1.067q.081.002.162-.007a1.86 1.86 0 0 0 1.647-1.35L22.048 4.28l.007-.02a1.88 1.88 0 0 0-.48-1.836M14.71 20.725l-3.222-6.622 4.313-4.308a1.125 1.125 0 0 0-.797-1.924 1.13 1.13 0 0 0-.797.33l-4.313 4.313-6.62-3.224 16.413-4.977z" })
  ] });
});
m.displayName = "PaperPlaneTilt";
export {
  m as PaperPlaneTilt
};
//# sourceMappingURL=PaperPlaneTilt.js.map
