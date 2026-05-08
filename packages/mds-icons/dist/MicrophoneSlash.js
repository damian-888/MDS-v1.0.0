import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const c = h(({
  size: o = "1em",
  title: a,
  titleId: e,
  ...i
}, d) => {
  const n = s(), r = a ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ l("title", { id: r, children: a }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M5.332 3.744a1.125 1.125 0 1 0-1.665 1.513l3.458 3.804V12a4.875 4.875 0 0 0 6.76 4.5l1.056 1.161a6.3 6.3 0 0 1-2.941.713 6.38 6.38 0 0 1-6.375-6.374 1.125 1.125 0 1 0-2.25 0 8.64 8.64 0 0 0 7.5 8.551V22.5a1.125 1.125 0 1 0 2.25 0v-1.947a8.5 8.5 0 0 0 3.367-1.188l2.175 2.392a1.125 1.125 0 0 0 1.665-1.513zM12 14.625a2.625 2.625 0 0 1-2.625-2.624v-.47l2.803 3.084c-.06.01-.118.01-.178.01m5.906-.226A6.3 6.3 0 0 0 18.375 12a1.125 1.125 0 1 1 2.25 0 8.6 8.6 0 0 1-.632 3.244 1.125 1.125 0 0 1-2.084-.843zM8.034 3.165A4.875 4.875 0 0 1 16.874 6v5.3a1.125 1.125 0 0 1-2.25 0v-5.3a2.625 2.625 0 0 0-4.76-1.527 1.126 1.126 0 0 1-1.83-1.312z" })
  ] });
});
c.displayName = "MicrophoneSlash";
export {
  c as MicrophoneSlash
};
//# sourceMappingURL=MicrophoneSlash.js.map
