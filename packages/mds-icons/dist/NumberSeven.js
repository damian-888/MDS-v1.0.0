import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: e,
  titleId: i,
  ...l
}, n) => {
  const a = s(), o = e ? i ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: n, "aria-labelledby": o, ...l, children: [
    e ? /* @__PURE__ */ d("title", { id: o, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m16.827 4.823-4.5 15a1.124 1.124 0 0 1-2.065.209 1.13 1.13 0 0 1-.085-.855l4.06-13.552H8.25a1.125 1.125 0 0 1 0-2.25h7.5a1.125 1.125 0 0 1 1.077 1.448" })
  ] });
});
h.displayName = "NumberSeven";
export {
  h as NumberSeven
};
//# sourceMappingURL=NumberSeven.js.map
