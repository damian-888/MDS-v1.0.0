import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const s = v(({
  size: l = "1em",
  title: r,
  titleId: e,
  ...i
}, d) => {
  const t = h(), o = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21.75 7.875h-1.875V6A1.875 1.875 0 0 0 18 4.125H4.875A1.875 1.875 0 0 0 3 6v1.875H1.5a1.125 1.125 0 0 0 0 2.25H3V12a1.875 1.875 0 0 0 1.875 1.875H18A1.875 1.875 0 0 0 19.875 12v-1.875h1.5v4.406l-9.14 2.606a1.88 1.88 0 0 0-1.36 1.8v2.813a1.125 1.125 0 1 0 2.25 0v-2.527l9.14-2.61a1.88 1.88 0 0 0 1.36-1.8V9.75a1.875 1.875 0 0 0-1.875-1.875m-4.125 3.75H5.25v-5.25h12.375z" })
  ] });
});
s.displayName = "PaintRoller";
export {
  s as PaintRoller
};
//# sourceMappingURL=PaintRoller.js.map
