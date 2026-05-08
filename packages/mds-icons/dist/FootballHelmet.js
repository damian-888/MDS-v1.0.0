import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const c = m(({
  size: a = "1em",
  title: l,
  titleId: r,
  ...h
}, d) => {
  const t = n(), o = l ? r ?? t : void 0;
  return /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": o, ...h, children: [
    l ? /* @__PURE__ */ e("title", { id: o, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.25 14.626h-4.426l-.443-1.5h4.869a1.125 1.125 0 0 0 1.125-1.125v-.375a9.75 9.75 0 0 0-9.889-9.75c-5.299.075-9.611 4.447-9.611 9.75a9.75 9.75 0 0 0 4.253 8.057c.188.127.409.194.635.193h4.112a1.875 1.875 0 0 0 1.81-2.358l-.187-.642h1.648l.937 3.157a1.89 1.89 0 0 0 1.792 1.343h3.375a1.875 1.875 0 0 0 1.875-1.875v-3a1.875 1.875 0 0 0-1.875-1.875M9.413 11.577a1.87 1.87 0 0 0-.348 1.657l1.305 4.392H7.125a7.5 7.5 0 0 1-3-6c0-4.076 3.318-7.44 7.393-7.5h.107a7.5 7.5 0 0 1 7.463 6.75h-8.213a1.87 1.87 0 0 0-1.463.701m2.413 3.049-.446-1.5h1.651l.444 1.5zm8.049 4.5h-2.719l-.664-2.25h3.383z" })
  ] });
});
c.displayName = "FootballHelmet";
export {
  c as FootballHelmet
};
//# sourceMappingURL=FootballHelmet.js.map
