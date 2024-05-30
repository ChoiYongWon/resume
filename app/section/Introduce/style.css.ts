import { style } from "@vanilla-extract/css";

export const IntroduceWrapperStyle = style({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
});

export const NameStyle = style({
  fontSize: "36px",
  fontWeight: "bold",
});

export const RoleStyle = style({
  fontSize: "18px",
  fontWeight: 300,
  opacity: 0.5,
});
