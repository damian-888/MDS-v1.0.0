import { jsxs as m, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const t = s(), l = r ? o ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.164 4.84a10.125 10.125 0 1 0 0 14.32 10.067 10.067 0 0 0 0-14.32M17.57 6.434q.454.452.83.972l-2.556 3.009L13.66 4.3a7.83 7.83 0 0 1 3.912 2.13zm-11.142 0a7.82 7.82 0 0 1 4.791-2.269l1.328 3.718-6.387-1.17q.131-.142.27-.282zM4.5 14.41a7.92 7.92 0 0 1 .319-5.653l3.885.713zm1.927 3.16a8 8 0 0 1-.826-.975l2.555-3.009 2.185 6.114a7.83 7.83 0 0 1-3.911-2.13zm3.408-5.964 1.424-1.673 2.162.395.738 2.068-1.422 1.673-2.162-.395zm7.734 5.964a7.83 7.83 0 0 1-4.792 2.268l-1.325-3.712 6.388 1.166q-.13.138-.268.278zm-2.273-3.038 4.204-4.94a7.92 7.92 0 0 1-.32 5.653z" })
  ] });
});
h.displayName = "Aperture";
export {
  h as Aperture
};
//# sourceMappingURL=Aperture.js.map
