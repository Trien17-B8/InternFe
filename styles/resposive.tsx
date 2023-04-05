export const break_points_value = {
    phone_only: 600,
    tablet_portrait_up: 1024,
    tablet_portrait: 1024,
    tablet_landscape: 1224,
    desktop_up: 1440,

    xs: 576,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
}
export const break_points = {
    phone_only: '@media only screen and (max-width: 600px)',
    tablet_portrait_only:
        '@media only screen and (min-width: 600px) and (max-width: 1024px)',
    tablet_landscape_only:
        '@media only screen and (min-width: 1024px) and (max-width: 1224px)',
    tablet_landscape_up: '@media only screen and (min-width: 1024px)',
    tablet_landscape_down: '@media only screen and (max-width: 1224px)',
    laptop_only:
        '@media only screen and (min-width: 1225px) and (max-width:1800px)',
    desktop_up: '@media only screen and (min-width: 1440px)',
    xs: `@media only screen and (max-width: ${break_points_value.xs}px)`,
    sm: `@media only screen and (min-width: ${break_points_value.sm}px)`,
    sm_up_to_lg: `@media only screen and (min-width: ${
        break_points_value.sm
    }px) and (max-width: ${break_points_value.lg - 0.2}px)`,
    nd: `@media only screen and (min-width: ${break_points_value.md}px)`,
    Ig: `@media only screen and (min-width: ${break_points_value.lg}px)`,
    xl: `@media only screen and (min-width: ${break_points_value.xl}px)`,
    xxl: `@media only screen and (min-width: ${break_points_value.xxl}px)`,
}
