import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...d
}, t) => {
  const l = h(), a = o ? i ?? l : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": a, ...d, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M23.54 6.32a1.125 1.125 0 0 0-1.04-.695h-2.642a4.94 4.94 0 0 0-4.094-2.25 4.77 4.77 0 0 0-3.43 1.393 4.86 4.86 0 0 0-1.459 3.482v.074C7.423 7.239 4.652 4.489 4.622 4.458a1.125 1.125 0 0 0-1.919.692c-.591 6.579 2.311 10.105 3.943 11.543-1.358 1.385-3.27 2.121-3.29 2.129a1.125 1.125 0 0 0-.543 1.678c.187.27 1.26 1.625 4.687 1.625 6.774 0 12.44-5.18 13.088-11.871l2.707-2.708a1.125 1.125 0 0 0 .245-1.226m-4.835 2.635c-.194.194-.31.451-.327.724-.365 5.718-5.142 10.196-10.878 10.196a8.5 8.5 0 0 1-1.17-.074c.983-.624 2.082-1.513 2.858-2.676a1.125 1.125 0 0 0-.366-1.594c-.011-.007-1.156-.702-2.196-2.29-1.041-1.586-1.618-3.468-1.731-5.604C6.504 8.85 9 10.387 11.813 10.86a1.125 1.125 0 0 0 1.312-1.11v-1.5a2.63 2.63 0 0 1 .789-1.881 2.54 2.54 0 0 1 1.823-.744 2.7 2.7 0 0 1 2.42 1.576 1.13 1.13 0 0 0 1.032.674h.593z" })
  ] });
});
s.displayName = "TwitterLogo";
export {
  s as TwitterLogo
};
//# sourceMappingURL=TwitterLogo.js.map
