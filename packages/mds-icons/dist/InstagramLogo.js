import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, t) => {
  const l = h(), a = o ? e ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": a, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 6.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m4.5-12.375h-9A5.63 5.63 0 0 0 1.875 7.5v9A5.63 5.63 0 0 0 7.5 22.125h9a5.63 5.63 0 0 0 5.625-5.625v-9A5.63 5.63 0 0 0 16.5 1.875M19.875 16.5a3.375 3.375 0 0 1-3.375 3.375h-9A3.375 3.375 0 0 1 4.125 16.5v-9A3.375 3.375 0 0 1 7.5 4.125h9A3.375 3.375 0 0 1 19.875 7.5zm-1.5-9.375a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
s.displayName = "InstagramLogo";
export {
  s as InstagramLogo
};
//# sourceMappingURL=InstagramLogo.js.map
