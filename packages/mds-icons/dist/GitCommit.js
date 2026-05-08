import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: o = "1em",
  title: i,
  titleId: t,
  ...e
}, a) => {
  const l = h(), r = i ? t ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: a, "aria-labelledby": r, ...e, children: [
    i ? /* @__PURE__ */ d("title", { id: r, children: i }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.875 10.876h-5.363a5.625 5.625 0 0 0-11.024 0H1.125a1.125 1.125 0 0 0 0 2.25h5.363a5.625 5.625 0 0 0 11.024 0h5.363a1.125 1.125 0 1 0 0-2.25M12 15.376a3.374 3.374 0 1 1 0-6.749 3.374 3.374 0 0 1 0 6.749" })
  ] });
});
s.displayName = "GitCommit";
export {
  s as GitCommit
};
//# sourceMappingURL=GitCommit.js.map
