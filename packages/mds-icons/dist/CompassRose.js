import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const h = m(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const s = n(), o = a ? d ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    a ? /* @__PURE__ */ l("title", { id: o, children: a }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "m23.156 10.912-1.92-.5a9.4 9.4 0 0 0-7.643-7.651L13.088.844a1.125 1.125 0 0 0-2.177 0l-.5 1.92a9.4 9.4 0 0 0-7.651 7.65l-1.917.498a1.125 1.125 0 0 0 0 2.177l1.917.505a9.4 9.4 0 0 0 7.65 7.651l.501 1.912a1.125 1.125 0 0 0 2.177 0l.505-1.916a9.4 9.4 0 0 0 7.647-7.647l1.916-.505a1.125 1.125 0 0 0 0-2.177M18.76 9.766l-3.592-.938-.937-3.591a7.16 7.16 0 0 1 4.532 4.529zm-7.763-.355L12 5.583l.998 3.828-.998.996zM12 13.594l.998.999L12 18.419 11 14.59zm-2.59-2.589.996.996-.998.998-3.826-.998zm5.18 1.997L13.592 12l.999-.999 3.826.999zM9.764 5.239l-.938 3.592-3.591.937a7.16 7.16 0 0 1 4.529-4.531zm-4.53 9 3.592.938.938 3.592a7.15 7.15 0 0 1-4.53-4.533zm9 4.53.938-3.592 3.592-.938a7.16 7.16 0 0 1-4.53 4.526z" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
h.displayName = "CompassRose";
export {
  h as CompassRose
};
//# sourceMappingURL=CompassRose.js.map
