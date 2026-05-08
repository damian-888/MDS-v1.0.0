import { jsxs as c, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const v = h(({
  size: a = "1em",
  title: e,
  titleId: o,
  ...d
}, l) => {
  const t = n(), r = e ? o ?? t : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": r, ...d, children: [
    e ? /* @__PURE__ */ i("title", { id: r, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.851 14.547a1.13 1.13 0 0 0-1.083-.064 1.5 1.5 0 0 1-2.143-1.45 1.52 1.52 0 0 1 1.388-1.407c.258-.02.516.03.75.14a1.125 1.125 0 0 0 1.612-1.012V6.751A1.875 1.875 0 0 0 19.5 4.876h-3a3.76 3.76 0 0 0-2.48-3.532 3.758 3.758 0 0 0-5.01 3.258c-.01.093-.01.18-.01.274H6a1.875 1.875 0 0 0-1.875 1.875v2.625a3.76 3.76 0 0 0-2.733 1.183 3.75 3.75 0 0 0 2.733 6.317v2.625A1.875 1.875 0 0 0 6 21.376h13.5a1.875 1.875 0 0 0 1.875-1.875v-4.002a1.12 1.12 0 0 0-.524-.952m-1.726 4.579H6.375v-3.627a1.125 1.125 0 0 0-1.607-1.016 1.5 1.5 0 0 1-.755.143 1.52 1.52 0 0 1-1.388-1.4 1.5 1.5 0 0 1 2.14-1.456 1.126 1.126 0 0 0 1.61-1.016V7.126h4.004a1.125 1.125 0 0 0 1.015-1.608 1.5 1.5 0 0 1-.144-.755 1.52 1.52 0 0 1 1.401-1.387 1.5 1.5 0 0 1 1.456 2.138 1.124 1.124 0 0 0 1.016 1.612h4.002v2.25c-.093 0-.18 0-.271.01a3.75 3.75 0 0 0 .271 7.49z" })
  ] });
});
v.displayName = "PuzzlePiece";
export {
  v as PuzzlePiece
};
//# sourceMappingURL=PuzzlePiece.js.map
