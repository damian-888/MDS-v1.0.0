import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const c = s(), o = r ? e ?? c : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.625 9.75a1.125 1.125 0 1 1-2.25 0 6.375 6.375 0 1 0-12.75 0c0 2.344.71 3.028 1.533 3.821C7.98 14.364 9 15.348 9 17.625a3 3 0 0 0 3 3c.844 0 1.518-.347 2.133-1.091a1.125 1.125 0 0 1 1.734 1.432c-1.046 1.267-2.347 1.909-3.867 1.909a5.256 5.256 0 0 1-5.25-5.25c0-1.32-.434-1.74-1.154-2.437-.99-.951-2.221-2.139-2.221-5.438a8.625 8.625 0 0 1 17.25 0m-3.762 5.026a1.125 1.125 0 0 0-1.538.41.375.375 0 0 1-.7-.187c0-.713.342-1.206.9-1.95.6-.8 1.35-1.799 1.35-3.299a4.875 4.875 0 1 0-9.75 0 1.125 1.125 0 0 0 2.25 0 2.625 2.625 0 0 1 5.25 0c0 .713-.342 1.206-.9 1.95-.6.802-1.35 1.8-1.35 3.3a2.625 2.625 0 0 0 4.898 1.313 1.125 1.125 0 0 0-.41-1.537" })
  ] });
});
m.displayName = "Ear";
export {
  m as Ear
};
//# sourceMappingURL=Ear.js.map
