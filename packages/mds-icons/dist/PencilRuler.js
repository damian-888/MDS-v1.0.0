import { jsxs as v, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as t } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...i
}, o) => {
  const d = t(), h = r ? a ?? d : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": h, ...i, children: [
    r ? /* @__PURE__ */ l("title", { id: h, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.5 2.627H15a1.875 1.875 0 0 0-1.875 1.875v15A1.875 1.875 0 0 0 15 21.377h4.5a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.627m-.375 16.5h-3.75v-2.25h1.5a1.125 1.125 0 1 0 0-2.25h-1.5v-1.5h1.5a1.125 1.125 0 1 0 0-2.25h-1.5v-1.5h1.5a1.125 1.125 0 1 0 0-2.25h-1.5v-2.25h3.75zM7.545 2.206a1.125 1.125 0 0 0-1.593 0l-3 3c-.21.211-.328.498-.327.796v13.5A1.875 1.875 0 0 0 4.5 21.377H9a1.875 1.875 0 0 0 1.875-1.875v-13.5a1.13 1.13 0 0 0-.33-.796zm-2.67 6.42h3.75v6.75h-3.75zm1.875-4.03 1.781 1.78H4.97zm-1.875 14.53v-1.5h3.75v1.5z" })
  ] });
});
m.displayName = "PencilRuler";
export {
  m as PencilRuler
};
//# sourceMappingURL=PencilRuler.js.map
