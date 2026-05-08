import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...e
}, i) => {
  const t = h(), a = o ? l ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 1.875H6.75A3.375 3.375 0 0 0 3.375 5.25V21A1.125 1.125 0 0 0 4.5 22.125H18a1.125 1.125 0 1 0 0-2.25H5.625V19.5a1.125 1.125 0 0 1 1.125-1.125H19.5a1.125 1.125 0 0 0 1.125-1.125V3A1.125 1.125 0 0 0 19.5 1.875m-8.25 2.25h3.375v5.531l-.985-.788a1.125 1.125 0 0 0-1.407 0l-.983.788zm7.125 12H6.75c-.383 0-.764.065-1.125.193V5.25A1.125 1.125 0 0 1 6.75 4.125H9V12a1.125 1.125 0 0 0 1.828.878l2.109-1.687 2.11 1.687A1.124 1.124 0 0 0 16.875 12V4.125h1.5z" })
  ] });
});
s.displayName = "BookBookmark";
export {
  s as BookBookmark
};
//# sourceMappingURL=BookBookmark.js.map
