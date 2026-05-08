import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: o = "1em",
  title: h,
  titleId: l,
  ...a
}, d) => {
  const e = s(), r = h ? l ?? e : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": h ? void 0 : !0, role: h ? "img" : void 0, ref: d, "aria-labelledby": r, ...a, children: [
    h ? /* @__PURE__ */ i("title", { id: r, children: h }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M7.5 2.625H5.25A1.875 1.875 0 0 0 3.375 4.5v15a1.875 1.875 0 0 0 1.875 1.875H7.5A1.875 1.875 0 0 0 9.375 19.5v-15A1.875 1.875 0 0 0 7.5 2.625m-.375 16.5h-1.5V4.875h1.5zm7.5-16.5h-2.25A1.875 1.875 0 0 0 10.5 4.5v15a1.875 1.875 0 0 0 1.875 1.875h2.25A1.875 1.875 0 0 0 16.5 19.5v-15a1.875 1.875 0 0 0-1.875-1.875m-.375 16.5h-1.5V4.875h1.5zM23.625 12a1.125 1.125 0 0 1-1.125 1.125h-.75v.75a1.125 1.125 0 1 1-2.25 0v-.75h-.75a1.125 1.125 0 1 1 0-2.25h.75v-.75a1.125 1.125 0 1 1 2.25 0v.75h.75A1.125 1.125 0 0 1 23.625 12" })
  ] });
});
v.displayName = "ColumnsPlusRight";
export {
  v as ColumnsPlusRight
};
//# sourceMappingURL=ColumnsPlusRight.js.map
