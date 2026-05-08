import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const c = s(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, l) => {
  const t = v(), d = o ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    o ? /* @__PURE__ */ a("title", { id: d, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.25 1.875A1.125 1.125 0 0 0 16.125 3v.396a6.37 6.37 0 0 0-10.5 4.854v2.25a6.37 6.37 0 0 0 10.5 4.855v.395A4.13 4.13 0 0 1 12 19.875c-1.406 0-2.84-.71-3.578-1.769a1.125 1.125 0 0 0-1.845 1.288c1.157 1.659 3.286 2.731 5.423 2.731a6.38 6.38 0 0 0 6.375-6.375V3a1.125 1.125 0 0 0-1.125-1.125M12 14.625A4.13 4.13 0 0 1 7.875 10.5V8.25a4.125 4.125 0 0 1 8.25 0v2.25A4.13 4.13 0 0 1 12 14.625" })
  ] });
});
c.displayName = "GoodreadsLogo";
export {
  c as GoodreadsLogo
};
//# sourceMappingURL=GoodreadsLogo.js.map
