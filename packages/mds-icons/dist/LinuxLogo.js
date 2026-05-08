import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const s = c(({
  size: a = "1em",
  title: o,
  titleId: d,
  ...e
}, l) => {
  const n = m(), r = o ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": r, ...e, children: [
    o ? /* @__PURE__ */ i("title", { id: r, children: o }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M21.702 20.38a1.125 1.125 0 0 1-1.583-.179c-.132-.165-3.244-4.147-3.244-11.951a4.875 4.875 0 0 0-9.75 0c0 7.804-3.113 11.786-3.245 11.951A1.126 1.126 0 0 1 2.119 18.8c.037-.05 2.756-3.607 2.756-10.55a7.125 7.125 0 0 1 14.25 0c0 6.955 2.728 10.515 2.756 10.55a1.125 1.125 0 0 1-.179 1.58M9.75 11.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6-1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-6.82 4.781 2.626 1.125a1.12 1.12 0 0 0 .886 0l2.625-1.125a1.125 1.125 0 0 0-.886-2.062l-2.182.937-2.181-.937a1.125 1.125 0 0 0-.887 2.062M12 17.25a5.36 5.36 0 0 0-3.624 1.42 1.125 1.125 0 1 0 1.521 1.659 3.08 3.08 0 0 1 4.205 0 1.126 1.126 0 0 0 1.522-1.659A5.35 5.35 0 0 0 12 17.25" })
  ] });
});
s.displayName = "LinuxLogo";
export {
  s as LinuxLogo
};
//# sourceMappingURL=LinuxLogo.js.map
