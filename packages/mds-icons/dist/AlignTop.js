import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const m = h(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, l) => {
  const n = v(), i = o ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": i, ...e, children: [
    o ? /* @__PURE__ */ a("title", { id: i, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21.375 3.75a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 0 1 0-2.25h16.5a1.125 1.125 0 0 1 1.125 1.125m-1.5 4.5v8.25A1.875 1.875 0 0 1 18 18.375h-3.375A1.875 1.875 0 0 1 12.75 16.5V8.25a1.875 1.875 0 0 1 1.875-1.875H18a1.875 1.875 0 0 1 1.875 1.875m-2.25.375H15v7.5h2.625zM11.25 8.25v12a1.875 1.875 0 0 1-1.875 1.875H6a1.875 1.875 0 0 1-1.875-1.875v-12A1.875 1.875 0 0 1 6 6.375h3.375A1.875 1.875 0 0 1 11.25 8.25M9 8.625H6.375v11.25H9z" })
  ] });
});
m.displayName = "AlignTop";
export {
  m as AlignTop
};
//# sourceMappingURL=AlignTop.js.map
