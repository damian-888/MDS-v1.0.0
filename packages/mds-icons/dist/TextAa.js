import { jsxs as c, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const t = m(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M8.518 4.771a1.125 1.125 0 0 0-2.036 0l-6 12.75a1.125 1.125 0 0 0 2.035.959l1.461-3.104h7.043l1.46 3.104a1.125 1.125 0 1 0 2.037-.959zm-3.48 8.355L7.5 7.891l2.463 5.234zm13.712-5.25c-1.299 0-2.323.361-3.043 1.076a1.125 1.125 0 1 0 1.585 1.594c.281-.282.774-.424 1.458-.424 1.031 0 1.875.673 1.875 1.5v.411a4.4 4.4 0 0 0-1.875-.407c-2.275 0-4.125 1.681-4.125 3.75s1.85 3.75 4.125 3.75a4.4 4.4 0 0 0 2.062-.505 1.125 1.125 0 0 0 2.063-.62v-6.376c0-2.068-1.85-3.75-4.125-3.75m0 9c-1.032 0-1.875-.674-1.875-1.5 0-.827.843-1.5 1.875-1.5 1.031 0 1.875.673 1.875 1.5 0 .826-.844 1.5-1.875 1.5" })
  ] });
});
s.displayName = "TextAa";
export {
  s as TextAa
};
//# sourceMappingURL=TextAa.js.map
