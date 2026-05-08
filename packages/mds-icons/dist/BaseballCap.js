import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const v = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const s = m(), e = a ? o ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    a ? /* @__PURE__ */ l("title", { id: e, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M12 1.875A10.136 10.136 0 0 0 1.875 12v5.25a2.61 2.61 0 0 0 1.43 2.337 2.63 2.63 0 0 0 2.746-.22c1.093-.794 3.013-1.742 5.949-1.742s4.856.947 5.95 1.742a2.625 2.625 0 0 0 4.175-2.117V12A10.137 10.137 0 0 0 12 1.875M19.875 12v.175a16 16 0 0 0-3.12-1.34 16 16 0 0 0-2.2-6.282A7.89 7.89 0 0 1 19.876 12m-5.48-1.699a16.4 16.4 0 0 0-4.79 0A14.1 14.1 0 0 1 12 4.776a14.1 14.1 0 0 1 2.394 5.525m-4.95-5.748a16 16 0 0 0-2.2 6.282 16 16 0 0 0-3.12 1.34V12a7.89 7.89 0 0 1 5.32-7.447m10.229 13.032a.38.38 0 0 1-.402-.034c-1.366-.994-3.731-2.176-7.272-2.176-3.54 0-5.906 1.182-7.272 2.173a.38.38 0 0 1-.401.034.35.35 0 0 1-.202-.332v-2.424a13.875 13.875 0 0 1 15.75 0v2.424a.35.35 0 0 1-.201.332z" })
  ] });
});
v.displayName = "BaseballCap";
export {
  v as BaseballCap
};
//# sourceMappingURL=BaseballCap.js.map
