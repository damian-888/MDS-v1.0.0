import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, t) => {
  const l = m(), e = r ? o ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M11.625 18a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 1 1 0-2.25h6.75A1.125 1.125 0 0 1 11.625 18M3.75 7.125h16.5a1.125 1.125 0 0 0 0-2.25H3.75a1.125 1.125 0 0 0 0 2.25m0 6H9a1.125 1.125 0 1 0 0-2.25H3.75a1.125 1.125 0 1 0 0 2.25m19.875.375c0 1.594-.893 3.146-2.655 4.614a14.2 14.2 0 0 1-2.467 1.642 1.13 1.13 0 0 1-1.006 0 14.2 14.2 0 0 1-2.467-1.642c-1.762-1.468-2.655-3.02-2.655-4.614A3.375 3.375 0 0 1 18 10.987a3.374 3.374 0 0 1 5.625 2.513m-2.25 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 1 0-2.25 0c0 1.615 2.142 3.228 3.375 3.965 1.232-.736 3.375-2.35 3.375-3.965" })
  ] });
});
c.displayName = "ListHeart";
export {
  c as ListHeart
};
//# sourceMappingURL=ListHeart.js.map
