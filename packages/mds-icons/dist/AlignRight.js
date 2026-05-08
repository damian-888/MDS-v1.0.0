import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: i,
  titleId: a,
  ...e
}, h) => {
  const l = m(), o = i ? a ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: h, "aria-labelledby": o, ...e, children: [
    i ? /* @__PURE__ */ d("title", { id: o, children: i }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 3.75v16.5a1.125 1.125 0 1 1-2.25 0V3.75a1.125 1.125 0 1 1 2.25 0M17.625 6v3.375a1.875 1.875 0 0 1-1.875 1.875H7.5a1.875 1.875 0 0 1-1.875-1.875V6A1.875 1.875 0 0 1 7.5 4.125h8.25A1.875 1.875 0 0 1 17.625 6m-2.25.375h-7.5V9h7.5zm2.25 8.25V18a1.875 1.875 0 0 1-1.875 1.875h-12A1.875 1.875 0 0 1 1.875 18v-3.375A1.875 1.875 0 0 1 3.75 12.75h12a1.875 1.875 0 0 1 1.875 1.875m-2.25.375H4.125v2.625h11.25z" })
  ] });
});
s.displayName = "AlignRight";
export {
  s as AlignRight
};
//# sourceMappingURL=AlignRight.js.map
