import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...h
}, i) => {
  const l = s(), a = r ? e ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...h, children: [
    r ? /* @__PURE__ */ d("title", { id: a, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.25 7.125h-2.625V4.5a1.875 1.875 0 0 0-1.875-1.875h-12A1.875 1.875 0 0 0 1.875 4.5v12a1.125 1.125 0 0 0 1.832.875l2.668-2.157v2.032a1.875 1.875 0 0 0 1.875 1.875h8.64l3.403 2.75A1.125 1.125 0 0 0 22.125 21V9a1.875 1.875 0 0 0-1.875-1.875m-16.125 7.02v-9.27h11.25v7.5H6.711c-.259 0-.51.088-.711.25zm15.75 4.5L18 17.124c-.2-.162-.45-.25-.707-.25H8.625v-2.25h7.125a1.875 1.875 0 0 0 1.875-1.875V9.375h2.25z" })
  ] });
});
v.displayName = "Chats";
export {
  v as Chats
};
//# sourceMappingURL=Chats.js.map
