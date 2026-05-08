import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...d
}, e) => {
  const n = h(), r = l ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ i("title", { id: r, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M10.985 17.695a1.124 1.124 0 0 1 0 1.593l-.48.48a5.46 5.46 0 0 1-3.887 1.607 5.495 5.495 0 0 1-3.886-9.382l3.257-3.258a5.498 5.498 0 0 1 9.24 2.635 1.125 1.125 0 1 1-2.19.51 3.248 3.248 0 0 0-5.459-1.554l-3.257 3.258a3.245 3.245 0 1 0 4.589 4.59l.479-.48a1.124 1.124 0 0 1 1.594 0m10.28-13.46a5.5 5.5 0 0 0-7.775 0l-.479.479a1.127 1.127 0 0 0 1.594 1.594l.48-.48a3.248 3.248 0 0 1 4.594 4.593l-3.264 3.254a3.22 3.22 0 0 1-2.296.95 3.246 3.246 0 0 1-3.158-2.505 1.125 1.125 0 0 0-2.192.51 5.5 5.5 0 0 0 5.346 4.245h.004a5.46 5.46 0 0 0 3.888-1.61l3.258-3.257a5.496 5.496 0 0 0 0-7.773" })
  ] });
});
m.displayName = "Link";
export {
  m as Link
};
//# sourceMappingURL=Link.js.map
