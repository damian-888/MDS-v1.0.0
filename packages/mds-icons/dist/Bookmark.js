import { jsxs as m, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...e
}, i) => {
  const t = s(), d = o ? a ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": d, ...e, children: [
    o ? /* @__PURE__ */ l("title", { id: d, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M17.25 2.625H6.75A1.875 1.875 0 0 0 4.875 4.5V21a1.125 1.125 0 0 0 1.721.954L12 18.58l5.405 3.375A1.126 1.126 0 0 0 19.125 21V4.5a1.875 1.875 0 0 0-1.875-1.875m-.375 2.25v9.595l-4.28-2.674a1.13 1.13 0 0 0-1.192 0L7.125 14.47V4.875zm-4.28 11.42a1.13 1.13 0 0 0-1.192 0L7.125 18.97v-1.847L12 14.077l4.875 3.046v1.847z" })
  ] });
});
v.displayName = "Bookmark";
export {
  v as Bookmark
};
//# sourceMappingURL=Bookmark.js.map
