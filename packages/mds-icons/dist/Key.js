import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const c = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const h = v(), e = a ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: e, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M18.375 7.126a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5 2.132a7.903 7.903 0 0 1-7.865 7.618H15a7.8 7.8 0 0 1-2.217-.317l-.737.738a1.13 1.13 0 0 1-.796.33h-1.125v1.124A1.125 1.125 0 0 1 9 19.876H7.875v1.125a1.125 1.125 0 0 1-1.125 1.125h-3a1.875 1.875 0 0 1-1.875-1.875v-2.69a1.86 1.86 0 0 1 .55-1.325l5.017-5.017a7.875 7.875 0 1 1 15.433-1.96m-3.897-4.234a5.58 5.58 0 0 0-4.166-1.648c-3 .094-5.437 2.615-5.437 5.615a5.6 5.6 0 0 0 .394 2.08 1.125 1.125 0 0 1-.24 1.239l-5.404 5.41v2.156h1.5v-1.125a1.125 1.125 0 0 1 1.125-1.125h1.125v-1.125A1.125 1.125 0 0 1 9 15.376h1.781l.905-.904a1.13 1.13 0 0 1 1.24-.24c.66.263 1.364.396 2.074.394h.008c3 0 5.519-2.444 5.614-5.437a5.58 5.58 0 0 0-1.644-4.165" })
  ] });
});
c.displayName = "Key";
export {
  c as Key
};
//# sourceMappingURL=Key.js.map
