import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const v = h(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...o
}, d) => {
  const t = m(), a = r ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    r ? /* @__PURE__ */ i("title", { id: a, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.16 4.837A10.132 10.132 0 1 0 4.826 19.162 10.132 10.132 0 0 0 19.16 4.837m-9.035 8.288h3.75v1.5h-3.75zm-1.5 5.992v-2.242h6.75v2.24a7.9 7.9 0 0 1-6.75.002m9-1.606V16.5a1.875 1.875 0 0 0-1.5-1.838V12.75a1.876 1.876 0 0 0-1.392-1.81l-.926-3.328a1.875 1.875 0 0 0-3.613 0l-.926 3.328a1.875 1.875 0 0 0-1.393 1.81v1.914a1.875 1.875 0 0 0-1.5 1.836v1.01a7.876 7.876 0 1 1 11.25 0z" })
  ] });
});
v.displayName = "MarkerCircle";
export {
  v as MarkerCircle
};
//# sourceMappingURL=MarkerCircle.js.map
