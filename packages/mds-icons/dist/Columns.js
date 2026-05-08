import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...l
}, n) => {
  const a = s(), d = o ? i ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: n, "aria-labelledby": d, ...l, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M9.375 2.625H6A1.875 1.875 0 0 0 4.125 4.5v15A1.875 1.875 0 0 0 6 21.375h3.375A1.875 1.875 0 0 0 11.25 19.5v-15a1.875 1.875 0 0 0-1.875-1.875M9 19.125H6.375V4.875H9zm9-16.5h-3.375A1.875 1.875 0 0 0 12.75 4.5v15a1.875 1.875 0 0 0 1.875 1.875H18a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 18 2.625m-.375 16.5H15V4.875h2.625z" })
  ] });
});
h.displayName = "Columns";
export {
  h as Columns
};
//# sourceMappingURL=Columns.js.map
