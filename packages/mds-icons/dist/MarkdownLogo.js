import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const m = v(({
  size: o = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const n = h(), r = a ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M21.75 4.125H2.25A1.875 1.875 0 0 0 .375 6v12a1.875 1.875 0 0 0 1.875 1.875h19.5A1.875 1.875 0 0 0 23.625 18V6a1.875 1.875 0 0 0-1.875-1.875m-.375 13.5H2.625V6.375h18.75zM4.5 13.875v-3.75a1.125 1.125 0 0 1 1.92-.796l1.83 1.827 1.83-1.83a1.125 1.125 0 0 1 1.92.799v3.75a1.125 1.125 0 1 1-2.25 0v-1.031l-.704.705a1.125 1.125 0 0 1-1.594 0l-.702-.705v1.031a1.125 1.125 0 0 1-2.25 0m9.247-2.203a1.123 1.123 0 0 1 1.581-.175l.047.037v-1.409a1.125 1.125 0 1 1 2.25 0v1.406l.047-.037a1.125 1.125 0 0 1 1.406 1.757l-1.875 1.5a1.125 1.125 0 0 1-1.406 0l-1.875-1.5a1.125 1.125 0 0 1-.175-1.58" })
  ] });
});
m.displayName = "MarkdownLogo";
export {
  m as MarkdownLogo
};
//# sourceMappingURL=MarkdownLogo.js.map
