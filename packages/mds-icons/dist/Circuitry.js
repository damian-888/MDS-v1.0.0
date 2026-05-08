import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const s = n(({
  size: i = "1em",
  title: r,
  titleId: d,
  ...e
}, a) => {
  const h = v(), l = r ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": l, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625M4.875 4.875h2.25v8.927a2.25 2.25 0 1 0 2.25 0v-2.083l3.75 3.75v3.656h-8.25zm14.25 14.25h-3.75V15a1.13 1.13 0 0 0-.33-.796l-5.67-5.673V4.875h2.25V6.75a1.13 1.13 0 0 0 .33.796l1.622 1.622a2.25 2.25 0 1 0 1.594-1.594l-1.296-1.293V4.875h5.25z" })
  ] });
});
s.displayName = "Circuitry";
export {
  s as Circuitry
};
//# sourceMappingURL=Circuitry.js.map
