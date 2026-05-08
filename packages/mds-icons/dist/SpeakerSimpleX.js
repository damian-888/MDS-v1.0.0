import { jsxs as h, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const p = n(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...d
}, o) => {
  const t = c(), a = r ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": a, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: a, children: r }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M15.494 1.99a1.13 1.13 0 0 0-1.185.122L7.864 7.125H3.75A1.875 1.875 0 0 0 1.875 9v6a1.875 1.875 0 0 0 1.875 1.875h4.114l6.445 5.013A1.125 1.125 0 0 0 16.125 21V3a1.13 1.13 0 0 0-.63-1.01M13.875 18.7l-4.934-3.838a1.13 1.13 0 0 0-.691-.237H4.125v-5.25H8.25c.25 0 .493-.084.69-.237L13.876 5.3zm10.17-5.245a1.126 1.126 0 1 1-1.593 1.594L21 13.594l-1.454 1.455a1.127 1.127 0 1 1-1.594-1.594L19.406 12l-1.455-1.454a1.126 1.126 0 1 1 1.594-1.594L21 10.406l1.454-1.454a1.126 1.126 0 1 1 1.594 1.594L22.594 12z" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
p.displayName = "SpeakerSimpleX";
export {
  p as SpeakerSimpleX
};
//# sourceMappingURL=SpeakerSimpleX.js.map
