import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, h) => {
  const l = m(), o = r ? e ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.125 15.375A1.125 1.125 0 0 1 15 16.5H9a1.125 1.125 0 1 1 0-2.25h6a1.125 1.125 0 0 1 1.125 1.125M15 10.5H9a1.125 1.125 0 1 0 0 2.25h6a1.125 1.125 0 1 0 0-2.25m5.625-6v15.75a1.875 1.875 0 0 1-1.875 1.875H5.25a1.875 1.875 0 0 1-1.875-1.875V4.5A1.875 1.875 0 0 1 5.25 2.625h3.237a4.864 4.864 0 0 1 7.026 0h3.237A1.875 1.875 0 0 1 20.625 4.5M9.402 5.625h5.196a2.625 2.625 0 0 0-5.196 0m8.973-.75h-1.632c.087.368.132.746.132 1.125v.75a1.125 1.125 0 0 1-1.125 1.125h-7.5A1.125 1.125 0 0 1 7.125 6.75V6q0-.572.132-1.125H5.625v15h12.75z" })
  ] });
});
s.displayName = "ClipboardText";
export {
  s as ClipboardText
};
//# sourceMappingURL=ClipboardText.js.map
