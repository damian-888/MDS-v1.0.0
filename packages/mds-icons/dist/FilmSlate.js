import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: l,
  titleId: o,
  ...a
}, d) => {
  const t = h(), e = l ? o ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": e, ...a, children: [
    l ? /* @__PURE__ */ i("title", { id: e, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.25 9.374h-7.789l7.326-1.934a1.125 1.125 0 0 0 .799-1.383l-.765-2.812a1.87 1.87 0 0 0-2.278-1.308L3.262 5.706a1.85 1.85 0 0 0-1.138.869A1.83 1.83 0 0 0 1.94 7.98l.684 2.518v8.25A1.875 1.875 0 0 0 4.5 20.624h15a1.875 1.875 0 0 0 1.875-1.875v-8.25a1.125 1.125 0 0 0-1.125-1.125m-8.541-3.57 1.714.99-2.432.641-1.715-.99zm6.042-1.595.366 1.346-1.605.423-1.715-.99zM6.188 7.261l1.714.988-3.318.877-.365-1.346zm12.937 11.113H4.875v-6.75h14.25z" })
  ] });
});
s.displayName = "FilmSlate";
export {
  s as FilmSlate
};
//# sourceMappingURL=FilmSlate.js.map
