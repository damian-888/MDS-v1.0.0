import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: i,
  titleId: o,
  ...d
}, e) => {
  const n = m(), a = i ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: e, "aria-labelledby": a, ...d, children: [
    i ? /* @__PURE__ */ l("title", { id: a, children: i }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.031 13.548 16.794 4.56l-.016-.027a5.626 5.626 0 0 0-9.575.027l-5.234 8.987a5.625 5.625 0 0 0 4.79 8.577h10.482a5.625 5.625 0 0 0 4.79-8.577m-7.406 6.327h-5.25v-3.75h5.25zm5.565-1.734a3.33 3.33 0 0 1-2.95 1.734h-.365V15.75A1.875 1.875 0 0 0 15 13.875H9a1.875 1.875 0 0 0-1.875 1.875v4.125H6.76a3.375 3.375 0 0 1-2.866-5.156l.016-.026 5.233-8.985a3.375 3.375 0 0 1 5.718 0l5.233 8.985.016.027a3.34 3.34 0 0 1 .08 3.42z" })
  ] });
});
s.displayName = "Onigiri";
export {
  s as Onigiri
};
//# sourceMappingURL=Onigiri.js.map
