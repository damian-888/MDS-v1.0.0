import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...e
}, h) => {
  const l = s(), d = a ? o ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": d, ...e, children: [
    a ? /* @__PURE__ */ i("title", { id: d, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.75 4.125H1.5A1.125 1.125 0 0 0 .375 5.25V19.5a1.125 1.125 0 1 0 2.25 0v-1.125h1.5V19.5a1.125 1.125 0 0 0 2.25 0v-1.125h1.5V19.5a1.125 1.125 0 0 0 2.25 0v-1.125h1.5V19.5a1.125 1.125 0 1 0 2.25 0v-1.125h7.875a1.875 1.875 0 0 0 1.875-1.875V6a1.875 1.875 0 0 0-1.875-1.875m-.375 12H2.625v-9.75h18.75zM16.5 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5m0-5.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.5 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5m0-5.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" })
  ] });
});
m.displayName = "GraphicsCard";
export {
  m as GraphicsCard
};
//# sourceMappingURL=GraphicsCard.js.map
