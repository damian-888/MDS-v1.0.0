import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...o
}, t) => {
  const i = m(), l = a ? d ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": l, ...o, children: [
    a ? /* @__PURE__ */ e("title", { id: l, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M14.762 18.349a7.125 7.125 0 0 1 0-12.698 1.125 1.125 0 0 0 0-2.003 9.375 9.375 0 1 0 0 16.704 1.126 1.126 0 0 0 0-2.003m-4.262.776a7.125 7.125 0 1 1 0-14.25q.641 0 1.272.112a9.39 9.39 0 0 0 0 14.026q-.63.112-1.272.112m12.82-8.156-2.276-.985-.198-2.57a1.125 1.125 0 0 0-1.99-.63l-1.594 1.93-2.368-.587a1.125 1.125 0 0 0-1.24 1.662L14.958 12l-1.301 2.21a1.125 1.125 0 0 0 1.24 1.663l2.367-.586 1.594 1.93a1.124 1.124 0 0 0 1.99-.63l.198-2.571 2.275-.985a1.126 1.126 0 0 0 0-2.062m-3.79 1.251a1.13 1.13 0 0 0-.677.946l-.036.469-.27-.322a1.13 1.13 0 0 0-1.137-.376l-.458.113.281-.475a1.13 1.13 0 0 0 0-1.142l-.281-.476.458.114a1.13 1.13 0 0 0 1.138-.375l.269-.326.036.468a1.13 1.13 0 0 0 .676.946l.506.219z" })
  ] });
});
c.displayName = "StarAndCrescent";
export {
  c as StarAndCrescent
};
//# sourceMappingURL=StarAndCrescent.js.map
