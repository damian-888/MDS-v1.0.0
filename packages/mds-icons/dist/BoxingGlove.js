import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const m = v(({
  size: o = "1em",
  title: l,
  titleId: e,
  ...i
}, d) => {
  const n = h(), a = l ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": a, ...i, children: [
    l ? /* @__PURE__ */ r("title", { id: a, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M15.75 1.125h-4.5a5.633 5.633 0 0 0-5.613 5.25H5.25A3.375 3.375 0 0 0 1.875 9.75v2.737c0 .425.145.838.41 1.171q.042.05.089.094l3.251 3.217v3.281A1.875 1.875 0 0 0 7.5 22.125H18a1.875 1.875 0 0 0 1.875-1.875v-3.593l1.428-4.996q.072-.254.072-.516V6.75a5.63 5.63 0 0 0-5.625-5.625m3.375 9.968-1.457 5.098q-.043.15-.043.309v3.375h-9.75V16.5a1.13 1.13 0 0 0-.334-.8l-3.416-3.377V9.75A1.125 1.125 0 0 1 5.25 8.625h.375V9.75a1.125 1.125 0 0 0 2.25 0v-3a3.375 3.375 0 0 1 3.375-3.375h4.5a3.375 3.375 0 0 1 3.375 3.375zm-3.5 4.095-.844.562.843.563a1.127 1.127 0 0 1-1.248 1.875l-1.626-1.086-1.626 1.085a1.127 1.127 0 0 1-1.248-1.875l.843-.562-.843-.562a1.126 1.126 0 1 1 1.248-1.876l1.626 1.086 1.626-1.085a1.127 1.127 0 0 1 1.248 1.874" })
  ] });
});
m.displayName = "BoxingGlove";
export {
  m as BoxingGlove
};
//# sourceMappingURL=BoxingGlove.js.map
