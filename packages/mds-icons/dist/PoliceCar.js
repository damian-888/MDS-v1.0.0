import { jsxs as t, jsx as h } from "react/jsx-runtime";
import { forwardRef as v, useId as m } from "react";
const n = v(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, d) => {
  const l = m(), o = r ? e ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ h("title", { id: o, children: r }) : null,
    /* @__PURE__ */ h("path", { fill: "currentColor", d: "M22.5 9.375h-.844L19.193 5.07a1.88 1.88 0 0 0-1.628-.945H6.435a1.88 1.88 0 0 0-1.627.945L2.344 9.375H1.5a1.125 1.125 0 0 0 0 2.25h.375v7.125a1.875 1.875 0 0 0 1.875 1.875h2.625A1.875 1.875 0 0 0 8.25 18.75v-1.875h7.5v1.875a1.875 1.875 0 0 0 1.875 1.875h2.625a1.875 1.875 0 0 0 1.875-1.875v-7.125h.375a1.125 1.125 0 1 0 0-2.25m-15.844-3h10.688l1.713 3H4.94zm-.656 12H4.125v-1.5H6zm13.875 0H18v-1.5h1.875zm0-3.75H4.125v-3h15.75zM8.625 1.875A1.125 1.125 0 0 1 9.75.75h4.5a1.125 1.125 0 1 1 0 2.25h-4.5a1.125 1.125 0 0 1-1.125-1.125" })
  ] });
});
n.displayName = "PoliceCar";
export {
  n as PoliceCar
};
//# sourceMappingURL=PoliceCar.js.map
