import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const s = m(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, h) => {
  const l = n(), i = r ? a ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 4.5H3.75a1.125 1.125 0 0 0 0 2.25h.375V19.5A1.875 1.875 0 0 0 6 21.375h12a1.875 1.875 0 0 0 1.875-1.875V6.75h.375a1.125 1.125 0 0 0 0-2.25m-2.625 14.625H6.375V6.75h11.25zm-10.5-17.25A1.125 1.125 0 0 1 8.25.75h7.5a1.125 1.125 0 1 1 0 2.25h-7.5a1.125 1.125 0 0 1-1.125-1.125" })
  ] });
});
s.displayName = "TrashSimple";
export {
  s as TrashSimple
};
//# sourceMappingURL=TrashSimple.js.map
