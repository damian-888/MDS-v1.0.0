import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as p, useId as h } from "react";
const m = p(({
  size: l = "1em",
  title: e,
  titleId: i,
  ...d
}, n) => {
  const a = h(), o = e ? i ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: n, "aria-labelledby": o, ...d, children: [
    e ? /* @__PURE__ */ r("title", { id: o, children: e }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m21.624 8.062-9-6a1.125 1.125 0 0 0-1.248 0l-9 6A1.13 1.13 0 0 0 1.875 9v9.75a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V9a1.13 1.13 0 0 0-.5-.938M12 4.352l7.018 4.679-5.742 4.094h-2.552L4.982 9.03zM4.125 18.375v-7.192l5.586 3.983c.191.136.42.21.656.209h3.272c.235 0 .465-.073.656-.21l5.58-3.982v7.192z" })
  ] });
});
m.displayName = "EnvelopeSimpleOpen";
export {
  m as EnvelopeSimpleOpen
};
//# sourceMappingURL=EnvelopeSimpleOpen.js.map
