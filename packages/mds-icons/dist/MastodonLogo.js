import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as v, useId as s } from "react";
const h = v(({
  size: a = "1em",
  title: o,
  titleId: e,
  ...i
}, t) => {
  const l = s(), r = o ? e ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": r, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: r, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M17.25 2.625H6.75A4.13 4.13 0 0 0 2.625 6.75V18a4.13 4.13 0 0 0 4.125 4.125H15a1.125 1.125 0 1 0 0-2.25H6.75A1.875 1.875 0 0 1 4.875 18v-.375H17.25a4.13 4.13 0 0 0 4.125-4.125V6.75a4.13 4.13 0 0 0-4.125-4.125M19.125 13.5a1.875 1.875 0 0 1-1.875 1.875H4.875V6.75A1.875 1.875 0 0 1 6.75 4.875h10.5a1.875 1.875 0 0 1 1.875 1.875zm-1.5-3.75v3a1.125 1.125 0 1 1-2.25 0v-3a1.125 1.125 0 1 0-2.25 0v3a1.125 1.125 0 1 1-2.25 0v-3a1.125 1.125 0 1 0-2.25 0v3a1.125 1.125 0 0 1-2.25 0v-3A3.375 3.375 0 0 1 12 7.238a3.375 3.375 0 0 1 5.625 2.512" })
  ] });
});
h.displayName = "MastodonLogo";
export {
  h as MastodonLogo
};
//# sourceMappingURL=MastodonLogo.js.map
