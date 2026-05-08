import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...o
}, d) => {
  const t = s(), e = a ? l ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M16.688 7.314a7.875 7.875 0 1 0-9.376 9.375 7.875 7.875 0 1 0 9.375-9.375m3.937 7.688q0 .312-.036.623L16.464 11.5a7.8 7.8 0 0 0 .375-1.813 5.63 5.63 0 0 1 3.786 5.315m-6.937-2.9L11.9 10.313a5.6 5.6 0 0 1 2.709-.92 5.6 5.6 0 0 1-.922 2.707m-3.376-.2L12.1 13.69a5.6 5.6 0 0 1-2.709.92c.067-.967.385-1.9.922-2.706m4.004-4.743a7.8 7.8 0 0 0-1.814.375L8.378 3.409q.31-.033.623-.032a5.63 5.63 0 0 1 5.313 3.782zM6.018 4.236l4.38 4.38a8 8 0 0 0-1.78 1.782L4.233 6.02a5.7 5.7 0 0 1 1.784-1.784M3.375 9.002q0-.312.036-.623l4.125 4.125a7.8 7.8 0 0 0-.375 1.813 5.63 5.63 0 0 1-3.786-5.315m6.312 7.843a7.8 7.8 0 0 0 1.813-.375l4.125 4.125a5.633 5.633 0 0 1-5.938-3.75m8.295 2.923-4.38-4.38a8 8 0 0 0 1.78-1.782l4.381 4.38a5.7 5.7 0 0 1-1.78 1.782" })
  ] });
});
c.displayName = "Unite";
export {
  c as Unite
};
//# sourceMappingURL=Unite.js.map
