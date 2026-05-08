import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const m = t(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...o
}, e) => {
  const h = v(), d = a ? l ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": d, ...o, children: [
    a ? /* @__PURE__ */ i("title", { id: d, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M23.625 14.25a1.125 1.125 0 0 1-1.125 1.125h-1.125V16.5a1.125 1.125 0 1 1-2.25 0v-1.125H18a1.125 1.125 0 0 1 0-2.25h1.125V12a1.125 1.125 0 0 1 2.25 0v1.125H22.5a1.125 1.125 0 0 1 1.125 1.125M5.25 7.125h1.125V8.25a1.125 1.125 0 0 0 2.25 0V7.125H9.75a1.125 1.125 0 0 0 0-2.25H8.625V3.75a1.125 1.125 0 0 0-2.25 0v1.125H5.25a1.125 1.125 0 0 0 0 2.25m12 10.5h-.375v-.375a1.125 1.125 0 1 0-2.25 0v.375h-.375a1.125 1.125 0 0 0 0 2.25h.375v.375a1.125 1.125 0 0 0 2.25 0v-.375h.375a1.125 1.125 0 1 0 0-2.25m3.576-9.86L7.764 20.825a1.875 1.875 0 0 1-2.65 0l-1.94-1.938a1.875 1.875 0 0 1 0-2.652l13.06-13.06a1.875 1.875 0 0 1 2.652 0l1.94 1.938a1.877 1.877 0 0 1 0 2.652m-5.92 2.735L13.5 9.094 5.03 17.56l1.406 1.407zm4.06-4.06L17.56 5.033 15.094 7.5 16.5 8.906z" })
  ] });
});
m.displayName = "MagicWand";
export {
  m as MagicWand
};
//# sourceMappingURL=MagicWand.js.map
