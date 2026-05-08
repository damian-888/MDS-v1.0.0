import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...t
}, l) => {
  const i = s(), a = e ? d ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": a, ...t, children: [
    e ? /* @__PURE__ */ o("title", { id: a, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M8.25 11.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m6 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m7.875-7.5v12a1.875 1.875 0 0 1-1.875 1.875h-5.448l-1.174 2.055a1.874 1.874 0 0 1-3.256 0l-1.174-2.055H3.75a1.875 1.875 0 0 1-1.875-1.875v-12A1.875 1.875 0 0 1 3.75 3.375h16.5a1.875 1.875 0 0 1 1.875 1.875m-2.25.375H4.125v11.25H9.85a1.13 1.13 0 0 1 .977.567L12 19.494l1.173-2.052a1.13 1.13 0 0 1 .977-.567h5.725z" })
  ] });
});
m.displayName = "ChatCenteredDots";
export {
  m as ChatCenteredDots
};
//# sourceMappingURL=ChatCenteredDots.js.map
