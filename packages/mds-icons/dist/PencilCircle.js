import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as c } from "react";
const s = m(({
  size: r = "1em",
  title: l,
  titleId: a,
  ...o
}, d) => {
  const n = c(), e = l ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    l ? /* @__PURE__ */ i("title", { id: e, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.16 4.837A10.132 10.132 0 1 0 4.826 19.162 10.132 10.132 0 0 0 19.16 4.837M8.625 18.75a1.125 1.125 0 1 1 2.25 0v1.041a7.9 7.9 0 0 1-2.25-.676zm4.5 0a1.125 1.125 0 1 1 2.25 0v.365a7.9 7.9 0 0 1-2.25.676zm-3.174-4.875h4.099l.71 1.54a3.37 3.37 0 0 0-2.76.824 3.37 3.37 0 0 0-2.759-.824zm1.039-2.25L12 9.433l1.011 2.192zm6.635 5.886V16.5a1.1 1.1 0 0 0-.103-.469l-4.5-9.75a1.125 1.125 0 0 0-2.043 0l-4.5 9.75a1.1 1.1 0 0 0-.104.469v1.01a7.876 7.876 0 1 1 11.25 0z" })
  ] });
});
s.displayName = "PencilCircle";
export {
  s as PencilCircle
};
//# sourceMappingURL=PencilCircle.js.map
