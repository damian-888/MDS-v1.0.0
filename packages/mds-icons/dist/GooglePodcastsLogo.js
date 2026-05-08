import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const n = m(({
  size: a = "1em",
  title: o,
  titleId: d,
  ...e
}, i) => {
  const l = s(), v = o ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": v, ...e, children: [
    o ? /* @__PURE__ */ r("title", { id: v, children: o }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M13.125 1.5v3a1.125 1.125 0 1 1-2.25 0v-3a1.125 1.125 0 1 1 2.25 0M16.5 4.875A1.125 1.125 0 0 0 15.375 6v3a1.125 1.125 0 1 0 2.25 0V6A1.125 1.125 0 0 0 16.5 4.875m-4.5 13.5a1.125 1.125 0 0 0-1.125 1.125v3a1.125 1.125 0 1 0 2.25 0v-3A1.125 1.125 0 0 0 12 18.375m0-11.25a1.125 1.125 0 0 0-1.125 1.125v7.5a1.125 1.125 0 1 0 2.25 0v-7.5A1.125 1.125 0 0 0 12 7.125m-4.5-2.25A1.125 1.125 0 0 0 6.375 6v5.25a1.125 1.125 0 0 0 2.25 0V6A1.125 1.125 0 0 0 7.5 4.875m9 6.75a1.125 1.125 0 0 0-1.125 1.125V18a1.125 1.125 0 1 0 2.25 0v-5.25a1.125 1.125 0 0 0-1.125-1.125M3 9.375A1.125 1.125 0 0 0 1.875 10.5v3a1.125 1.125 0 0 0 2.25 0v-3A1.125 1.125 0 0 0 3 9.375m4.5 4.5A1.125 1.125 0 0 0 6.375 15v3a1.125 1.125 0 0 0 2.25 0v-3A1.125 1.125 0 0 0 7.5 13.875m13.5-4.5a1.125 1.125 0 0 0-1.125 1.125v3a1.125 1.125 0 1 0 2.25 0v-3A1.125 1.125 0 0 0 21 9.375" })
  ] });
});
n.displayName = "GooglePodcastsLogo";
export {
  n as GooglePodcastsLogo
};
//# sourceMappingURL=GooglePodcastsLogo.js.map
