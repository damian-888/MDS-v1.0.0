import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...a
}, l) => {
  const s = c(), o = r ? i ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M23.531 11.543c-.034-.075-.856-1.899-2.67-3.713-2.427-2.423-5.486-3.705-8.86-3.705-3.376 0-6.435 1.282-8.86 3.705C1.329 9.644.507 11.467.47 11.543a1.13 1.13 0 0 0 0 .915c.035.076.856 1.899 2.67 3.713 2.427 2.423 5.486 3.704 8.861 3.704s6.434-1.28 8.858-3.704c1.815-1.814 2.636-3.637 2.67-3.713a1.13 1.13 0 0 0 .003-.915m-4.318 3.094C17.2 16.62 14.774 17.625 12 17.625s-5.2-1.006-7.21-2.989A12.2 12.2 0 0 1 2.768 12 12.2 12.2 0 0 1 4.79 9.365C6.8 7.38 9.226 6.375 12 6.375s5.2 1.006 7.21 2.99A12.2 12.2 0 0 1 21.233 12a12.2 12.2 0 0 1-2.023 2.636zM12 7.875a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25m0 6a1.875 1.875 0 1 1 0-3.751 1.875 1.875 0 0 1 0 3.751" })
  ] });
});
m.displayName = "Eye";
export {
  m as Eye
};
//# sourceMappingURL=Eye.js.map
