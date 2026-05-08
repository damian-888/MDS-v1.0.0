import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const s = c(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, l) => {
  const t = m(), a = o ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 10.125a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75m0 7.5a2.625 2.625 0 1 1 0-5.249 2.625 2.625 0 0 1 0 5.249m8.134-5.501-2.79-7.89a5.625 5.625 0 0 0-10.648-.109L3.93 11.949a8.625 8.625 0 1 0 16.204.175M12 21.375a6.38 6.38 0 0 1-5.962-8.639c0-.009.007-.017.01-.024l2.77-7.837a3.375 3.375 0 0 1 6.39.073l.008.025 2.796 7.902a6.376 6.376 0 0 1-6.012 8.5" })
  ] });
});
s.displayName = "Avocado";
export {
  s as Avocado
};
//# sourceMappingURL=Avocado.js.map
