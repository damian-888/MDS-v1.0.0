import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as n } from "react";
const m = s(({
  size: l = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const h = n(), r = a ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M4.5 12a1.125 1.125 0 0 1 1.125-1.124h1.5a1.125 1.125 0 1 1 0 2.25h-1.5A1.125 1.125 0 0 1 4.5 12m15.833 7.494a1.126 1.126 0 1 1-1.665 1.513l-1.032-1.131H3A1.875 1.875 0 0 1 1.125 18V6A1.875 1.875 0 0 1 3 4.126h.439a1.125 1.125 0 0 1 1.893-1.132zm-4.74-1.868L14.571 16.5H5.625a1.125 1.125 0 0 1 0-2.25h6.9l-1.023-1.125h-.627a1.124 1.124 0 0 1-.947-1.732L5.366 6.376H3.375v11.25zM21 4.126H10.931a1.125 1.125 0 0 0 0 2.25h9.694v10.776a1.125 1.125 0 1 0 2.25 0V6A1.875 1.875 0 0 0 21 4.126m-2.625 9a1.125 1.125 0 0 0 0-2.25h-1.307a1.125 1.125 0 0 0 0 2.25z" })
  ] });
});
m.displayName = "SubtitlesSlash";
export {
  m as SubtitlesSlash
};
//# sourceMappingURL=SubtitlesSlash.js.map
