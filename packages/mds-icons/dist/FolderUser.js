import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const m = h(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, i) => {
  const s = n(), o = r ? d ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...l, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20.673 18.557a3.374 3.374 0 1 0-5.344 0 4.1 4.1 0 0 0-1.414 2.156A1.125 1.125 0 0 0 15 22.125a1.125 1.125 0 0 0 1.087-.836c.226-.833 1.008-1.414 1.913-1.414s1.688.581 1.913 1.414a1.125 1.125 0 0 0 2.174-.579 4.1 4.1 0 0 0-1.414-2.153M18 15.375a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m2.25-9h-7.745l-2.437-2.746A1.88 1.88 0 0 0 8.663 3H3.75a1.875 1.875 0 0 0-1.875 1.875v13.932a1.82 1.82 0 0 0 1.817 1.818h6.86a1.125 1.125 0 1 0 0-2.25H4.126v-9.75h15.75v1.5a1.125 1.125 0 1 0 2.25 0V8.25a1.875 1.875 0 0 0-1.875-1.875m-16.125 0V5.25h4.37l1 1.125z" })
  ] });
});
m.displayName = "FolderUser";
export {
  m as FolderUser
};
//# sourceMappingURL=FolderUser.js.map
