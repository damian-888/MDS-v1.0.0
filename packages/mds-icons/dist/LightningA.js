import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...d
}, e) => {
  const n = m(), i = l ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": i, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: i, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M16.853 10.382a1.12 1.12 0 0 0-.642-.802l-4.398-1.976 1.21-5.095a1.125 1.125 0 0 0-1.92-1.024l-8.928 9.643a1.125 1.125 0 0 0 .364 1.79l4.406 1.977-1.215 5.094a1.125 1.125 0 0 0 1.921 1.025l8.924-9.644a1.12 1.12 0 0 0 .278-.988m-7.946 5.96.435-1.833a1.125 1.125 0 0 0-.634-1.286l-3.821-1.716 4.957-5.35L9.41 7.99a1.125 1.125 0 0 0 .63 1.29l3.822 1.716zm13.847 3.404-3.375-6.75a1.125 1.125 0 0 0-2.013 0l-3.375 6.75a1.126 1.126 0 1 0 2.012 1.006l.438-.877h3.86l.439.877a1.125 1.125 0 0 0 2.013-1.006m-5.184-2.121.805-1.61.805 1.61z" })
  ] });
});
s.displayName = "LightningA";
export {
  s as LightningA
};
//# sourceMappingURL=LightningA.js.map
