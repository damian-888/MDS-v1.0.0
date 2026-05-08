import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, t) => {
  const l = s(), o = a ? e ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 19.125h-4.125v-1.5a6.76 6.76 0 0 0 6.75-6.75 3 3 0 0 0-6 0 .75.75 0 0 1-.75.75V5.25a4.125 4.125 0 0 0-8.25 0v2.625a.75.75 0 0 1-.75-.75 3 3 0 1 0-6 0 6.76 6.76 0 0 0 6.75 6.75v5.25H3.75a1.125 1.125 0 1 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25M9 11.625H7.875a4.504 4.504 0 0 1-4.5-4.5.75.75 0 0 1 1.5 0 3 3 0 0 0 3 3H9A1.125 1.125 0 0 0 10.125 9V5.25a1.875 1.875 0 1 1 3.75 0v7.5A1.125 1.125 0 0 0 15 13.875h1.125a3 3 0 0 0 3-3 .75.75 0 1 1 1.5 0 4.504 4.504 0 0 1-4.5 4.5H15a1.125 1.125 0 0 0-1.125 1.125v2.625h-3.75V12.75A1.125 1.125 0 0 0 9 11.625" })
  ] });
});
v.displayName = "Cactus";
export {
  v as Cactus
};
//# sourceMappingURL=Cactus.js.map
