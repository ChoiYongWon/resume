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

export const HeaderStyle = style({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "16px",
})

export const ProfileWrapperStyle = style({
  display: "flex",
  flexDirection: "column",
})

export const ContactWrapperStyle = style({
  //
  listStylePosition: "inside",
  fontWeight: 300,
});

export const ContactStyle = style({
  lineHeight: 1.4,
  marginBottom: "8px",
  borderBottom: "#222222 solid 1px",
});