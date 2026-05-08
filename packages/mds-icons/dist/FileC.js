import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, l) => {
  const h = s(), e = r ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m20.296 7.454-5.25-5.25a1.12 1.12 0 0 0-.796-.329h-9A1.875 1.875 0 0 0 3.375 3.75v6.375a1.125 1.125 0 0 0 2.25 0v-6h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125h-6.75a1.125 1.125 0 1 0 0 2.25h7.125a1.875 1.875 0 0 0 1.875-1.875v-12a1.13 1.13 0 0 0-.33-.796M15 5.344 17.156 7.5H15zM4.5 16.875c0 .813.516 1.5 1.125 1.5a.97.97 0 0 0 .687-.322 1.125 1.125 0 0 1 1.626 1.557 3.19 3.19 0 0 1-2.313 1.015c-1.86 0-3.375-1.682-3.375-3.75s1.514-3.75 3.375-3.75a3.19 3.19 0 0 1 2.313 1.015 1.125 1.125 0 0 1-1.626 1.557.96.96 0 0 0-.687-.322c-.61 0-1.125.687-1.125 1.5" })
  ] });
});
v.displayName = "FileC";
export {
  v as FileC
};
//# sourceMappingURL=FileC.js.map
