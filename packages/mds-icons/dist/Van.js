import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const t = m(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, h) => {
  const v = n(), o = a ? e ?? v : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: h, "aria-labelledby": o, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: o, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M23.73 9.767 19.456 4.79a1.87 1.87 0 0 0-1.433-.665H3A1.875 1.875 0 0 0 1.125 6v10.5A1.875 1.875 0 0 0 3 18.375h1.318a3.375 3.375 0 0 0 6.364 0h3.761a3.375 3.375 0 0 0 6.364 0h1.318A1.875 1.875 0 0 0 24 16.5v-6a1.13 1.13 0 0 0-.27-.733m-3.303-.392H16.5v-3h1.352zm-10.677 0v-3h4.5v3zm-2.25-3v3H3.375v-3zm0 12a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m10.125 0a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m3.182-2.25a3.375 3.375 0 0 0-6.364 0h-3.761a3.375 3.375 0 0 0-6.364 0h-.943v-4.5H21.75v4.5z" })
  ] });
});
t.displayName = "Van";
export {
  t as Van
};
//# sourceMappingURL=Van.js.map
