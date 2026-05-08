import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...d
}, h) => {
  const i = s(), a = o ? l ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: h, "aria-labelledby": a, ...d, children: [
    o ? /* @__PURE__ */ e("title", { id: a, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M11.625 2.625h-2.25A1.875 1.875 0 0 0 7.5 4.5v15a1.875 1.875 0 0 0 1.875 1.875h2.25A1.875 1.875 0 0 0 13.5 19.5v-15a1.875 1.875 0 0 0-1.875-1.875m-.375 16.5h-1.5V4.875h1.5zm7.5-16.5H16.5A1.875 1.875 0 0 0 14.625 4.5v15a1.875 1.875 0 0 0 1.875 1.875h2.25a1.875 1.875 0 0 0 1.875-1.875v-15a1.875 1.875 0 0 0-1.875-1.875m-.375 16.5h-1.5V4.875h1.5zM6.375 12a1.125 1.125 0 0 1-1.125 1.125H4.5v.75a1.125 1.125 0 0 1-2.25 0v-.75H1.5a1.125 1.125 0 1 1 0-2.25h.75v-.75a1.125 1.125 0 0 1 2.25 0v.75h.75A1.125 1.125 0 0 1 6.375 12" })
  ] });
});
v.displayName = "ColumnsPlusLeft";
export {
  v as ColumnsPlusLeft
};
//# sourceMappingURL=ColumnsPlusLeft.js.map
