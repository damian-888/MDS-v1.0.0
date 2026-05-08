import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: o = "1em",
  title: e,
  titleId: l,
  ...d
}, a) => {
  const t = s(), r = e ? l ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": r, ...d, children: [
    e ? /* @__PURE__ */ i("title", { id: r, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m20.826 9.924-7.5-7.5a1.875 1.875 0 0 0-2.652 0l-7.5 7.5a1.86 1.86 0 0 0-.549 1.327v9a1.125 1.125 0 0 0 1.125 1.124h16.5a1.125 1.125 0 0 0 1.125-1.125v-9a1.86 1.86 0 0 0-.55-1.326m-1.701 9.202H4.875v-7.72L12 4.28l7.125 7.125z" })
  ] });
});
h.displayName = "HouseSimple";
export {
  h as HouseSimple
};
//# sourceMappingURL=HouseSimple.js.map
