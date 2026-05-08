import { jsxs as t, jsx as n } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const i = s(), l = r ? o ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ n("title", { id: l, children: r }) : null,
    /* @__PURE__ */ n("path", { fill: "currentColor", d: "m22.87 8.687-17.25-6A1.125 1.125 0 0 0 4.124 3.75v16.5a1.125 1.125 0 0 0 2.25 0v-3.7l16.494-5.738a1.124 1.124 0 0 0 0-2.125m-16.495 5.48V5.332l12.7 4.418z" })
  ] });
});
h.displayName = "FlagPennant";
export {
  h as FlagPennant
};
//# sourceMappingURL=FlagPennant.js.map
