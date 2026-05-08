import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: o = "1em",
  title: a,
  titleId: e,
  ...i
}, t) => {
  const h = s(), r = a ? e ?? h : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.875 9a1.125 1.125 0 0 1-1.125 1.125h-1.125v1.125a1.125 1.125 0 1 1-2.25 0v-1.125H17.25a1.125 1.125 0 0 1 0-2.25h1.125V6.75a1.125 1.125 0 0 1 2.25 0v1.125h1.125A1.125 1.125 0 0 1 22.875 9M13.5 5.625h.375V6a1.125 1.125 0 0 0 2.25 0v-.375h.375a1.125 1.125 0 1 0 0-2.25h-.375V3a1.125 1.125 0 1 0-2.25 0v.375H13.5a1.125 1.125 0 0 0 0 2.25m7.107 8.473a1.13 1.13 0 0 1 .205 1.118A9.374 9.374 0 1 1 8.784 3.188a1.125 1.125 0 0 1 1.49 1.275q-.15.76-.15 1.537a7.884 7.884 0 0 0 9.41 7.726 1.13 1.13 0 0 1 1.073.372m-2.795 2.027a10.137 10.137 0 0 1-9.937-9.937 7.125 7.125 0 1 0 9.937 9.937" })
  ] });
});
v.displayName = "MoonStars";
export {
  v as MoonStars
};
//# sourceMappingURL=MoonStars.js.map
