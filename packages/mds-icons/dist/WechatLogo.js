import { jsxs as c, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const h = m(({
  size: a = "1em",
  title: o,
  titleId: e,
  ...d
}, i) => {
  const t = n(), r = o ? e ?? t : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    o ? /* @__PURE__ */ l("title", { id: r, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M14.25 13.502a1.5 1.5 0 1 1-2.999 0 1.5 1.5 0 0 1 2.999 0m3-1.5a1.5 1.5 0 1 0 0 2.998 1.5 1.5 0 0 0 0-2.998m5.548 7.72a1.876 1.876 0 0 1-2.328 2.328l-2.18-.642a7.875 7.875 0 0 1-10.441-3.865 7.8 7.8 0 0 1-2.14-.635l-2.18.642A1.875 1.875 0 0 1 1.2 15.223l.642-2.18a7.877 7.877 0 0 1 14.314-6.581 7.875 7.875 0 0 1 6 11.08zm-15.63-4.65a7.87 7.87 0 0 1 6.426-8.567 5.625 5.625 0 0 0-9.555 5.9c.14.26.17.565.087.849l-.571 1.943 1.942-.57c.284-.084.59-.053.85.087q.396.21.821.358m13.457-.82a5.624 5.624 0 1 0-2.972 4.96c.26-.139.566-.17.85-.087l1.942.572-.57-1.943a1.13 1.13 0 0 1 .087-.85 5.6 5.6 0 0 0 .663-2.652" })
  ] });
});
h.displayName = "WechatLogo";
export {
  h as WechatLogo
};
//# sourceMappingURL=WechatLogo.js.map
