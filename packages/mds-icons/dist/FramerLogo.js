import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const v = m(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...d
}, i) => {
  const h = n(), a = r ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: a, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.875 9.75v-6a1.125 1.125 0 0 0-1.125-1.125H5.25a1.125 1.125 0 0 0-.75 1.969l4.541 4.031H5.25A1.125 1.125 0 0 0 4.125 9.75v6a1.13 1.13 0 0 0 .33.796l6.75 6.75a1.126 1.126 0 0 0 1.92-.796v-5.625h5.625a1.125 1.125 0 0 0 .75-1.969l-4.538-4.031h3.788a1.125 1.125 0 0 0 1.125-1.125m-4.084 4.875H12a1.125 1.125 0 0 0-1.125 1.125v4.031l-4.5-4.5v-4.406h5.198zm1.834-6h-5.197l-4.22-3.75h9.417z" })
  ] });
});
v.displayName = "FramerLogo";
export {
  v as FramerLogo
};
//# sourceMappingURL=FramerLogo.js.map
