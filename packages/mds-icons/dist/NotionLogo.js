import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...e
}, l) => {
  const t = s(), i = o ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": i, ...e, children: [
    o ? /* @__PURE__ */ a("title", { id: i, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20.25 3.375H16.5a1.125 1.125 0 0 0 0 2.25h.75v9.495L11.11 3.958a1.13 1.13 0 0 0-.985-.583H3.75a1.125 1.125 0 0 0 0 2.25h.75v12.75h-.75a1.125 1.125 0 1 0 0 2.25H7.5a1.125 1.125 0 1 0 0-2.25h-.75V8.88l6.14 11.162a1.13 1.13 0 0 0 .985.583h4.5A1.125 1.125 0 0 0 19.5 19.5V5.625h.75a1.125 1.125 0 0 0 0-2.25M7.528 5.625H9.46l7.013 12.75H14.54z" })
  ] });
});
m.displayName = "NotionLogo";
export {
  m as NotionLogo
};
//# sourceMappingURL=NotionLogo.js.map
