import { jsxs as v, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const m = t(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, l) => {
  const n = h(), e = a ? o ?? n : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M10.875 1.875v-.75a1.125 1.125 0 1 1 2.25 0v.75a1.125 1.125 0 1 1-2.25 0M18.75 5.25a1.13 1.13 0 0 0 .796-.33l.75-.75a1.126 1.126 0 0 0-1.228-1.837q-.207.087-.366.244l-.75.75a1.125 1.125 0 0 0 .798 1.923M4.454 4.92a1.127 1.127 0 0 0 1.594-1.593l-.75-.75a1.127 1.127 0 1 0-1.594 1.594zM22.125 16.5v2.25a1.875 1.875 0 0 1-1.875 1.875H3.75a1.875 1.875 0 0 1-1.875-1.875V16.5a1.875 1.875 0 0 1 1.5-1.838v-1.537A8.625 8.625 0 0 1 12 4.5h.067c4.714.036 8.558 3.947 8.558 8.719v1.444a1.875 1.875 0 0 1 1.5 1.837m-16.5-3.375v1.5h12.75v-1.406c0-3.541-2.838-6.443-6.326-6.469H12a6.375 6.375 0 0 0-6.375 6.375m14.25 3.75H4.125v1.5h15.75zm-7.087-6.255a2.62 2.62 0 0 1 1.717 1.718 1.125 1.125 0 1 0 2.147-.675 4.88 4.88 0 0 0-3.188-3.188 1.125 1.125 0 0 0-.675 2.147z" })
  ] });
});
m.displayName = "Siren";
export {
  m as Siren
};
//# sourceMappingURL=Siren.js.map
