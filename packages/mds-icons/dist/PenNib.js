import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: l,
  titleId: o,
  ...a
}, d) => {
  const n = s(), e = l ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": e, ...a, children: [
    l ? /* @__PURE__ */ i("title", { id: e, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M23.625 8.69a1.86 1.86 0 0 0-.55-1.326L16.637.924a1.874 1.874 0 0 0-2.653 0l-2.608 2.609L6.01 5.545A1.88 1.88 0 0 0 4.82 6.993l-2.18 13.07a1.125 1.125 0 0 0 1.298 1.298l13.074-2.18a1.88 1.88 0 0 0 1.447-1.19l2.012-5.367 2.608-2.609a1.86 1.86 0 0 0 .547-1.325m-7.2 8.308L7.03 18.564l3.094-3.094a3.188 3.188 0 1 0-1.594-1.594L5.437 16.97l1.566-9.394 4.716-1.768 6.473 6.474zM10.5 12.563a.937.937 0 1 1 1.873 0 .937.937 0 0 1-1.873 0m9-2.156-5.906-5.906 1.719-1.72 5.906 5.907z" })
  ] });
});
h.displayName = "PenNib";
export {
  h as PenNib
};
//# sourceMappingURL=PenNib.js.map
