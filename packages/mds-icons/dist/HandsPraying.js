import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const c = t(({
  size: l = "1em",
  title: a,
  titleId: i,
  ...o
}, e) => {
  const n = s(), r = a ? i ?? n : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m22.326 16.612-3.33-3.331-3.392-11.19A2.413 2.413 0 0 0 12 .751a2.415 2.415 0 0 0-3.605 1.34l-3.391 11.19-3.331 3.33a1.875 1.875 0 0 0 0 2.652l3.065 3.064a1.875 1.875 0 0 0 2.65 0l4.528-4.526q.043-.043.084-.088.04.046.083.088l4.527 4.526a1.875 1.875 0 0 0 2.651 0l3.065-3.064a1.875 1.875 0 0 0 0-2.652m-16.263 3.86-2.53-2.532 1.03-1.031 2.532 2.53zm4.812-5.588a1.86 1.86 0 0 1-.55 1.325l-1.637 1.637-2.53-2.531.64-.64a1.1 1.1 0 0 0 .28-.47l3.47-11.458a.167.167 0 0 1 .326.049zm4.453 2.979-1.654-1.654a1.86 1.86 0 0 1-.55-1.325V2.79a.167.167 0 0 1 .327-.049l3.469 11.46c.053.176.15.337.28.468l.713.713zm2.608 2.608-1.017-1.016 2.59-2.479.96.961z" })
  ] });
});
c.displayName = "HandsPraying";
export {
  c as HandsPraying
};
//# sourceMappingURL=HandsPraying.js.map
