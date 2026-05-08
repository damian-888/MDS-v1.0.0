import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as c } from "react";
const f = h(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, o) => {
  const n = c(), i = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": i, ...e, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "m23.062 10.639-9.699-9.7a1.93 1.93 0 0 0-2.726 0l-9.7 9.7a1.93 1.93 0 0 0 0 2.726l9.7 9.7a1.93 1.93 0 0 0 2.726 0l9.7-9.7a1.93 1.93 0 0 0 0-2.726M12 21.243l-9.241-9.241 9.24-9.241L21.242 12zm.704-11.445a1.127 1.127 0 0 1 1.594-1.594l2.25 2.25a1.124 1.124 0 0 1 0 1.594l-2.25 2.25a1.127 1.127 0 0 1-1.594-1.594l.327-.327H10.5a1.125 1.125 0 0 0-1.125 1.125v.375a1.125 1.125 0 1 1-2.25 0v-.375a3.375 3.375 0 0 1 3.375-3.375h2.531z" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
f.displayName = "TrafficSign";
export {
  f as TrafficSign
};
//# sourceMappingURL=TrafficSign.js.map
