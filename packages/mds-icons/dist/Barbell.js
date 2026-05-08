import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const n = t(({
  size: h = "1em",
  title: r,
  titleId: l,
  ...o
}, d) => {
  const i = m(), a = r ? l ?? i : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.875 10.875V8.25A1.875 1.875 0 0 0 21 6.375h-1.5V6a1.875 1.875 0 0 0-1.875-1.875h-2.25A1.875 1.875 0 0 0 13.5 6v4.875h-3V6a1.875 1.875 0 0 0-1.875-1.875h-2.25A1.875 1.875 0 0 0 4.5 6v.375H3A1.875 1.875 0 0 0 1.125 8.25v2.625a1.125 1.125 0 1 0 0 2.25v2.625A1.875 1.875 0 0 0 3 17.625h1.5V18a1.875 1.875 0 0 0 1.875 1.875h2.25A1.875 1.875 0 0 0 10.5 18v-4.875h3V18a1.875 1.875 0 0 0 1.875 1.875h2.25A1.875 1.875 0 0 0 19.5 18v-.375H21a1.875 1.875 0 0 0 1.875-1.875v-2.625a1.125 1.125 0 1 0 0-2.25m-19.5 4.5v-6.75H4.5v6.75zm4.875 2.25h-1.5V6.375h1.5zm9 0h-1.5V6.375h1.5zm3.375-2.25H19.5v-6.75h1.125z" })
  ] });
});
n.displayName = "Barbell";
export {
  n as Barbell
};
//# sourceMappingURL=Barbell.js.map
