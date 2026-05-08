import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...l
}, a) => {
  const n = h(), o = r ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h14.25zm-9.937-9.5A1.125 1.125 0 0 1 9.5 8.062l2.25-1.5A1.125 1.125 0 0 1 13.5 7.5v9a1.125 1.125 0 1 1-2.25 0V9.602l-.5.335a1.124 1.124 0 0 1-1.562-.313" })
  ] });
});
s.displayName = "NumberSquareOne";
export {
  s as NumberSquareOne
};
//# sourceMappingURL=NumberSquareOne.js.map
