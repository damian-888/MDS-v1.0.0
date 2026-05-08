import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const m = n(), a = r ? d ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: a, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 2.625H8.25A1.875 1.875 0 0 0 6.375 4.5v1.125H4.5A1.875 1.875 0 0 0 2.625 7.5v12A1.875 1.875 0 0 0 4.5 21.375h12a1.875 1.875 0 0 0 1.875-1.875v-1.875H19.5a1.875 1.875 0 0 0 1.875-1.875V4.5A1.875 1.875 0 0 0 19.5 2.625M8.625 4.875h10.5v5.599l-.924-.925a1.875 1.875 0 0 0-2.652 0l-5.825 5.826H8.625zm7.5 14.25H4.875V7.875h1.5v7.875a1.875 1.875 0 0 0 1.875 1.875h7.875zm-3.22-3.75 3.97-3.97 2.25 2.25v1.72zm-2.78-7.125a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0" })
  ] });
});
s.displayName = "ImagesSquare";
export {
  s as ImagesSquare
};
//# sourceMappingURL=ImagesSquare.js.map
