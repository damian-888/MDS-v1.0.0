import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as v, useId as n } from "react";
const m = v(({
  size: i = "1em",
  title: a,
  titleId: r,
  ...d
}, e) => {
  const h = n(), l = a ? r ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": l, ...d, children: [
    a ? /* @__PURE__ */ o("title", { id: l, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M9.055 11.71a1.125 1.125 0 0 0-1.226.244l-1.923 1.921H4.125A1.125 1.125 0 0 0 3 15v3.75a1.125 1.125 0 0 0 1.125 1.125h1.781l1.92 1.92A1.125 1.125 0 0 0 9.75 21v-8.25a1.125 1.125 0 0 0-.695-1.04M7.5 18.281l-.33-.33a1.13 1.13 0 0 0-.795-.326H5.25v-1.5h1.125a1.13 1.13 0 0 0 .796-.33l.329-.326zm7.5-1.406a4.18 4.18 0 0 1-2.058 3.596 1.124 1.124 0 1 1-1.13-1.942 1.923 1.923 0 0 0 0-3.308 1.124 1.124 0 1 1 1.135-1.942A4.18 4.18 0 0 1 15 16.875m5.296-9.42-5.25-5.25a1.12 1.12 0 0 0-.796-.33h-9A1.875 1.875 0 0 0 3.375 3.75v6.75a1.125 1.125 0 0 0 2.25 0V4.125h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125h-1.5a1.125 1.125 0 1 0 0 2.25h1.875a1.875 1.875 0 0 0 1.875-1.875v-12a1.13 1.13 0 0 0-.33-.796M15 5.343 17.156 7.5H15z" })
  ] });
});
m.displayName = "FileAudio";
export {
  m as FileAudio
};
//# sourceMappingURL=FileAudio.js.map
