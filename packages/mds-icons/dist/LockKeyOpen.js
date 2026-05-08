import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as c, useId as v } from "react";
const h = c(({
  size: o = "1em",
  title: e,
  titleId: i,
  ...a
}, l) => {
  const n = v(), r = e ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": r, ...a, children: [
    e ? /* @__PURE__ */ d("title", { id: r, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 7.125H9.375V5.25A2.625 2.625 0 0 1 12 2.625c1.267 0 2.405.902 2.648 2.1a1.125 1.125 0 1 0 2.204-.45c-.458-2.26-2.499-3.9-4.852-3.9A4.88 4.88 0 0 0 7.125 5.25v1.875H4.5A1.875 1.875 0 0 0 2.625 9v10.5A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875V9A1.875 1.875 0 0 0 19.5 7.125m-.375 12H4.875v-9.75h14.25zm-8.25-2.844v.594a1.125 1.125 0 1 0 2.25 0v-.594a3 3 0 1 0-2.25 0M12 12.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" })
  ] });
});
h.displayName = "LockKeyOpen";
export {
  h as LockKeyOpen
};
//# sourceMappingURL=LockKeyOpen.js.map
