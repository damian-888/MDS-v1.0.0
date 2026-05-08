import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...d
}, h) => {
  const t = v(), a = e ? o ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: h, "aria-labelledby": a, ...d, children: [
    e ? /* @__PURE__ */ i("title", { id: a, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.25 7.875h-1.125V6.75A4.13 4.13 0 0 0 15 2.625h-.912c-1.172-.958-2.727-1.5-4.338-1.5-3.516 0-6.375 2.524-6.375 5.625V19.5a1.875 1.875 0 0 0 1.875 1.875h12a1.875 1.875 0 0 0 1.875-1.875v-.375h1.125a2.625 2.625 0 0 0 2.625-2.625v-6a2.625 2.625 0 0 0-2.625-2.625m-10.5-4.5c1.205 0 2.344.433 3.135 1.188.21.2.488.312.778.312H15a1.875 1.875 0 0 1 1.837 1.5H5.651c.229-1.687 1.98-3 4.099-3m7.125 15.75H5.625v-10.5h11.25zm3.75-2.625a.375.375 0 0 1-.375.375h-1.125v-6.75h1.125a.375.375 0 0 1 .375.375zm-10.5-5.25v5.25a1.125 1.125 0 1 1-2.25 0v-5.25a1.125 1.125 0 0 1 2.25 0m4.5 0v5.25a1.125 1.125 0 1 1-2.25 0v-5.25a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
m.displayName = "BeerStein";
export {
  m as BeerStein
};
//# sourceMappingURL=BeerStein.js.map
