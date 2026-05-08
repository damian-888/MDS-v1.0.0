import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...d
}, l) => {
  const m = s(), a = r ? i ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M7.313 3.375a3.938 3.938 0 1 0 0 7.875 3.938 3.938 0 0 0 0-7.875m0 5.625a1.688 1.688 0 1 1 0-3.375 1.688 1.688 0 0 1 0 3.375m9.375 2.25a3.937 3.937 0 1 0 0-7.875 3.937 3.937 0 0 0 0 7.875m0-5.625a1.687 1.687 0 1 1 0 3.375 1.687 1.687 0 0 1 0-3.375M7.313 12.75a3.937 3.937 0 1 0 0 7.874 3.937 3.937 0 0 0 0-7.874m0 5.625a1.688 1.688 0 1 1 0-3.375 1.688 1.688 0 0 1 0 3.375m9.375-5.625a3.937 3.937 0 1 0 0 7.875 3.937 3.937 0 0 0 0-7.875m0 5.625a1.687 1.687 0 1 1 0-3.375 1.687 1.687 0 0 1 0 3.375" })
  ] });
});
c.displayName = "CirclesFour";
export {
  c as CirclesFour
};
//# sourceMappingURL=CirclesFour.js.map
