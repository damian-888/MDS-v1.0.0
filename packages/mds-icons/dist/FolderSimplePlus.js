import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: l = "1em",
  title: r,
  titleId: d,
  ...a
}, i) => {
  const h = s(), e = r ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 6.375h-7.875L9.875 4.5a1.9 1.9 0 0 0-1.125-.375h-5A1.875 1.875 0 0 0 1.875 6v12.75a1.875 1.875 0 0 0 1.875 1.875h16.583a1.793 1.793 0 0 0 1.792-1.792V8.25a1.875 1.875 0 0 0-1.875-1.875m-.375 12H4.125v-12h4.5l2.7 2.025c.195.146.432.225.675.225h7.875zM12 10.125a1.125 1.125 0 0 1 1.125 1.125v1.125h1.125a1.125 1.125 0 1 1 0 2.25h-1.125v1.125a1.125 1.125 0 1 1-2.25 0v-1.125H9.75a1.125 1.125 0 1 1 0-2.25h1.125V11.25A1.125 1.125 0 0 1 12 10.125" })
  ] });
});
m.displayName = "FolderSimplePlus";
export {
  m as FolderSimplePlus
};
//# sourceMappingURL=FolderSimplePlus.js.map
