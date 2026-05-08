import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const v = n(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, l) => {
  const h = m(), d = o ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    o ? /* @__PURE__ */ a("title", { id: d, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m20.296 7.455-5.25-5.25a1.13 1.13 0 0 0-.796-.33h-9A1.875 1.875 0 0 0 3.375 3.75v7.875a1.125 1.125 0 1 0 2.25 0v-7.5h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125h-1.5a1.125 1.125 0 1 0 0 2.25h1.875a1.875 1.875 0 0 0 1.875-1.875v-12c0-.298-.118-.584-.33-.795M15 5.344 17.156 7.5H15zm-4.875 6.281a5.25 5.25 0 0 0-4.748 3.008 3.75 3.75 0 0 0 .248 7.492h4.5a5.25 5.25 0 1 0 0-10.5m0 8.25h-4.5a1.5 1.5 0 0 1-.613-2.869 1.125 1.125 0 0 0 2.125-.405 3 3 0 0 1 .115-.599 3 3 0 1 1 2.873 3.873" })
  ] });
});
v.displayName = "FileCloud";
export {
  v as FileCloud
};
//# sourceMappingURL=FileCloud.js.map
