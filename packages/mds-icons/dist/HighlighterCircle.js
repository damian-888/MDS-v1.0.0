import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const v = n(({
  size: i = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const t = m(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.16 4.837A10.125 10.125 0 1 0 4.84 19.156a10.125 10.125 0 0 0 14.32-14.32m-6.035 7.913h-2.25v-2.307l2.25-1.125zm-3.75 6.68V15h5.25v4.43c-1.7.595-3.55.595-5.25 0m8.194-1.86q-.33.327-.694.614v-3.559a1.875 1.875 0 0 0-1.5-1.837V7.5a1.125 1.125 0 0 0-1.628-1.006l-4.5 2.25a1.13 1.13 0 0 0-.622 1.006v3.039a1.875 1.875 0 0 0-1.5 1.836v3.563a7.875 7.875 0 1 1 10.444-.614z" })
  ] });
});
v.displayName = "HighlighterCircle";
export {
  v as HighlighterCircle
};
//# sourceMappingURL=HighlighterCircle.js.map
