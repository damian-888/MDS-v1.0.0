import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, e) => {
  const h = s(), i = r ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12.854 14.268a1.126 1.126 0 0 0-1.708 0l-4.5 5.25a1.125 1.125 0 0 0 .854 1.857h9a1.124 1.124 0 0 0 .854-1.857zm-2.906 4.857L12 16.729l2.054 2.396zM22.125 6v10.5a2.625 2.625 0 0 1-2.625 2.625h-.375a1.125 1.125 0 1 1 0-2.25h.375a.375.375 0 0 0 .375-.375V6a.375.375 0 0 0-.375-.375h-15A.375.375 0 0 0 4.125 6v10.5a.375.375 0 0 0 .375.375h.375a1.125 1.125 0 1 1 0 2.25H4.5A2.625 2.625 0 0 1 1.875 16.5V6A2.625 2.625 0 0 1 4.5 3.375h15A2.625 2.625 0 0 1 22.125 6" })
  ] });
});
m.displayName = "Airplay";
export {
  m as Airplay
};
//# sourceMappingURL=Airplay.js.map
