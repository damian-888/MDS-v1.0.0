import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const g = m(({
  size: a = "1em",
  title: l,
  titleId: i,
  ...d
}, e) => {
  const n = s(), o = l ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": o, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: o, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M22.868 18.349a1.87 1.87 0 0 0-.75-1.351l-3.087-2.45 1.134-1.134a4.1 4.1 0 0 0 1.136-3.694 9.7 9.7 0 0 0-3.451-5.647 9.96 9.96 0 0 0-6.364-2.197 9.777 9.777 0 0 0-9.611 9.611 9.95 9.95 0 0 0 2.196 6.361 9.7 9.7 0 0 0 5.647 3.45 4.09 4.09 0 0 0 3.693-1.134l1.136-1.132 2.45 3.09a1.87 1.87 0 0 0 1.35.75c.052 0 .104.006.156.006.497 0 .974-.198 1.325-.55l2.497-2.497a1.87 1.87 0 0 0 .543-1.482m-18.743-6.83C4.18 7.5 7.5 4.182 11.518 4.126a7.68 7.68 0 0 1 6.112 2.906l-10.599 10.6a7.68 7.68 0 0 1-2.906-6.113m14.41 8.92-3.01-3.797a1.13 1.13 0 0 0-.816-.422h-.064a1.12 1.12 0 0 0-.796.329l-2.028 2.024a1.85 1.85 0 0 1-1.664.519 7 7 0 0 1-1.095-.312l9.717-9.717q.2.535.312 1.095a1.85 1.85 0 0 1-.52 1.664l-2.027 2.028a1.126 1.126 0 0 0 .094 1.677l3.8 3.01z" })
  ] });
});
g.displayName = "PingPong";
export {
  g as PingPong
};
//# sourceMappingURL=PingPong.js.map
