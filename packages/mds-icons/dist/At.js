import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...t
}, a) => {
  const l = s(), d = r ? i ?? l : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": d, ...t, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M12 1.875a10.125 10.125 0 0 0 0 20.25c2.088 0 4.283-.63 5.872-1.687a1.125 1.125 0 1 0-1.245-1.875c-1.22.809-2.99 1.312-4.627 1.312A7.875 7.875 0 1 1 19.875 12c0 .87-.157 1.601-.44 2.058-.247.397-.562.567-1.06.567s-.813-.17-1.06-.567c-.282-.457-.44-1.187-.44-2.058V8.25a1.125 1.125 0 0 0-2.202-.324 4.875 4.875 0 1 0 .83 7.46c.65.955 1.635 1.489 2.872 1.489 2.313 0 3.75-1.867 3.75-4.875A10.137 10.137 0 0 0 12 1.875m0 12.75a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25" })
  ] });
});
m.displayName = "At";
export {
  m as At
};
//# sourceMappingURL=At.js.map
