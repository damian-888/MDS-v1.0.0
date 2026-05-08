import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as f } from "react";
const m = n(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...o
}, d) => {
  const l = f(), h = a ? e ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": h, ...o, children: [
    a ? /* @__PURE__ */ i("title", { id: h, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M23.625 12a1.125 1.125 0 0 1-1.125 1.125h-1.256a4.884 4.884 0 0 1-4.744 3.75h-3.375v1.5H15a3.375 3.375 0 0 1 3.375 3.375 1.125 1.125 0 1 1-2.25 0A1.125 1.125 0 0 0 15 20.625h-1.875v1.125a1.125 1.125 0 1 1-2.25 0v-1.125H9a1.125 1.125 0 0 0-1.125 1.125 1.125 1.125 0 0 1-2.25 0A3.375 3.375 0 0 1 9 18.375h1.875v-1.5H7.5a4.88 4.88 0 0 1-4.744-3.75H1.5a1.125 1.125 0 1 1 0-2.25h2.25A1.125 1.125 0 0 1 4.875 12 2.625 2.625 0 0 0 7.5 14.625h9A2.625 2.625 0 0 0 19.125 12a1.125 1.125 0 0 1 1.125-1.125h2.25A1.125 1.125 0 0 1 23.625 12m-16.798.469a1.88 1.88 0 0 1-.43-1.5l1.272-8.25a1.87 1.87 0 0 1 1.855-1.594h4.952a1.87 1.87 0 0 1 1.855 1.594l1.272 8.25a1.875 1.875 0 0 1-1.853 2.156h-7.5a1.87 1.87 0 0 1-1.423-.656m1.86-1.594h6.625l-1.156-7.5H9.844z" })
  ] });
});
m.displayName = "OfficeChair";
export {
  m as OfficeChair
};
//# sourceMappingURL=OfficeChair.js.map
