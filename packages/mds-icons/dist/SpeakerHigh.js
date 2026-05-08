import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, l) => {
  const h = m(), i = r ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M14.744 1.99a1.13 1.13 0 0 0-1.185.122L7.114 7.125H3A1.875 1.875 0 0 0 1.125 9v6A1.875 1.875 0 0 0 3 16.875h4.114l6.445 5.013A1.125 1.125 0 0 0 15.375 21V3a1.13 1.13 0 0 0-.63-1.01M3.375 9.374h3v5.25h-3zm9.75 9.324-4.5-3.5V8.8l4.5-3.5zm6.75-6.7a4.13 4.13 0 0 1-1.031 2.73 1.125 1.125 0 0 1-1.688-1.489 1.875 1.875 0 0 0 0-2.478 1.125 1.125 0 0 1 1.688-1.486A4.12 4.12 0 0 1 19.875 12m3.75 0a7.86 7.86 0 0 1-2.005 5.25 1.125 1.125 0 1 1-1.678-1.5 5.625 5.625 0 0 0 0-7.5 1.126 1.126 0 1 1 1.677-1.5A7.86 7.86 0 0 1 23.625 12" })
  ] });
});
s.displayName = "SpeakerHigh";
export {
  s as SpeakerHigh
};
//# sourceMappingURL=SpeakerHigh.js.map
