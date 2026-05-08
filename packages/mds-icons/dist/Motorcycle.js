import { jsxs as c, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const h = n(), o = a ? d ?? h : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    a ? /* @__PURE__ */ l("title", { id: o, children: a }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.5 10.5h-.159l-.328-1.106q.24-.022.487-.023a1.125 1.125 0 0 0 0-2.25h-1.16l-.761-2.57a1.13 1.13 0 0 0-1.08-.801h-3a1.125 1.125 0 1 0 0 2.25h2.157l.334 1.125h-1.74c-1.823 0-3.312.433-4.305 1.253a1.13 1.13 0 0 1-1.178.143C7.537 7.958 3.406 6.177 2.987 6l-.494-.21s-.393-.165-.618-.165a1.125 1.125 0 0 0-.433 2.164c.162.068 4.094 1.734 6.394 2.78.442.2.921.304 1.406.303a3.35 3.35 0 0 0 2.136-.758c.538-.444 1.46-.702 2.615-.735a7.88 7.88 0 0 0-2.288 4.5H8.857a4.5 4.5 0 1 0 0 2.25h3.893a1.125 1.125 0 0 0 1.125-1.125 5.62 5.62 0 0 1 2.98-4.963l.329 1.106A4.5 4.5 0 1 0 19.5 10.5m-15 5.625h1.947a2.25 2.25 0 1 1 0-2.25H4.5a1.125 1.125 0 1 0 0 2.25m15 1.125a2.25 2.25 0 0 1-1.632-3.797l.553 1.867a1.125 1.125 0 0 0 2.158-.64l-.554-1.867a2.25 2.25 0 0 1-.525 4.437" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
s.displayName = "Motorcycle";
export {
  s as Motorcycle
};
//# sourceMappingURL=Motorcycle.js.map
