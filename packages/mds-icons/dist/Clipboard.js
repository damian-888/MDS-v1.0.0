import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...e
}, l) => {
  const h = m(), d = r ? i ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": d, ...e, children: [
    r ? /* @__PURE__ */ a("title", { id: d, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.75 2.625h-3.237a4.864 4.864 0 0 0-7.026 0H5.25A1.875 1.875 0 0 0 3.375 4.5v15.75a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V4.5a1.875 1.875 0 0 0-1.875-1.875m-4.152 3H9.402a2.625 2.625 0 0 1 5.196 0m3.777 14.25H5.625v-15h1.632A5 5 0 0 0 7.125 6v.75A1.125 1.125 0 0 0 8.25 7.875h7.5a1.125 1.125 0 0 0 1.125-1.125V6q0-.572-.132-1.125h1.632z" })
  ] });
});
s.displayName = "Clipboard";
export {
  s as Clipboard
};
//# sourceMappingURL=Clipboard.js.map
