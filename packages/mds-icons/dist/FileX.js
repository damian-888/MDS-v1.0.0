import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: l = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const t = m(), a = r ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m20.296 7.455-5.25-5.25a1.12 1.12 0 0 0-.796-.33h-9A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-12c0-.298-.118-.584-.33-.795m-3.14.045H15V5.344zM5.625 19.875V4.125h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125zm9.42-7.08-1.451 1.455 1.455 1.454a1.127 1.127 0 1 1-1.594 1.594L12 15.844l-1.454 1.455a1.127 1.127 0 1 1-1.594-1.594l1.454-1.455-1.452-1.454a1.126 1.126 0 1 1 1.594-1.594L12 12.656l1.454-1.455a1.124 1.124 0 0 1 1.594 0 1.124 1.124 0 0 1 0 1.594z" })
  ] });
});
s.displayName = "FileX";
export {
  s as FileX
};
//# sourceMappingURL=FileX.js.map
