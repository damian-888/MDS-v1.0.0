import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as c, useId as s } from "react";
const m = c(({
  size: r = "1em",
  title: l,
  titleId: e,
  ...i
}, d) => {
  const t = s(), a = l ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": a, ...i, children: [
    l ? /* @__PURE__ */ o("title", { id: a, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 4.125a8.6 8.6 0 0 0-3.166.602c-1.481-2.288-3.724-3.43-3.83-3.483a1.13 1.13 0 0 0-1.007 0c-.107.053-2.35 1.195-3.831 3.483A8.6 8.6 0 0 0 4.5 4.125 1.125 1.125 0 0 0 3.375 5.25V9a8.64 8.64 0 0 0 7.5 8.552v2.377l-2.872-1.435a1.125 1.125 0 0 0-1.006 2.012l4.5 2.25a1.13 1.13 0 0 0 1.006 0l4.5-2.25a1.126 1.126 0 1 0-1.006-2.012l-2.872 1.435v-2.377A8.64 8.64 0 0 0 20.625 9V5.25A1.125 1.125 0 0 0 19.5 4.125M12 3.557c.597.39 1.606 1.154 2.363 2.268A8.7 8.7 0 0 0 12 8.495a8.7 8.7 0 0 0-2.363-2.67c.757-1.114 1.766-1.878 2.363-2.268M5.625 9V6.474a6.385 6.385 0 0 1 5.25 6.276v2.525A6.386 6.386 0 0 1 5.625 9m12.75 0a6.386 6.386 0 0 1-5.25 6.275V12.75a6.386 6.386 0 0 1 5.25-6.276z" })
  ] });
});
m.displayName = "FlowerTulip";
export {
  m as FlowerTulip
};
//# sourceMappingURL=FlowerTulip.js.map
