import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const c = n(), o = r ? d ?? c : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ l("title", { id: o, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M8.625 8.625A1.125 1.125 0 0 1 9.75 7.5h5.625a1.125 1.125 0 0 1 0 2.25H9.75a1.125 1.125 0 0 1-1.125-1.125M9.75 13.5h5.625a1.125 1.125 0 1 0 0-2.25H9.75a1.125 1.125 0 1 0 0 2.25M22.125 18a3.375 3.375 0 0 1-3.375 3.375H8.25A3.375 3.375 0 0 1 4.875 18V6a1.125 1.125 0 0 0-2.25 0c0 .35.314.61.317.613L2.925 6.6a1.125 1.125 0 1 1-1.35 1.8c-.123-.092-1.2-.942-1.2-2.4A3.375 3.375 0 0 1 3.75 2.625H16.5A3.375 3.375 0 0 1 19.875 6v9.375h.375c.243 0 .48.079.675.225.123.092 1.2.942 1.2 2.4M8.683 16.144a1.125 1.125 0 0 1 1.067-.769h7.875V6A1.125 1.125 0 0 0 16.5 4.875H6.932c.128.361.193.742.193 1.125v12a1.125 1.125 0 0 0 2.25 0c0-.336-.297-.598-.3-.6a1.125 1.125 0 0 1-.392-1.256M19.875 18a.7.7 0 0 0-.116-.375h-8.157q.025.187.025.375c0 .383-.065.764-.193 1.125h7.316A1.125 1.125 0 0 0 19.875 18" })
  ] });
});
s.displayName = "Scroll";
export {
  s as Scroll
};
//# sourceMappingURL=Scroll.js.map
