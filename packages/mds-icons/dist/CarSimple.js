import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const v = m(({
  size: a = "1em",
  title: r,
  titleId: l,
  ...o
}, d) => {
  const h = n(), e = r ? l ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M22.5 9.375h-.769l-2.505-5.636a1.87 1.87 0 0 0-1.713-1.114H6.486a1.88 1.88 0 0 0-1.713 1.114L2.269 9.375H1.5a1.125 1.125 0 0 0 0 2.25h.375v7.125a1.875 1.875 0 0 0 1.875 1.875h2.625A1.875 1.875 0 0 0 8.25 18.75v-1.125h7.5v1.125a1.875 1.875 0 0 0 1.875 1.875h2.625a1.875 1.875 0 0 0 1.875-1.875v-7.125h.375a1.125 1.125 0 1 0 0-2.25m-15.769-4.5H17.27l2 4.5H4.731zm13.144 13.5H18V16.5a1.125 1.125 0 0 0-1.125-1.125h-9.75A1.125 1.125 0 0 0 6 16.5v1.875H4.125v-6.75h15.75z" })
  ] });
});
v.displayName = "CarSimple";
export {
  v as CarSimple
};
//# sourceMappingURL=CarSimple.js.map
