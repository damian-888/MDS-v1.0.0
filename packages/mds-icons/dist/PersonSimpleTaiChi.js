import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: i,
  titleId: o,
  ...l
}, d) => {
  const n = m(), a = i ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: d, "aria-labelledby": a, ...l, children: [
    i ? /* @__PURE__ */ e("title", { id: a, children: i }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 7.875a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75m0-4.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m9.375 6.75a1.125 1.125 0 0 1-1.125 1.125h-7.125v1.508l4.568 1.96a1.12 1.12 0 0 1 .682 1.032v4.5a1.125 1.125 0 1 1-2.25 0v-3.758l-3.907-1.675-6.968 6.27a1.125 1.125 0 0 1-1.5-1.673l7.125-6.415V11.25H3.75a1.125 1.125 0 1 1 0-2.25h16.5a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "PersonSimpleTaiChi";
export {
  s as PersonSimpleTaiChi
};
//# sourceMappingURL=PersonSimpleTaiChi.js.map
