import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...l
}, a) => {
  const m = s(), e = o ? d ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    o ? /* @__PURE__ */ i("title", { id: e, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M17.25 2.625H6.75A1.875 1.875 0 0 0 4.875 4.5V21a1.125 1.125 0 0 0 1.721.954L12 18.58l5.405 3.375A1.126 1.126 0 0 0 19.125 21V4.5a1.875 1.875 0 0 0-1.875-1.875m-.375 16.345-4.28-2.674a1.13 1.13 0 0 0-1.192 0L7.125 18.97V4.875h9.75z" })
  ] });
});
h.displayName = "BookmarkSimple";
export {
  h as BookmarkSimple
};
//# sourceMappingURL=BookmarkSimple.js.map
