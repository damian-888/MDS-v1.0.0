import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const m = s(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...d
}, i) => {
  const t = c(), o = a ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: o, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M13.5 9.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8.625 2.393a10.153 10.153 0 0 1-9.92 9.982h-.212a10.06 10.06 0 0 1-6.743-2.537 1.124 1.124 0 1 1 1.5-1.676c.462.412.972.767 1.519 1.056l2.02-2.777c-1.913-.657-3.93-.313-5.104-.114a3.36 3.36 0 0 1-3.347-1.414L.547 12.601a1.125 1.125 0 0 1 .337-1.539l9.241-6.045V3a1.125 1.125 0 0 1 1.125-1.125H12a10.125 10.125 0 0 1 10.125 10.268m-2.25-.03a7.875 7.875 0 0 0-7.5-7.98v1.492a1.13 1.13 0 0 1-.51.938l-8.827 5.775.686 1.095a1.13 1.13 0 0 0 1.085.426c1.522-.258 4.632-.784 7.467.75a3.375 3.375 0 0 0 3.099-3.359 1.125 1.125 0 1 1 2.25 0 5.634 5.634 0 0 1-5.029 5.593l-2.104 2.894a7.902 7.902 0 0 0 9.384-7.625" })
  ] });
});
m.displayName = "Horse";
export {
  m as Horse
};
//# sourceMappingURL=Horse.js.map
