import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const s = c(({
  size: e = "1em",
  title: l,
  titleId: a,
  ...d
}, t) => {
  const i = m(), r = l ? a ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: t, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ o("title", { id: r, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m23.296 3.703-3-3a1.125 1.125 0 0 0-1.739 1.406l-4.776 3.587-3.5.7c-.217.043-.417.15-.575.307l-7.812 7.811a2.624 2.624 0 0 0 0 3.713l3.878 3.878a2.624 2.624 0 0 0 3.713 0l7.811-7.81c.157-.158.264-.358.308-.576l.699-3.501 3.584-4.781a1.125 1.125 0 0 0 1.406-1.74zM10.5 17.905 6.094 13.5 9 10.593l4.406 4.406zM7.63 20.624a.37.37 0 0 1-.266-.11l-3.878-3.878a.375.375 0 0 1 0-.53L4.5 15.092l4.406 4.406-1.012 1.015a.38.38 0 0 1-.265.11m8.718-11.55c-.1.135-.17.29-.203.455l-.675 3.415-.469.461L10.594 9l.469-.469 3.415-.682c.165-.033.32-.103.455-.204l5.219-3.915.12.121z" })
  ] });
});
s.displayName = "BeerBottle";
export {
  s as BeerBottle
};
//# sourceMappingURL=BeerBottle.js.map
