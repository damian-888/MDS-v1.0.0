import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const t = s(), l = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...o, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21.924 10.359 6.168 1.369a1.875 1.875 0 0 0-2.686 2.255L6.312 12l-2.83 8.378a1.875 1.875 0 0 0 2.687 2.255l.009-.005 15.75-9.007a1.875 1.875 0 0 0 0-3.263zm-16 9.823 2.383-7.056h5.192a1.125 1.125 0 1 0 0-2.25H8.308L5.923 3.82l14.32 8.172z" })
  ] });
});
m.displayName = "PaperPlaneRight";
export {
  m as PaperPlaneRight
};
//# sourceMappingURL=PaperPlaneRight.js.map
