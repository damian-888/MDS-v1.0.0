import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const s = h(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...i
}, l) => {
  const t = v(), d = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.875 7.5a4.13 4.13 0 0 0-4.125-4.125H4.5a4.125 4.125 0 0 0-1.875 7.797v7.578A1.875 1.875 0 0 0 4.5 20.625h14.25a1.875 1.875 0 0 0 1.875-1.875v-7.578a4.13 4.13 0 0 0 2.25-3.672m-18 4.06A1.125 1.125 0 0 0 4.5 9.374a1.875 1.875 0 1 1 0-3.75h8.625a1.875 1.875 0 1 1 0 3.75 1.125 1.125 0 0 0-.375 2.184v6.816H4.875zM18.75 9.374a1.125 1.125 0 0 0-.375 2.184v6.816H15v-7.203a4.12 4.12 0 0 0 1.797-5.547h1.953a1.875 1.875 0 1 1 0 3.75" })
  ] });
});
s.displayName = "Bread";
export {
  s as Bread
};
//# sourceMappingURL=Bread.js.map
