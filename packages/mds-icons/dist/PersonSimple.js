import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...a
}, d) => {
  const n = s(), o = r ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: o, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 7.875a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75m0-4.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m9.964 9.578a1.124 1.124 0 0 1-1.544.387c-.03-.018-3.035-1.774-7.295-2.052v2.532l5.718 6.43a1.129 1.129 0 1 1-1.687 1.5L12 15.946 6.843 21.75a1.13 1.13 0 0 1-1.687-1.5l5.719-6.43v-2.532c-4.287.277-7.264 2.033-7.296 2.053a1.125 1.125 0 1 1-1.158-1.93C2.585 11.311 6.501 9 12 9c5.498 0 9.414 2.312 9.578 2.41a1.125 1.125 0 0 1 .386 1.543" })
  ] });
});
c.displayName = "PersonSimple";
export {
  c as PersonSimple
};
//# sourceMappingURL=PersonSimple.js.map
