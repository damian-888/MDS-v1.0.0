import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const m = n(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, h) => {
  const o = c(), i = a ? d ?? o : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": i, ...e, children: [
    a ? /* @__PURE__ */ r("title", { id: i, children: a }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M22.125 10.125h-2.156l-3.954-3.95a1.86 1.86 0 0 0-1.325-.55H4.526a1.88 1.88 0 0 0-1.56.835L.188 10.626A1.13 1.13 0 0 0 0 11.25v4.5a1.875 1.875 0 0 0 1.875 1.875h1.266a3.187 3.187 0 0 0 6.093 0h5.532a3.187 3.187 0 0 0 6.093 0h1.266A1.875 1.875 0 0 0 24 15.75V12a1.875 1.875 0 0 0-1.875-1.875M4.727 7.875h9.804l2.25 2.25H3.227zm1.46 9.75a.938.938 0 1 1 0-1.875.938.938 0 0 1 0 1.875m11.625 0a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875m3.938-2.25h-1.031a3.188 3.188 0 0 0-5.813 0H9.094a3.187 3.187 0 0 0-5.813 0H2.25v-3h19.5z" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
m.displayName = "CarProfile";
export {
  m as CarProfile
};
//# sourceMappingURL=CarProfile.js.map
