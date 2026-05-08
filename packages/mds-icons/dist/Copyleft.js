import { jsxs as a, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const f = s(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...l
}, t) => {
  const n = m(), e = o ? i ?? n : void 0;
  return /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": e, ...l, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875M16.875 12a4.875 4.875 0 0 1-8.774 2.926 1.125 1.125 0 1 1 1.798-1.351 2.625 2.625 0 1 0 0-3.15 1.125 1.125 0 1 1-1.798-1.35A4.875 4.875 0 0 1 16.875 12" })
  ] });
});
f.displayName = "Copyleft";
export {
  f as Copyleft
};
//# sourceMappingURL=Copyleft.js.map
