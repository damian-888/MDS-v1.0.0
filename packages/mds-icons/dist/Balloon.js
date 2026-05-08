import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const s = c(({
  size: l = "1em",
  title: o,
  titleId: a,
  ...e
}, i) => {
  const n = m(), r = o ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    o ? /* @__PURE__ */ d("title", { id: r, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 1.125A8.634 8.634 0 0 0 3.375 9.75c0 2.3.895 4.7 2.455 6.583.938 1.125 2.022 1.975 3.193 2.509l-1.054 2.465A1.125 1.125 0 0 0 9 22.875h6a1.125 1.125 0 0 0 1.031-1.568l-1.053-2.463c1.17-.534 2.257-1.381 3.192-2.509 1.56-1.885 2.455-4.285 2.455-6.585A8.635 8.635 0 0 0 12 1.125m1.294 19.5h-2.588l.502-1.17a7 7 0 0 0 1.584 0zm3.143-5.727C15.181 16.415 13.605 17.25 12 17.25s-3.18-.835-4.437-2.352c-1.213-1.465-1.938-3.39-1.938-5.148a6.375 6.375 0 0 1 12.75 0c0 1.759-.725 3.683-1.938 5.148m-.594-4.406a1.126 1.126 0 0 1-1.23-1.008 2.63 2.63 0 0 0-1.826-2.242 1.126 1.126 0 0 1 .676-2.146 4.87 4.87 0 0 1 3.388 4.165 1.125 1.125 0 0 1-1.007 1.233z" })
  ] });
});
s.displayName = "Balloon";
export {
  s as Balloon
};
//# sourceMappingURL=Balloon.js.map
