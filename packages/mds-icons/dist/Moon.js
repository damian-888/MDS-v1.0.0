import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...l
}, n) => {
  const a = m(), d = o ? i ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: n, "aria-labelledby": d, ...l, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.16 13.067a1.12 1.12 0 0 0-1.126-.281 7.88 7.88 0 0 1-9.822-9.826 1.125 1.125 0 0 0-1.406-1.406A10.2 10.2 0 0 0 4.658 5.16a10.125 10.125 0 0 0 8.092 16.212 10.04 10.04 0 0 0 6.087-2.033 10.2 10.2 0 0 0 3.604-5.15 1.13 1.13 0 0 0-.282-1.123m-4.677 4.476A7.875 7.875 0 1 1 8.65 4.526q-.025.36-.025.722a10.136 10.136 0 0 0 10.848 10.1 8 8 0 0 1-1.99 2.195" })
  ] });
});
h.displayName = "Moon";
export {
  h as Moon
};
//# sourceMappingURL=Moon.js.map
