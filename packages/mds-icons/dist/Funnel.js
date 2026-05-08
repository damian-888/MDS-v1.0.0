import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: l,
  titleId: d,
  ...a
}, i) => {
  const n = h(), e = l ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": e, ...a, children: [
    l ? /* @__PURE__ */ o("title", { id: e, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.965 4.492a1.88 1.88 0 0 0-1.715-1.117H3.75a1.875 1.875 0 0 0-1.388 3.136l.012.013 6.25 6.671v7.055a1.875 1.875 0 0 0 2.916 1.56l3-2a1.88 1.88 0 0 0 .835-1.56v-5.055l6.25-6.67.011-.014a1.88 1.88 0 0 0 .329-2.02m-8.532 7.49a1.12 1.12 0 0 0-.308.768v5.299l-2.25 1.5V12.75c0-.286-.11-.56-.305-.769L4.615 5.625h14.77z" })
  ] });
});
m.displayName = "Funnel";
export {
  m as Funnel
};
//# sourceMappingURL=Funnel.js.map
