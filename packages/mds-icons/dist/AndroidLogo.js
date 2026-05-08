import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...e
}, l) => {
  const n = s(), d = o ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": d, ...e, children: [
    o ? /* @__PURE__ */ a("title", { id: d, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M16.875 13.876a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8.25-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M22.875 15v2.25A1.875 1.875 0 0 1 21 19.126H3a1.875 1.875 0 0 1-1.875-1.875v-2.144a11 11 0 0 1 3.161-7.729L2.204 5.297a1.127 1.127 0 1 1 1.594-1.594l2.23 2.235a10.7 10.7 0 0 1 5.934-1.812H12c2.13-.006 4.214.618 5.99 1.794l2.214-2.215a1.126 1.126 0 0 1 1.924.797 1.13 1.13 0 0 1-.33.797L19.735 7.36a10.8 10.8 0 0 1 3.14 7.64m-2.25 0a8.625 8.625 0 0 0-8.656-8.625c-4.739.017-8.594 3.937-8.594 8.73v1.77h17.25z" })
  ] });
});
c.displayName = "AndroidLogo";
export {
  c as AndroidLogo
};
//# sourceMappingURL=AndroidLogo.js.map
