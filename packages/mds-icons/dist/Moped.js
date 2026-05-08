import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const p = n(({
  size: l = "1em",
  title: a,
  titleId: e,
  ...h
}, i) => {
  const o = c(), d = a ? e ?? o : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": d, ...h, children: [
    a ? /* @__PURE__ */ r("title", { id: d, children: a }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M19.875 11.625q-.172 0-.34.015L16.43 3.355a1.125 1.125 0 0 0-1.054-.73h-3a1.125 1.125 0 0 0 0 2.25h2.22l2.834 7.556a4.15 4.15 0 0 0-1.398 1.819h-2.737l-2.115-5.645a1.125 1.125 0 0 0-1.054-.73h-7.5a1.125 1.125 0 0 0 0 2.25H3v.274a5.64 5.64 0 0 0-3 4.976A1.125 1.125 0 0 0 1.125 16.5h.444a4.125 4.125 0 0 0 8.112 0h6.138a4.125 4.125 0 1 0 4.056-4.875M4.5 12.192a1.125 1.125 0 0 0 .75-1.061v-1.006h4.095l1.547 4.125H2.443A3.37 3.37 0 0 1 4.5 12.192m1.125 5.433A1.88 1.88 0 0 1 3.908 16.5h3.435a1.88 1.88 0 0 1-1.718 1.125m14.25 0a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
p.displayName = "Moped";
export {
  p as Moped
};
//# sourceMappingURL=Moped.js.map
