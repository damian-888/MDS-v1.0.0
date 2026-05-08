import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: i = "1em",
  title: r,
  titleId: e,
  ...a
}, l) => {
  const t = c(), o = r ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m3.967 9a4 4 0 0 0-.366-.885l2.704-2.704a7.83 7.83 0 0 1 1.488 3.589zM13.875 12a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0M12 19.875a7.875 7.875 0 1 1 4.714-14.18L14.009 8.4a4.125 4.125 0 1 0 1.958 4.726h3.826A7.886 7.886 0 0 1 12 19.875" })
  ] });
});
h.displayName = "Disc";
export {
  h as Disc
};
//# sourceMappingURL=Disc.js.map
