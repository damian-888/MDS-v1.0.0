import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...a
}, l) => {
  const t = m(), d = o ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": d, ...a, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25V15a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 22.125 15V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 11.25H4.125v-9h15.75zm2.25 4.875A1.125 1.125 0 0 1 21 20.625H3a1.125 1.125 0 1 1 0-2.25h18a1.125 1.125 0 0 1 1.125 1.125M9.75 12V8.25a1.125 1.125 0 0 1 1.721-.954l3 1.875a1.125 1.125 0 0 1 0 1.908l-3 1.875A1.126 1.126 0 0 1 9.75 12" })
  ] });
});
s.displayName = "Video";
export {
  s as Video
};
//# sourceMappingURL=Video.js.map
