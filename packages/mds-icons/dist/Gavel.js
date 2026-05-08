import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...d
}, i) => {
  const t = s(), r = l ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m23.076 10.675-1.5-1.5a1.875 1.875 0 0 0-2.162-.352l-4.237-4.237a1.88 1.88 0 0 0-.351-2.162l-1.5-1.5a1.875 1.875 0 0 0-2.651 0l-6 6a1.875 1.875 0 0 0 0 2.651l1.5 1.5a1.875 1.875 0 0 0 2.156.356l-5.578 5.574a3 3 0 0 0 4.243 4.243l5.567-5.571a1.875 1.875 0 0 0 .357 2.15l1.5 1.5a1.873 1.873 0 0 0 2.652 0l6-6a1.875 1.875 0 0 0 0-2.652zM7.5 9.22l-.971-.97L12 2.78l.97.97zM5.404 19.657a.75.75 0 0 1-1.06-1.061l5.58-5.58 1.06 1.061zm8.69-5.652L9.997 9.906l3.656-3.656 4.099 4.099zm1.655 3.469-.969-.974 5.47-5.469.97.97z" })
  ] });
});
h.displayName = "Gavel";
export {
  h as Gavel
};
//# sourceMappingURL=Gavel.js.map
