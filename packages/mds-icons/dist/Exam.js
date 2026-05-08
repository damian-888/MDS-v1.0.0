import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const v = m(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const h = n(), r = a ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v15a1.125 1.125 0 0 0 1.628 1.006L6 20.008l2.497 1.248a1.13 1.13 0 0 0 1.006 0L12 20.008l2.497 1.248a1.13 1.13 0 0 0 1.006 0L18 20.008l2.497 1.248a1.124 1.124 0 0 0 1.628-1.006v-15a1.875 1.875 0 0 0-1.875-1.875m-.375 15.054-1.372-.685a1.13 1.13 0 0 0-1.006 0L15 18.992l-2.497-1.248a1.13 1.13 0 0 0-1.006 0L9 18.992l-2.497-1.248a1.13 1.13 0 0 0-1.006 0l-1.372.685V5.625h15.75zM5.872 16.006a1.125 1.125 0 0 0 1.509-.503L7.633 15h3.484l.252.503a1.126 1.126 0 1 0 2.012-1.006l-3-6a1.125 1.125 0 0 0-2.012 0l-3 6a1.125 1.125 0 0 0 .503 1.509m4.12-3.256H8.758l.617-1.235zM13.5 12a1.125 1.125 0 0 1 1.125-1.125H15V10.5a1.125 1.125 0 1 1 2.25 0v.375h.375a1.125 1.125 0 1 1 0 2.25h-.375v.375a1.125 1.125 0 1 1-2.25 0v-.375h-.375A1.125 1.125 0 0 1 13.5 12" })
  ] });
});
v.displayName = "Exam";
export {
  v as Exam
};
//# sourceMappingURL=Exam.js.map
