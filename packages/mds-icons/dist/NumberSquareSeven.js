import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: e,
  titleId: i,
  ...l
}, a) => {
  const n = m(), o = e ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    e ? /* @__PURE__ */ d("title", { id: o, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zM8.625 8.25A1.125 1.125 0 0 1 9.75 7.125h4.5a1.125 1.125 0 0 1 1.057 1.51l-3 8.25a1.126 1.126 0 0 1-2.114-.77l2.451-6.74H9.75A1.125 1.125 0 0 1 8.625 8.25" })
  ] });
});
s.displayName = "NumberSquareSeven";
export {
  s as NumberSquareSeven
};
//# sourceMappingURL=NumberSquareSeven.js.map
