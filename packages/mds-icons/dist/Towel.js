import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const s = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...i
}, l) => {
  const h = v(), e = o ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ a("title", { id: e, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.484 1.875H6.75A2.625 2.625 0 0 0 4.125 4.5v15.75A1.875 1.875 0 0 0 6 22.125h9.75a1.875 1.875 0 0 0 1.875-1.875V4.875a.75.75 0 0 1 .75-.75h.033a.78.78 0 0 1 .722.795v8.955a1.125 1.125 0 1 0 2.25 0V4.92a3.01 3.01 0 0 0-2.896-3.045M6.75 4.125h8.719a3 3 0 0 0-.094.75v11.25h-9V4.5a.375.375 0 0 1 .375-.375m-.375 15.75v-1.5h9v1.5z" })
  ] });
});
s.displayName = "Towel";
export {
  s as Towel
};
//# sourceMappingURL=Towel.js.map
