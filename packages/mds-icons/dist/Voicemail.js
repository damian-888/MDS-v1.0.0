import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const m = n(({
  size: l = "1em",
  title: r,
  titleId: e,
  ...a
}, o) => {
  const h = c(), d = r ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": d, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: d, children: r }) : null,
    /* @__PURE__ */ i("g", { clipPath: "url(#a)", children: /* @__PURE__ */ i("path", { fill: "currentColor", d: "M18.375 6.375a5.625 5.625 0 0 0-4.5 9h-3.75a5.625 5.625 0 1 0-4.5 2.25h12.75a5.625 5.625 0 1 0 0-11.25M2.25 12A3.375 3.375 0 1 1 9 12a3.375 3.375 0 0 1-6.75 0m16.125 3.375a3.374 3.374 0 1 1 0-6.749 3.374 3.374 0 0 1 0 6.749" }) }),
    /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("clipPath", { id: "a", children: /* @__PURE__ */ i("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
m.displayName = "Voicemail";
export {
  m as Voicemail
};
//# sourceMappingURL=Voicemail.js.map
