import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const n = t(({
  size: h = "1em",
  title: a,
  titleId: o,
  ...d
}, l) => {
  const e = v(), r = a ? o ?? e : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.5 9.375h-.844L19.193 5.07a1.88 1.88 0 0 0-1.628-.945h-1.804L14.73 1.553A1.87 1.87 0 0 0 12.992.375h-1.984a1.87 1.87 0 0 0-1.74 1.178l-1.03 2.572H6.436a1.88 1.88 0 0 0-1.627.945L2.344 9.375H1.5a1.125 1.125 0 0 0 0 2.25h.375v7.125a1.875 1.875 0 0 0 1.875 1.875h2.625A1.875 1.875 0 0 0 8.25 18.75v-1.875h7.5v1.875a1.875 1.875 0 0 0 1.875 1.875h2.625a1.875 1.875 0 0 0 1.875-1.875v-7.125h.375a1.125 1.125 0 1 0 0-2.25m-11.239-6.75h1.478l.6 1.5H10.66zm-4.605 3.75h10.688l1.713 3H4.94zm-.656 12H4.125v-1.5H6zm13.875 0H18v-1.5h1.875zm0-3.75H4.125v-3h15.75z" })
  ] });
});
n.displayName = "Taxi";
export {
  n as Taxi
};
//# sourceMappingURL=Taxi.js.map
