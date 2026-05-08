import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const t = s(), o = r ? e ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25V18a1.875 1.875 0 0 0 1.875 1.875h1.125V21a1.125 1.125 0 0 0 2.25 0v-1.125h9.75V21a1.125 1.125 0 1 0 2.25 0v-1.125h1.125A1.875 1.875 0 0 0 22.125 18V5.25a1.875 1.875 0 0 0-1.875-1.875M4.125 17.625v-12h15.75V10.5h-2.032a4.125 4.125 0 1 0 0 2.25h2.032v4.875zm11.625-6a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0" })
  ] });
});
v.displayName = "Vault";
export {
  v as Vault
};
//# sourceMappingURL=Vault.js.map
