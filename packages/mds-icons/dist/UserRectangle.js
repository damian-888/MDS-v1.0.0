import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const c = s(({
  size: r = "1em",
  title: e,
  titleId: d,
  ...i
}, l) => {
  const t = h(), a = e ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": a, ...i, children: [
    e ? /* @__PURE__ */ o("title", { id: a, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875M9.375 12a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0M12 16.875a5.6 5.6 0 0 1 3.83 1.5H8.17a5.6 5.6 0 0 1 3.83-1.5m7.875 1.5h-1.166a7.82 7.82 0 0 0-3.24-2.953 4.876 4.876 0 1 0-6.938 0 7.82 7.82 0 0 0-3.24 2.953H4.125V5.625h15.75z" })
  ] });
});
c.displayName = "UserRectangle";
export {
  c as UserRectangle
};
//# sourceMappingURL=UserRectangle.js.map
