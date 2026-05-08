import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...h
}, l) => {
  const t = s(), d = o ? i ?? t : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": d, ...h, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.5 12.75h-15a1.875 1.875 0 0 0-1.875 1.875V18A1.875 1.875 0 0 0 4.5 19.875h15A1.875 1.875 0 0 0 21.375 18v-3.375A1.875 1.875 0 0 0 19.5 12.75m-.375 4.875H4.875V15h14.25zm.375-13.5h-15A1.875 1.875 0 0 0 2.625 6v3.375A1.875 1.875 0 0 0 4.5 11.25h15a1.875 1.875 0 0 0 1.875-1.875V6A1.875 1.875 0 0 0 19.5 4.125M19.125 9H4.875V6.375h14.25z" })
  ] });
});
m.displayName = "Rows";
export {
  m as Rows
};
//# sourceMappingURL=Rows.js.map
