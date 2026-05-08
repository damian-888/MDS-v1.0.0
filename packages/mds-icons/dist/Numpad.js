import { jsxs as t, jsx as m } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const h = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...e
}, i) => {
  const l = s(), d = a ? o ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": d, ...e, children: [
    a ? /* @__PURE__ */ m("title", { id: d, children: a }) : null,
    /* @__PURE__ */ m("path", { fill: "currentColor", d: "M7.875 4.5a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0M12 2.625a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75m6 3.75a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75m-12 1.5a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75m6 0a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75m6 0a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75m-12 5.25a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75m6 0a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75m0 5.25a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75m6-5.25a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75" })
  ] });
});
h.displayName = "Numpad";
export {
  h as Numpad
};
//# sourceMappingURL=Numpad.js.map
