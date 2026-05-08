import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const s = n(({
  size: a = "1em",
  title: l,
  titleId: i,
  ...d
}, o) => {
  const t = c(), e = l ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: o, "aria-labelledby": e, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: e, children: l }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M22.875 12.377A1.125 1.125 0 0 0 21.75 13.5v1.126H18.47l-1.345-1.345 4.455-4.455a1.875 1.875 0 0 0 0-2.651l-5.25-5.25a1.875 1.875 0 0 0-2.655 0L.602 14.108a2.062 2.062 0 0 0 1.46 3.518h3.16l2.45 2.451a1.873 1.873 0 0 0 2.653 0l5.204-5.204 1.455 1.454a1.86 1.86 0 0 0 1.327.55h3.44v1.125a1.125 1.125 0 0 0 2.25 0v-4.5a1.125 1.125 0 0 0-1.126-1.126M15 2.783l1.407 1.406L5.223 15.377h-2.71zM9 18.221 7.28 16.5 18 5.783l1.72 1.72-4.985 4.984z" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
s.displayName = "SecurityCamera";
export {
  s as SecurityCamera
};
//# sourceMappingURL=SecurityCamera.js.map
