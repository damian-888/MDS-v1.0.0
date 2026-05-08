import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, e) => {
  const t = h(), r = a ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M2.625 6A1.125 1.125 0 0 1 3.75 4.875h16.5a1.125 1.125 0 0 1 0 2.25H3.75A1.125 1.125 0 0 1 2.625 6m1.125 7.125h10.875a1.125 1.125 0 1 0 0-2.25H3.75a1.125 1.125 0 1 0 0 2.25m6.375 3.75H3.75a1.125 1.125 0 1 0 0 2.25h6.375a1.125 1.125 0 1 0 0-2.25m13.452-4.927a1.125 1.125 0 0 1-1.4.75l-2.302-.686V18a3.375 3.375 0 1 1-2.25-3.182V10.5a1.125 1.125 0 0 1 1.448-1.077l3.75 1.125a1.125 1.125 0 0 1 .754 1.4M17.625 18a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0" })
  ] });
});
m.displayName = "Playlist";
export {
  m as Playlist
};
//# sourceMappingURL=Playlist.js.map
