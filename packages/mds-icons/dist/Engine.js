import { jsxs as n, jsx as h } from "react/jsx-runtime";
import { forwardRef as t, useId as v } from "react";
const s = t(({
  size: l = "1em",
  title: a,
  titleId: e,
  ...i
}, o) => {
  const d = v(), r = a ? e ?? d : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: o, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ h("title", { id: r, children: a }) : null,
    /* @__PURE__ */ h("path", { fill: "currentColor", d: "M22.125 9.375h-1.031l-3.204-3.2a1.86 1.86 0 0 0-1.325-.55H13.5v-1.5h1.875a1.125 1.125 0 0 0 0-2.25h-6a1.125 1.125 0 0 0 0 2.25h1.875v1.5H6A1.875 1.875 0 0 0 4.125 7.5V12h-1.5v-1.875a1.125 1.125 0 0 0-2.25 0v6a1.125 1.125 0 1 0 2.25 0V14.25h1.5v1.565a1.86 1.86 0 0 0 .55 1.325l3.685 3.686a1.86 1.86 0 0 0 1.325.549h6.88a1.86 1.86 0 0 0 1.325-.55l3.204-3.2h1.031A1.875 1.875 0 0 0 24 15.75v-4.5a1.875 1.875 0 0 0-1.875-1.875m-.375 6h-1.125a1.13 1.13 0 0 0-.796.33l-3.423 3.42H9.844l-3.469-3.469V7.875h10.031l3.42 3.42a1.12 1.12 0 0 0 .799.33h1.125z" })
  ] });
});
s.displayName = "Engine";
export {
  s as Engine
};
//# sourceMappingURL=Engine.js.map
