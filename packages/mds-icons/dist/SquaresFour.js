import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...h
}, i) => {
  const l = n(), o = a ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...h, children: [
    a ? /* @__PURE__ */ e("title", { id: o, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9.375 3.375H5.25A1.875 1.875 0 0 0 3.375 5.25v4.125A1.875 1.875 0 0 0 5.25 11.25h4.125a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875M9 9H5.625V5.625H9zm9.75-5.625h-4.125A1.875 1.875 0 0 0 12.75 5.25v4.125a1.875 1.875 0 0 0 1.875 1.875h4.125a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875M18.375 9H15V5.625h3.375zm-9 3.75H5.25a1.875 1.875 0 0 0-1.875 1.875v4.125a1.875 1.875 0 0 0 1.875 1.875h4.125a1.875 1.875 0 0 0 1.875-1.875v-4.125a1.875 1.875 0 0 0-1.875-1.875M9 18.375H5.625V15H9zm9.75-5.625h-4.125a1.875 1.875 0 0 0-1.875 1.875v4.125a1.875 1.875 0 0 0 1.875 1.875h4.125a1.875 1.875 0 0 0 1.875-1.875v-4.125a1.875 1.875 0 0 0-1.875-1.875m-.375 5.625H15V15h3.375z" })
  ] });
});
s.displayName = "SquaresFour";
export {
  s as SquaresFour
};
//# sourceMappingURL=SquaresFour.js.map
