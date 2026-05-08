import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const m = t(({
  size: r = "1em",
  title: i,
  titleId: o,
  ...d
}, l) => {
  const h = s(), a = i ? o ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    i ? /* @__PURE__ */ e("title", { id: a, children: i }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m20.296 7.454-5.25-5.25a1.12 1.12 0 0 0-.796-.329h-9A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-12a1.13 1.13 0 0 0-.33-.796M15 5.344 17.156 7.5H15zM5.625 19.875V4.125h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125zm9.75-5.625a1.125 1.125 0 0 1-1.125 1.125h-4.5a1.125 1.125 0 1 1 0-2.25h4.5a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
m.displayName = "FileMinus";
export {
  m as FileMinus
};
//# sourceMappingURL=FileMinus.js.map
