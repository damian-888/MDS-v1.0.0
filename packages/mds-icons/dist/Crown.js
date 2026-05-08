import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const n = m(), a = l ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    l ? /* @__PURE__ */ o("title", { id: a, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M23.625 7.5A3 3 0 1 0 18 8.947l-1.955 2.405-1.905-4.379a3 3 0 1 0-4.28 0l-1.903 4.38L6 8.947a3 3 0 1 0-3.281 1.479l1.312 7.88a1.87 1.87 0 0 0 1.855 1.567h12.229a1.87 1.87 0 0 0 1.854-1.566l1.313-7.881a3.005 3.005 0 0 0 2.343-2.928m-3-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M12 4.123a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M3.375 6.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m14.422 10.875H6.204l-1.02-6.114 2.193 2.699a1.126 1.126 0 0 0 1.904-.26l2.642-6.075h.154l2.642 6.074a1.124 1.124 0 0 0 1.904.26l2.194-2.698z" })
  ] });
});
s.displayName = "Crown";
export {
  s as Crown
};
//# sourceMappingURL=Crown.js.map
