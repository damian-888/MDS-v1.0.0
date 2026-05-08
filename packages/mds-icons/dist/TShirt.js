import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const s = n(({
  size: h = "1em",
  title: l,
  titleId: a,
  ...d
}, e) => {
  const o = c(), i = l ? a ?? o : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": i, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: i, children: l }) : null,
    /* @__PURE__ */ r("g", { clipPath: "url(#a)", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M23.079 5.428 18.57 2.78a1.1 1.1 0 0 0-.57-.155h-3a1.125 1.125 0 0 0-1.126 1.125 1.875 1.875 0 1 1-3.75 0A1.125 1.125 0 0 0 9 2.625H6c-.2 0-.397.054-.569.156L.921 5.428a1.89 1.89 0 0 0-.733 2.447l1.678 3.45a1.84 1.84 0 0 0 1.666 1.05h1.343V19.5a1.875 1.875 0 0 0 1.875 1.875h10.5a1.875 1.875 0 0 0 1.875-1.875v-7.125h1.343a1.84 1.84 0 0 0 1.664-1.047l1.68-3.453a1.89 1.89 0 0 0-.733-2.447M3.785 10.125 2.359 7.193 4.875 5.72v4.406zm13.09 9h-9.75V4.875h.907a4.125 4.125 0 0 0 7.938 0h.905zm3.34-9h-1.09V5.719l2.515 1.477z" }) }),
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("clipPath", { id: "a", children: /* @__PURE__ */ r("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
s.displayName = "TShirt";
export {
  s as TShirt
};
//# sourceMappingURL=TShirt.js.map
