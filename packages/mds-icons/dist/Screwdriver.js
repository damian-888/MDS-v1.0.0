import { jsxs as c, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const v = t(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, o) => {
  const h = n(), d = r ? e ?? h : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ l("title", { id: d, children: r }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.546 4.454a1.125 1.125 0 0 1 0 1.593l-4.875 4.875a1.127 1.127 0 0 1-1.594-1.593l4.875-4.875a1.127 1.127 0 0 1 1.594 0m4.079 1.023a5.07 5.07 0 0 1-1.494 3.609l-4.99 4.99a1.86 1.86 0 0 1-1.326.55h-1.19v1.203c0 .409-.134.806-.38 1.133q-.047.06-.102.115l-.75.75a1.875 1.875 0 0 1-2.651 0l-1.489-1.489-6.957 6.958a1.126 1.126 0 0 1-1.838-1.228c.056-.137.14-.26.244-.365l6.958-6.958-1.486-1.486a1.875 1.875 0 0 1 0-2.653l.75-.75q.054-.056.117-.105a1.9 1.9 0 0 1 1.131-.375h1.203v-1.19a1.87 1.87 0 0 1 .55-1.327l4.99-4.99a5.103 5.103 0 0 1 8.71 3.608m-2.25 0a2.852 2.852 0 0 0-4.87-2.017l-4.88 4.885v1.406a1.875 1.875 0 0 1-1.875 1.875H8.338l-.307.308 2.017 2.018 2.018 2.018.308-.308v-1.41a1.875 1.875 0 0 1 1.875-1.876h1.406l4.88-4.881a2.83 2.83 0 0 0 .84-2.018" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
v.displayName = "Screwdriver";
export {
  v as Screwdriver
};
//# sourceMappingURL=Screwdriver.js.map
