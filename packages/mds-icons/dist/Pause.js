import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...i
}, l) => {
  const h = s(), o = r ? a ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M18.75 2.625H15A1.875 1.875 0 0 0 13.125 4.5v15A1.875 1.875 0 0 0 15 21.375h3.75a1.875 1.875 0 0 0 1.875-1.875v-15a1.875 1.875 0 0 0-1.875-1.875m-.375 16.5h-3V4.875h3zM9 2.625H5.25A1.875 1.875 0 0 0 3.375 4.5v15a1.875 1.875 0 0 0 1.875 1.875H9a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 9 2.625m-.375 16.5h-3V4.875h3z" })
  ] });
});
m.displayName = "Pause";
export {
  m as Pause
};
//# sourceMappingURL=Pause.js.map
