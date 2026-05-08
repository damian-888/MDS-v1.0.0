import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const s = v(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, h) => {
  const l = n(), e = r ? o ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M9.375 9.375A1.125 1.125 0 0 1 10.5 8.25h3a1.125 1.125 0 0 1 0 2.25h-3a1.125 1.125 0 0 1-1.125-1.125m12.75-3v12a1.875 1.875 0 0 1-1.875 1.875H3.75a1.875 1.875 0 0 1-1.875-1.875v-12A1.875 1.875 0 0 1 3.75 4.5h3.375v-.75A2.625 2.625 0 0 1 9.75 1.125h4.5a2.625 2.625 0 0 1 2.625 2.625v.75h3.375a1.875 1.875 0 0 1 1.875 1.875M9.375 4.5h5.25v-.75a.375.375 0 0 0-.375-.375h-4.5a.375.375 0 0 0-.375.375zm-5.25 2.25v3.303A16.9 16.9 0 0 0 12 12c2.744 0 5.448-.668 7.875-1.948V6.75zM19.875 18v-5.443a19.15 19.15 0 0 1-15.75 0V18z" })
  ] });
});
s.displayName = "Briefcase";
export {
  s as Briefcase
};
//# sourceMappingURL=Briefcase.js.map
