import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as c } from "react";
const m = h(({
  size: l = "1em",
  title: r,
  titleId: i,
  ...o
}, e) => {
  const t = c(), a = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: e, "aria-labelledby": a, ...o, children: [
    r ? /* @__PURE__ */ d("title", { id: a, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.5 6.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.375.75a1.12 1.12 0 0 1-.5.938l-1.75 1.164v1.648A10.136 10.136 0 0 1 10.5 21.375H2.25a1.875 1.875 0 0 1-1.462-3.047l.014-.017 7.823-9.388V7.208c0-3.338 2.678-6.067 5.97-6.083h.03a5.995 5.995 0 0 1 5.68 4.058l2.07 1.38a1.12 1.12 0 0 1 .5.937m-3.153 0-1.002-.668a1.13 1.13 0 0 1-.469-.657 3.75 3.75 0 0 0-3.626-2.8h-.018c-2.058.01-3.731 1.73-3.731 3.833V9.33c0 .264-.093.519-.262.72l-7.56 9.075h1.92l6.537-7.845a1.126 1.126 0 0 1 2.005.61 1.12 1.12 0 0 1-.277.83l-5.337 6.405H10.5a7.883 7.883 0 0 0 7.875-7.875V9a1.13 1.13 0 0 1 .501-.937z" })
  ] });
});
m.displayName = "Bird";
export {
  m as Bird
};
//# sourceMappingURL=Bird.js.map
