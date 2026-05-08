import { jsxs as c, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const m = h(({
  size: l = "1em",
  title: a,
  titleId: e,
  ...d
}, i) => {
  const t = n(), o = a ? e ?? t : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...d, children: [
    a ? /* @__PURE__ */ r("title", { id: o, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M14.625 21.376a1.125 1.125 0 0 1-1.125 1.125h-3a1.125 1.125 0 1 1 0-2.25h3a1.125 1.125 0 0 1 1.125 1.125M12 10.876a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9.33 3.816-1.158 5.215a1.87 1.87 0 0 1-1.207 1.362 1.863 1.863 0 0 1-1.78-.293l-2.45-1.85h-5.47l-2.45 1.85a1.86 1.86 0 0 1-1.78.292 1.87 1.87 0 0 1-1.207-1.362l-1.16-5.214a1.88 1.88 0 0 1 .39-1.607l2.61-3.132c.1-1.173.373-2.325.81-3.418 1.245-3.117 3.47-5.072 4.373-5.767a1.875 1.875 0 0 1 2.297 0c.9.695 3.129 2.65 4.373 5.767.438 1.093.71 2.245.81 3.418l2.61 3.132a1.89 1.89 0 0 1 .39 1.607M9.544 16.876h4.914c1.829-3.347 2.156-6.542.974-9.506-.956-2.4-2.662-4.003-3.431-4.639-.769.636-2.475 2.239-3.431 4.639-1.184 2.964-.855 6.16.974 9.506m-2.114.817a15.8 15.8 0 0 1-1.587-4.434l-.937 1.125.992 4.466zm11.665-3.31-.938-1.125a15.8 15.8 0 0 1-1.586 4.435l1.531 1.156z" })
  ] });
});
m.displayName = "Rocket";
export {
  m as Rocket
};
//# sourceMappingURL=Rocket.js.map
