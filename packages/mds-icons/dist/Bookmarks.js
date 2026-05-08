import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...e
}, i) => {
  const t = s(), a = o ? l ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M18 1.875H9A1.875 1.875 0 0 0 7.125 3.75v1.875H6A1.875 1.875 0 0 0 4.125 7.5V21a1.125 1.125 0 0 0 1.811.892l4.189-3.223 4.19 3.223a1.125 1.125 0 0 0 1.81-.892v-4.35l1.939 1.492a1.127 1.127 0 0 0 1.811-.892V3.75A1.875 1.875 0 0 0 18 1.875m-4.125 16.84-3.065-2.357a1.125 1.125 0 0 0-1.371 0l-3.064 2.357V7.875h7.5zm3.75-3.75-1.5-1.153V7.5a1.875 1.875 0 0 0-1.875-1.875H9.375v-1.5h8.25z" })
  ] });
});
h.displayName = "Bookmarks";
export {
  h as Bookmarks
};
//# sourceMappingURL=Bookmarks.js.map
