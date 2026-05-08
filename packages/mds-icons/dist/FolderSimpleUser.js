import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, i) => {
  const s = h(), l = r ? d ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: l, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.673 18.557a3.374 3.374 0 1 0-5.344 0 4.1 4.1 0 0 0-1.414 2.156A1.125 1.125 0 0 0 15 22.125a1.125 1.125 0 0 0 1.087-.836c.226-.833 1.008-1.414 1.913-1.414s1.688.581 1.913 1.414a1.125 1.125 0 0 0 2.174-.579 4.1 4.1 0 0 0-1.414-2.153M18 15.375a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m4.125-7.125v1.875a1.125 1.125 0 1 1-2.25 0v-1.5H12.25c-.405 0-.8-.132-1.125-.375l-2.5-1.875h-4.5v12H10.5a1.125 1.125 0 1 1 0 2.25H3.75a1.875 1.875 0 0 1-1.875-1.875V6A1.875 1.875 0 0 1 3.75 4.125h5c.405 0 .8.132 1.125.375l2.5 1.875h7.875a1.875 1.875 0 0 1 1.875 1.875" })
  ] });
});
m.displayName = "FolderSimpleUser";
export {
  m as FolderSimpleUser
};
//# sourceMappingURL=FolderSimpleUser.js.map
