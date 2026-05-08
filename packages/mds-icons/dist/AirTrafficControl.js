import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...h
}, d) => {
  const e = v(), l = r ? i ?? e : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...h, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21.786 6.424a1.88 1.88 0 0 0-1.536-.799h-7.125v-2.25h1.125a1.125 1.125 0 0 0 0-2.25h-4.5a1.125 1.125 0 0 0 0 2.25h1.125v2.25H3.75A1.875 1.875 0 0 0 1.988 8.14l2.455 6.75a1.88 1.88 0 0 0 1.762 1.235h2.42v5.625a1.125 1.125 0 1 0 2.25 0v-5.625h2.25v5.625a1.125 1.125 0 1 0 2.25 0v-5.625h2.42a1.88 1.88 0 0 0 1.762-1.235l2.456-6.75a1.87 1.87 0 0 0-.227-1.716m-11.098 7.451-1.09-6h4.804l-1.09 6zm-6.402-6h3.027l1.091 6H6.469zm13.246 6h-1.934l1.09-6h3.025z" })
  ] });
});
m.displayName = "AirTrafficControl";
export {
  m as AirTrafficControl
};
//# sourceMappingURL=AirTrafficControl.js.map
