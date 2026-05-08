import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const c = t(({
  size: o = "1em",
  title: e,
  titleId: l,
  ...a
}, d) => {
  const m = n(), r = e ? l ?? m : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": r, ...a, children: [
    e ? /* @__PURE__ */ i("title", { id: r, children: e }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m7.793 9h-2.96a13.5 13.5 0 0 0-2-6.221 7.9 7.9 0 0 1 4.96 6.221M12 19.406c-.877-1.013-2.293-3.106-2.573-6.281h5.15a11.2 11.2 0 0 1-1.604 4.947q-.432.707-.973 1.334m-2.573-8.531c.14-1.752.689-3.446 1.604-4.947q.43-.707.969-1.334c.877 1.013 2.293 3.106 2.573 6.281zm-.26-6.221a13.5 13.5 0 0 0-2 6.221h-2.96a7.9 7.9 0 0 1 4.96-6.221m-4.96 8.471h2.96a13.5 13.5 0 0 0 2 6.221 7.9 7.9 0 0 1-4.96-6.221m10.625 6.221a13.5 13.5 0 0 0 2.002-6.221h2.96a7.9 7.9 0 0 1-4.962 6.221" })
  ] });
});
c.displayName = "GlobeSimple";
export {
  c as GlobeSimple
};
//# sourceMappingURL=GlobeSimple.js.map
