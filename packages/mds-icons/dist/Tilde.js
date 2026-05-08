import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as c, useId as s } from "react";
const h = c(({
  size: d = "1em",
  title: r,
  titleId: o,
  ...l
}, a) => {
  const t = s(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.126 12.479c-1.427 1.774-2.853 2.718-4.36 2.873a4 4 0 0 1-.454.023c-1.95 0-3.577-1.324-5.024-2.503-1.335-1.087-2.595-2.113-3.82-1.985-.868.093-1.825.78-2.843 2.045a1.125 1.125 0 0 1-1.753-1.406C4.3 9.75 5.726 8.813 7.232 8.649c2.157-.227 3.921 1.211 5.478 2.48 1.335 1.087 2.595 2.113 3.82 1.985.869-.094 1.825-.78 2.843-2.046a1.125 1.125 0 1 1 1.753 1.407z" })
  ] });
});
h.displayName = "Tilde";
export {
  h as Tilde
};
//# sourceMappingURL=Tilde.js.map
