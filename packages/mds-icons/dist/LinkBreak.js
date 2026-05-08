import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: a,
  titleId: i,
  ...o
}, d) => {
  const n = s(), l = a ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": l, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: l, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.356 5.644a2.625 2.625 0 0 0-3.704-.009l-1.088 1.141a1.125 1.125 0 1 1-1.628-1.552l1.095-1.152.02-.02a4.875 4.875 0 1 1 6.893 6.895l-.018.019-1.152 1.098a1.125 1.125 0 0 1-1.553-1.628l1.14-1.088a2.625 2.625 0 0 0-.005-3.704m-7.92 11.58-1.088 1.14a2.625 2.625 0 1 1-3.713-3.712l1.141-1.088a1.125 1.125 0 0 0-1.552-1.628l-1.152 1.095-.02.02a4.875 4.875 0 1 0 6.895 6.893l.019-.018 1.098-1.152a1.125 1.125 0 1 0-1.628-1.553zm9.814-3.349H18a1.125 1.125 0 1 0 0 2.25h2.25a1.125 1.125 0 0 0 0-2.25m-16.5-3.75H6a1.125 1.125 0 0 0 0-2.25H3.75a1.125 1.125 0 0 0 0 2.25M15 16.875A1.125 1.125 0 0 0 13.875 18v2.25a1.125 1.125 0 0 0 2.25 0V18A1.125 1.125 0 0 0 15 16.875m-6-9.75A1.125 1.125 0 0 0 10.125 6V3.75a1.125 1.125 0 0 0-2.25 0V6A1.125 1.125 0 0 0 9 7.125" })
  ] });
});
h.displayName = "LinkBreak";
export {
  h as LinkBreak
};
//# sourceMappingURL=LinkBreak.js.map
