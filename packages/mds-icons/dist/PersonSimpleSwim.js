import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as c } from "react";
const s = t(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, l) => {
  const m = c(), i = r ? a ?? m : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m8.478 10.181.585-.585a7.83 7.83 0 0 0-3.79-.971H3.75a1.125 1.125 0 0 1 0-2.25h1.522a10.06 10.06 0 0 1 7.159 2.966l3.773 3.774c1.007.025 2.073-.342 3.328-1.381a1.126 1.126 0 1 1 1.436 1.731c-1.704 1.413-3.244 1.91-4.642 1.91-1.852 0-3.455-.87-4.864-1.636-2.349-1.276-4.205-2.284-6.994.03a1.125 1.125 0 1 1-1.436-1.733c2.037-1.69 3.84-2.068 5.446-1.855m4.647-3.431a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0m2.25 0a1.125 1.125 0 1 0 2.25 0 1.125 1.125 0 0 0-2.25 0m4.157 10.234c-2.79 2.313-4.646 1.305-6.995.028-2.47-1.34-5.545-3.01-9.505.275a1.124 1.124 0 1 0 1.436 1.731c2.789-2.312 4.645-1.305 6.994-.028 1.407.764 3.012 1.635 4.864 1.635 1.398 0 2.938-.496 4.642-1.909a1.127 1.127 0 0 0-.614-1.986 1.12 1.12 0 0 0-.822.254" })
  ] });
});
s.displayName = "PersonSimpleSwim";
export {
  s as PersonSimpleSwim
};
//# sourceMappingURL=PersonSimpleSwim.js.map
