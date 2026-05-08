import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as c, useId as s } from "react";
const m = c(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const n = s(), r = a ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.892 4.514a1.86 1.86 0 0 0-1.624-.324l-.327.088c-1.747.47-4.996 1.347-8.941 1.347s-7.194-.877-8.94-1.347l-.328-.088A1.875 1.875 0 0 0 .375 6v12a1.875 1.875 0 0 0 2.36 1.81l.299-.081c1.747-.474 5-1.354 8.966-1.354s7.219.881 8.966 1.355l.3.081A1.875 1.875 0 0 0 23.624 18V6a1.86 1.86 0 0 0-.733-1.486M12 7.875c4.125 0 7.607-.908 9.375-1.385v10.111L16.572 11.8a1.875 1.875 0 0 0-2.651 0l-1.61 1.607L8.45 9.55a1.875 1.875 0 0 0-2.652 0l-3.174 3.174V6.49c1.768.477 5.25 1.385 9.375 1.385M13.901 15l1.346-1.345 3.136 3.137a36 36 0 0 0-3.181-.493zM2.625 17.509v-1.604l4.5-4.5 4.72 4.72c-4.052.023-7.463.91-9.22 1.384m14.625-7.384a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" })
  ] });
});
m.displayName = "Panorama";
export {
  m as Panorama
};
//# sourceMappingURL=Panorama.js.map
