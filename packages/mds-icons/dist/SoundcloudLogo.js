import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as c } from "react";
const m = t(({
  size: r = "1em",
  title: d,
  titleId: a,
  ...i
}, e) => {
  const n = c(), l = d ? a ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": d ? void 0 : !0, role: d ? "img" : void 0, ref: e, "aria-labelledby": l, ...i, children: [
    d ? /* @__PURE__ */ o("title", { id: l, children: d }) : null,
    /* @__PURE__ */ o("g", { clipPath: "url(#a)", children: /* @__PURE__ */ o("path", { fill: "currentColor", d: "M3 11.25v4.5a1.125 1.125 0 0 1-2.25 0v-4.5a1.125 1.125 0 1 1 2.25 0m2.625-3.375A1.125 1.125 0 0 0 4.5 9v9a1.125 1.125 0 0 0 2.25 0V9a1.125 1.125 0 0 0-1.125-1.125m3.75-3.75A1.125 1.125 0 0 0 8.25 5.25V18a1.125 1.125 0 0 0 2.25 0V5.25a1.125 1.125 0 0 0-1.125-1.125m11.47 5.562a7.875 7.875 0 0 0-7.72-6.312 1.125 1.125 0 0 0 0 2.25 5.604 5.604 0 0 1 5.597 5.056 1.125 1.125 0 0 0 .906.992 2.625 2.625 0 0 1-.503 5.202h-6a1.125 1.125 0 1 0 0 2.25h6a4.875 4.875 0 0 0 1.72-9.438" }) }),
    /* @__PURE__ */ o("defs", { children: /* @__PURE__ */ o("clipPath", { id: "a", children: /* @__PURE__ */ o("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
m.displayName = "SoundcloudLogo";
export {
  m as SoundcloudLogo
};
//# sourceMappingURL=SoundcloudLogo.js.map
