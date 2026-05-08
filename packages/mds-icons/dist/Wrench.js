import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: r = "1em",
  title: l,
  titleId: o,
  ...d
}, i) => {
  const n = s(), a = l ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: a, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.606 6.33a1.125 1.125 0 0 0-1.806-.405l-3.635 3.358-1.189-.255-.258-1.192L18.074 4.2a1.124 1.124 0 0 0-.405-1.805 7.131 7.131 0 0 0-9.381 9.01l-5.39 4.926-.036.035a3.375 3.375 0 0 0 4.773 4.773l.035-.036 4.926-5.39a7.13 7.13 0 0 0 9.01-9.383M15 13.876a4.8 4.8 0 0 1-2.189-.517 1.124 1.124 0 0 0-1.336.245l-5.445 5.96a1.127 1.127 0 1 1-1.594-1.594l5.958-5.445a1.125 1.125 0 0 0 .245-1.336A4.88 4.88 0 0 1 15 4.127h.084l-2.411 2.612a1.13 1.13 0 0 0-.273.999l.53 2.47a1.13 1.13 0 0 0 .864.863l2.47.531a1.13 1.13 0 0 0 .999-.273l2.613-2.41v.083a4.88 4.88 0 0 1-4.876 4.874" })
  ] });
});
c.displayName = "Wrench";
export {
  c as Wrench
};
//# sourceMappingURL=Wrench.js.map
