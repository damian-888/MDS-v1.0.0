import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...o
}, d) => {
  const s = h(), a = r ? l ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    r ? /* @__PURE__ */ i("title", { id: a, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M15.375 5.25A1.125 1.125 0 0 1 16.5 4.125h1.125V3a1.125 1.125 0 1 1 2.25 0v1.125H21a1.125 1.125 0 1 1 0 2.25h-1.125V7.5a1.125 1.125 0 1 1-2.25 0V6.375H16.5a1.125 1.125 0 0 1-1.125-1.125m6.61 5.063a10.114 10.114 0 1 1-8.298-8.298 1.125 1.125 0 1 1-.375 2.219A7.87 7.87 0 0 0 5.817 16.87a7.8 7.8 0 0 1 2.719-2.196 4.875 4.875 0 1 1 6.937 0 7.8 7.8 0 0 1 2.719 2.195A7.83 7.83 0 0 0 19.875 12q0-.661-.109-1.312a1.125 1.125 0 1 1 2.22-.375M12 13.875a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25m0 6a7.83 7.83 0 0 0 4.54-1.446 5.624 5.624 0 0 0-9.08 0A7.83 7.83 0 0 0 12 19.875" })
  ] });
});
m.displayName = "UserCirclePlus";
export {
  m as UserCirclePlus
};
//# sourceMappingURL=UserCirclePlus.js.map
