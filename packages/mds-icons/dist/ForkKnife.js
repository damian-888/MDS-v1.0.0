import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as v, useId as m } from "react";
const s = v(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...d
}, l) => {
  const n = m(), o = r ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M6.375 8.25v-4.5a1.125 1.125 0 0 1 2.25 0v4.5a1.125 1.125 0 0 1-2.25 0m14.25-4.5V21a1.125 1.125 0 1 1-2.25 0v-4.125H14.25a1.125 1.125 0 0 1-1.125-1.125 25.6 25.6 0 0 1 .687-5.42c.946-3.916 2.76-6.55 5.245-7.611a1.125 1.125 0 0 1 1.568 1.031m-2.25 2.149c-1.256 1.32-1.969 3.289-2.365 4.918a24 24 0 0 0-.583 3.808h2.948zM12 3.656a1.129 1.129 0 1 0-2.25.188l.375 4.45a2.625 2.625 0 0 1-5.25 0l.375-4.45A1.129 1.129 0 0 0 3 3.656l-.375 4.5v.094a4.885 4.885 0 0 0 3.75 4.743V21a1.125 1.125 0 0 0 2.25 0v-8.007a4.885 4.885 0 0 0 3.75-4.743v-.094z" })
  ] });
});
s.displayName = "ForkKnife";
export {
  s as ForkKnife
};
//# sourceMappingURL=ForkKnife.js.map
