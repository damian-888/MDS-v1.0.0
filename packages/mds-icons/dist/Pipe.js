import { jsxs as l, jsx as v } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: h = "1em",
  title: a,
  titleId: e,
  ...i
}, o) => {
  const d = n(), r = a ? e ?? d : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: o, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ v("title", { id: r, children: a }) : null,
    /* @__PURE__ */ v("path", { fill: "currentColor", d: "M21.75 9.375h-1.5v-3.75h1.5a1.125 1.125 0 0 0 0-2.25h-1.875a1.88 1.88 0 0 0-1.5-.75h-2.25a1.88 1.88 0 0 0-1.5.75H13.5A10.136 10.136 0 0 0 3.375 13.5v1.125a1.88 1.88 0 0 0-.75 1.5v2.25a1.88 1.88 0 0 0 .75 1.5v1.875a1.125 1.125 0 0 0 2.25 0v-1.5h3.75v1.5a1.125 1.125 0 0 0 2.25 0v-1.875a1.88 1.88 0 0 0 .75-1.5v-2.25a1.88 1.88 0 0 0-.75-1.5V13.5a1.875 1.875 0 0 1 1.875-1.875h1.125a1.88 1.88 0 0 0 1.5.75h2.25a1.88 1.88 0 0 0 1.5-.75h1.875a1.125 1.125 0 1 0 0-2.25M10.125 16.5V18h-5.25v-1.5zm-.75-3v.75h-3.75v-.75A7.883 7.883 0 0 1 13.5 5.625h.75v3.75h-.75A4.13 4.13 0 0 0 9.375 13.5M16.5 4.875H18v5.25h-1.5z" })
  ] });
});
s.displayName = "Pipe";
export {
  s as Pipe
};
//# sourceMappingURL=Pipe.js.map
