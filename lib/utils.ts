export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const ORGS = [
  "AlterGo", "La Maisonnée", "Cummings Center for Seniors",
  "Marguerite-Bourgeoys Hub", "RÉZO", "Afrique au Féminin",
  "L’Agence – On est là !", "Women’s Groups Table (Montreal)",
  "LGBTQ+ Community Center of Montreal", "Women’s Center of Plateau-Mont-Royal",
  "Congolese Community Center of Montreal"
];

export const STREET_QUALITY_CRITERIA = [
  "Accessibility","Invitingness","Comfort","Regeneration","Aesthetics",
  "Practicality","Maintenance","Inclusivity","Dynamism","Representation",
  "Oppression","Security",
];

export const SITE_NAME = "WeDesign+";
export const DOMAIN = "wedesign.one";
export const TAGLINE = "Designing inclusive public spaces through participatory AI";
export const CTA_EMAIL = "hello@wedesign.one";
