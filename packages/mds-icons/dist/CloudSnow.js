import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, l) => {
  const n = h(), d = o ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    o ? /* @__PURE__ */ a("title", { id: d, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.25 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-6-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m15.375-9.375a7.51 7.51 0 0 1-7.5 7.5h-7.5a5.25 5.25 0 1 1 .6-10.466 7.507 7.507 0 0 1 14.4 2.966m-2.25 0a5.256 5.256 0 0 0-10.5-.31 1.127 1.127 0 0 1-2.25-.13q.009-.156.024-.31h-.024a3 3 0 1 0 0 6h7.5a5.256 5.256 0 0 0 5.25-5.25" })
  ] });
});
s.displayName = "CloudSnow";
export {
  s as CloudSnow
};
//# sourceMappingURL=CloudSnow.js.map
