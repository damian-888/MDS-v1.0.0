import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const m = n(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...h
}, e) => {
  const i = c(), l = a ? d ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": l, ...h, children: [
    a ? /* @__PURE__ */ o("title", { id: l, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M11.25 16.5a1.125 1.125 0 0 1-1.125 1.125H7.5a1.125 1.125 0 1 1 0-2.25h2.625A1.125 1.125 0 0 1 11.25 16.5m5.25-1.125h-2.625a1.125 1.125 0 1 0 0 2.25H16.5a1.125 1.125 0 1 0 0-2.25m6.375 4.875a1.125 1.125 0 0 1-1.125 1.125H2.25a1.125 1.125 0 1 1 0-2.25h.375V8.25a1.125 1.125 0 0 1 1.8-.9l4.2 3.15V8.25a1.125 1.125 0 0 1 1.8-.9l3.125 2.344.994-6.96a1.884 1.884 0 0 1 1.857-1.609h1.698a1.884 1.884 0 0 1 1.857 1.61l1.406 9.856c0 .009.011.125.011.159v6.375h.375a1.126 1.126 0 0 1 1.127 1.125m-7.272-9.016.522.391h2.828l-1.179-8.25h-1.048zM4.875 19.125h14.25v-5.25H15.75c-.243 0-.48-.079-.675-.225l-1.348-1.01h-.006l-2.846-2.14v2.25a1.125 1.125 0 0 1-1.8.9l-4.2-3.15z" })
  ] });
});
m.displayName = "Factory";
export {
  m as Factory
};
//# sourceMappingURL=Factory.js.map
