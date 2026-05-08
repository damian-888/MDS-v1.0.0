import { jsxs as s, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, h) => {
  const l = n(), a = r ? d ?? l : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": a, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: a, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M13.875 16.5a1.125 1.125 0 0 1-1.125 1.125h-1.5a1.125 1.125 0 1 1 0-2.25h1.5a1.125 1.125 0 0 1 1.125 1.125M11.25 8.625h1.5a1.125 1.125 0 0 0 0-2.25h-1.5a1.125 1.125 0 0 0 0 2.25m9.375-4.875v16.5a1.875 1.875 0 0 1-1.875 1.875H5.25a1.875 1.875 0 0 1-1.875-1.875V3.75A1.875 1.875 0 0 1 5.25 1.875h13.5a1.875 1.875 0 0 1 1.875 1.875m-15 .375v6.75h12.75v-6.75zm12.75 15.75v-6.75H5.625v6.75z" })
  ] });
});
m.displayName = "Dresser";
export {
  m as Dresser
};
//# sourceMappingURL=Dresser.js.map
