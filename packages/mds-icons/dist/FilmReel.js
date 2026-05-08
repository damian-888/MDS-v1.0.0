import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...d
}, a) => {
  const m = h(), i = e ? o ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": i, ...d, children: [
    e ? /* @__PURE__ */ l("title", { id: i, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M21.75 19.876h-3.394A10.12 10.12 0 1 0 12 22.126h9.75a1.125 1.125 0 0 0 0-2.25M4.125 12A7.875 7.875 0 1 1 12 19.876a7.884 7.884 0 0 1-7.875-7.874m6-4.125a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0M12 18a1.875 1.875 0 1 1 0-3.75A1.875 1.875 0 0 1 12 18m2.25-6A1.875 1.875 0 1 1 18 12a1.875 1.875 0 0 1-3.75 0m-4.5 0A1.875 1.875 0 1 1 6 12a1.875 1.875 0 0 1 3.75 0" })
  ] });
});
s.displayName = "FilmReel";
export {
  s as FilmReel
};
//# sourceMappingURL=FilmReel.js.map
