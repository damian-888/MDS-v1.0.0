import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: o = "1em",
  title: l,
  titleId: i,
  ...d
}, a) => {
  const h = n(), r = l ? i ?? h : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: a, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.594 13.28 16.18 2.767l-.006-.01a1.86 1.86 0 0 0-1.594-.882H9.416a1.86 1.86 0 0 0-1.594.881l-.006.01-6.41 10.514a1.88 1.88 0 0 0-.034 1.918l2.565 4.482a1.88 1.88 0 0 0 1.625.945h12.876a1.88 1.88 0 0 0 1.624-.945l2.562-4.482a1.88 1.88 0 0 0-.03-1.918m-2.73-.155h-3.478L13.312 8l1.7-2.83zM5.137 17.25l-1.072-1.875h2.198zm3.75-1.875h6.225l1.8 3H7.087zm1.35-2.25L12 10.187l1.762 2.938zm7.5 2.25h2.199l-1.074 1.875zM12 5.813l-1.014-1.688h2.027zm-3.01-.644L10.686 8l-3.074 5.126H4.136z" })
  ] });
});
s.displayName = "GoogleDriveLogo";
export {
  s as GoogleDriveLogo
};
//# sourceMappingURL=GoogleDriveLogo.js.map
