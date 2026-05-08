import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const v = t(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...o
}, i) => {
  const h = s(), d = a ? e ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": d, ...o, children: [
    a ? /* @__PURE__ */ l("title", { id: d, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M5.333 2.993a1.13 1.13 0 0 0-.833-.368A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.125 1.125 0 0 0 .832-1.882zm-.458 16.132V5.835l12.082 13.29zM21.375 4.5v11a1.125 1.125 0 1 1-2.25 0V9.376h-5.467a1.125 1.125 0 0 1 0-2.25h5.467v-2.25h-1.5a1.125 1.125 0 1 1-2.25 0H9.568a1.125 1.125 0 0 1 0-2.25h5.807V2.25a1.125 1.125 0 1 1 2.25 0v.375H19.5A1.875 1.875 0 0 1 21.375 4.5" })
  ] });
});
v.displayName = "CalendarSlash";
export {
  v as CalendarSlash
};
//# sourceMappingURL=CalendarSlash.js.map
