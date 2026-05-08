import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const m = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const h = c(), l = a ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: l, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14.625 13.125A1.125 1.125 0 0 1 13.5 14.25h-3a1.126 1.126 0 0 1-.937-1.75l1.835-2.75H10.5a1.125 1.125 0 1 1 0-2.25h3a1.125 1.125 0 0 1 .938 1.75L12.602 12h.898a1.125 1.125 0 0 1 1.125 1.125m6.5 4.313a1.85 1.85 0 0 1-1.625.937h-3.392a4.125 4.125 0 0 1-8.216 0H4.5a1.85 1.85 0 0 1-1.623-.937 1.88 1.88 0 0 1 .005-1.881c.81-1.4 1.243-3.409 1.243-5.807a7.875 7.875 0 0 1 15.75 0c0 2.397.43 4.406 1.244 5.806a1.88 1.88 0 0 1 .007 1.882zm-7.287.937h-3.675a1.874 1.874 0 0 0 3.675 0m5.038-2.25c-.83-1.687-1.25-3.832-1.25-6.375a5.625 5.625 0 0 0-11.25 0c0 2.544-.42 4.688-1.25 6.375z" })
  ] });
});
m.displayName = "BellZ";
export {
  m as BellZ
};
//# sourceMappingURL=BellZ.js.map
