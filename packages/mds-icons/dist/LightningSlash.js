import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const g = h(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...d
}, e) => {
  const n = s(), i = l ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": i, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: i, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M5.333 2.994a1.125 1.125 0 1 0-1.665 1.513L7.116 8.3l-3.438 3.683a1.125 1.125 0 0 0 .404 1.812l4.798 1.92-.993 6.619a1.125 1.125 0 0 0 1.935.937l5.522-5.916 3.324 3.656a1.125 1.125 0 0 0 1.665-1.513zm5.317 16.09.588-3.916a1.125 1.125 0 0 0-.695-1.212l-4.098-1.64 2.189-2.343 5.192 5.711zM10.445 6.38a1.125 1.125 0 0 1-.055-1.593L14.178.733a1.125 1.125 0 0 1 1.935.937l-.993 6.617 4.798 1.92a1.125 1.125 0 0 1 .405 1.812l-1.577 1.687a1.125 1.125 0 1 1-1.646-1.535l.456-.489-4.099-1.64a1.125 1.125 0 0 1-.695-1.21l.588-3.917-1.312 1.406a1.125 1.125 0 0 1-1.593.06" })
  ] });
});
g.displayName = "LightningSlash";
export {
  g as LightningSlash
};
//# sourceMappingURL=LightningSlash.js.map
