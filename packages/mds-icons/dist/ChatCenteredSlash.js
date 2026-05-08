import { jsxs as i, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: e = "1em",
  title: a,
  titleId: d,
  ...o
}, t) => {
  const h = s(), r = a ? d ?? h : void 0;
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M5.333 2.993a1.125 1.125 0 0 0-1.903.41A1.875 1.875 0 0 0 1.875 5.25v12a1.875 1.875 0 0 0 1.875 1.875h5.448l1.174 2.055a1.875 1.875 0 0 0 3.255 0l1.175-2.055h2.156l1.711 1.882a1.125 1.125 0 0 0 1.665-1.513zm8.817 13.881a1.12 1.12 0 0 0-.977.567L12 19.494l-1.173-2.053a1.13 1.13 0 0 0-.977-.567H4.125V5.624h.563l10.228 11.25zM22.125 5.25v11.076a1.125 1.125 0 1 1-2.25 0v-10.7H10.25a1.125 1.125 0 1 1 0-2.25h10a1.875 1.875 0 0 1 1.875 1.874" })
  ] });
});
m.displayName = "ChatCenteredSlash";
export {
  m as ChatCenteredSlash
};
//# sourceMappingURL=ChatCenteredSlash.js.map
