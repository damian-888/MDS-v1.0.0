import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const m = c(), l = a ? o ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: l, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.565 4.732a6.643 6.643 0 0 0-9.707 0q-.482.507-.858 1.098a7 7 0 0 0-.858-1.098 6.643 6.643 0 0 0-9.707 0 1.125 1.125 0 0 0 .366 1.807l4.387 1.91a7.074 7.074 0 0 0-4.072 8.344 1.125 1.125 0 0 0 1.767.6l6.992-5.323V21a1.125 1.125 0 0 0 2.25 0v-8.93l6.988 5.325a1.125 1.125 0 0 0 1.767-.601A7.074 7.074 0 0 0 17.81 8.45l4.39-1.91a1.126 1.126 0 0 0 .366-1.807zm-16.276.143a4.42 4.42 0 0 1 3.223 1.406c.44.463.785 1.007 1.016 1.602L4.5 5.26a4.3 4.3 0 0 1 1.789-.385m-2.127 9.483a4.85 4.85 0 0 1 3.575-4.067 5 5 0 0 1 1.928-.122zm15.057-1.813c.325.557.534 1.173.616 1.813l-5.491-4.19a4.9 4.9 0 0 1 1.923.123 4.84 4.84 0 0 1 2.952 2.254m-5.747-4.662a4.9 4.9 0 0 1 1.016-1.602 4.42 4.42 0 0 1 3.223-1.406c.617 0 1.227.13 1.79.385z" })
  ] });
});
s.displayName = "TreePalm";
export {
  s as TreePalm
};
//# sourceMappingURL=TreePalm.js.map
