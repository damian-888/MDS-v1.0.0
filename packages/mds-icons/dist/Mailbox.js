import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: o = "1em",
  title: a,
  titleId: d,
  ...e
}, l) => {
  const h = v(), r = a ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ i("title", { id: r, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M9.375 13.875A1.125 1.125 0 0 1 8.25 15H6a1.125 1.125 0 1 1 0-2.25h2.25a1.125 1.125 0 0 1 1.125 1.125m13.5-3V16.5A1.875 1.875 0 0 1 21 18.375h-7.875V21a1.125 1.125 0 1 1-2.25 0v-2.625H3A1.875 1.875 0 0 1 1.125 16.5v-5.625a6.007 6.007 0 0 1 6-6h7.5V2.25a1.125 1.125 0 0 1 1.125-1.125h3a1.125 1.125 0 0 1 0 2.25h-1.875v1.5a6.006 6.006 0 0 1 6 6m-12 5.25v-5.25a3.75 3.75 0 0 0-7.5 0v5.25zm9.75-5.25a3.75 3.75 0 0 0-3.75-3.75V13.5a1.125 1.125 0 1 1-2.25 0V7.125h-2.82a5.97 5.97 0 0 1 1.32 3.75v5.25h7.5z" })
  ] });
});
m.displayName = "Mailbox";
export {
  m as Mailbox
};
//# sourceMappingURL=Mailbox.js.map
