import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...d
}, l) => {
  const m = s(), a = o ? i ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14.625 5.25h-9A1.875 1.875 0 0 0 3.75 7.125v14.25a1.124 1.124 0 0 0 1.781.915l4.594-3.281 4.594 3.281a1.124 1.124 0 0 0 1.781-.915V7.125a1.875 1.875 0 0 0-1.875-1.875m-.375 13.939-3.469-2.48a1.125 1.125 0 0 0-1.312 0L6 19.19V7.5h8.25zm6-15.814v14.25a1.125 1.125 0 1 1-2.25 0V3.75H8.625a1.125 1.125 0 0 1 0-2.25h9.75a1.875 1.875 0 0 1 1.875 1.875" })
  ] });
});
h.displayName = "BookmarksSimple";
export {
  h as BookmarksSimple
};
//# sourceMappingURL=BookmarksSimple.js.map
