import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...n
}, o) => {
  const i = h(), d = r ? l ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": d, ...n, children: [
    r ? /* @__PURE__ */ a("title", { id: d, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20.25 2.625h-4.125a1.125 1.125 0 0 0 0 2.25h1.407L15.75 6.656l-1.454-1.451a1.127 1.127 0 0 0-1.593 1.594l1.454 1.451-.977.98a7.125 7.125 0 1 0 1.594 1.594l.976-.98 1.454 1.455a1.127 1.127 0 1 0 1.594-1.594L17.344 8.25l1.781-1.781v1.406a1.125 1.125 0 0 0 2.25 0V3.75a1.125 1.125 0 0 0-1.125-1.125M12.448 18.45a4.875 4.875 0 1 1-6.895-6.895 4.875 4.875 0 0 1 6.895 6.895" })
  ] });
});
m.displayName = "GenderTransgender";
export {
  m as GenderTransgender
};
//# sourceMappingURL=GenderTransgender.js.map
