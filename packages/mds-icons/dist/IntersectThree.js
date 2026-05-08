import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...t
}, i) => {
  const l = s(), a = e ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: i, "aria-labelledby": a, ...t, children: [
    e ? /* @__PURE__ */ o("title", { id: a, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18.75 8.78v-.155a6.75 6.75 0 1 0-13.5 0v.156A6.75 6.75 0 1 0 12 20.467 6.75 6.75 0 1 0 18.75 8.78m-3.87 3.303a6.7 6.7 0 0 0-1.005-1.698 4.47 4.47 0 0 1 2.343-.18 4.5 4.5 0 0 1-1.342 1.877zM12 17.597a4.5 4.5 0 0 1-1.076-2.308 6.8 6.8 0 0 0 2.15 0A4.5 4.5 0 0 1 12 17.597m-4.214-7.392a4.47 4.47 0 0 1 2.344.18 6.7 6.7 0 0 0-1.005 1.697 4.5 4.5 0 0 1-1.339-1.877M12 13.125q-.424 0-.838-.08c.192-.51.476-.982.838-1.392.361.41.645.881.838 1.392a4.5 4.5 0 0 1-.838.08m0-9a4.51 4.51 0 0 1 4.45 3.836 6.73 6.73 0 0 0-4.45.822 6.73 6.73 0 0 0-4.45-.822A4.51 4.51 0 0 1 12 4.125m-7.875 10.5a4.49 4.49 0 0 1 1.623-3.457 6.8 6.8 0 0 0 2.877 3.301v.156a6.7 6.7 0 0 0 1.5 4.24 4.5 4.5 0 0 1-6-4.24m11.25 4.5a4.5 4.5 0 0 1-1.5-.26 6.7 6.7 0 0 0 1.5-4.24v-.156a6.8 6.8 0 0 0 2.88-3.301 4.5 4.5 0 0 1-2.88 7.957" })
  ] });
});
c.displayName = "IntersectThree";
export {
  c as IntersectThree
};
//# sourceMappingURL=IntersectThree.js.map
