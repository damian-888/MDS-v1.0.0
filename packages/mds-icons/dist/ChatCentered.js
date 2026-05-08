import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...l
}, t) => {
  const i = s(), d = e ? o ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: t, "aria-labelledby": d, ...l, children: [
    e ? /* @__PURE__ */ a("title", { id: d, children: e }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v12a1.875 1.875 0 0 0 1.875 1.875h5.448l1.174 2.055a1.874 1.874 0 0 0 3.256 0l1.174-2.055h5.448a1.875 1.875 0 0 0 1.875-1.875v-12a1.875 1.875 0 0 0-1.875-1.875m-.375 13.5H14.15a1.13 1.13 0 0 0-.977.567L12 19.494l-1.173-2.052a1.13 1.13 0 0 0-.977-.567H4.125V5.625h15.75z" })
  ] });
});
m.displayName = "ChatCentered";
export {
  m as ChatCentered
};
//# sourceMappingURL=ChatCentered.js.map
