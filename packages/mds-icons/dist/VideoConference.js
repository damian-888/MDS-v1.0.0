import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as t } from "react";
const v = m(({
  size: o = "1em",
  title: e,
  titleId: i,
  ...a
}, n) => {
  const h = t(), r = e ? i ?? h : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: n, "aria-labelledby": r, ...a, children: [
    e ? /* @__PURE__ */ d("title", { id: r, children: e }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 7.5h-5.25v-5.25h5.25zm-15 .375a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0m-.75 4.666c.252-.744 1.031-1.291 1.875-1.291.884 0 1.705.604 1.91 1.406a1.125 1.125 0 0 0 2.18-.562 4.05 4.05 0 0 0-1.422-2.156 3.375 3.375 0 0 0-4.543-4.868v-2.82h8.25v12.75h-8.25zm10.5 2.459v-5.25h5.25v5.25zM15.75 8.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m3 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" })
  ] });
});
v.displayName = "VideoConference";
export {
  v as VideoConference
};
//# sourceMappingURL=VideoConference.js.map
