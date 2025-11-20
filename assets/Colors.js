const tintColorLight = "#FF6F61"; // warm, appetizing color for buttons and highlights
const tintColorDark = "#390f0bff";  // same for dark mode
const primary = "#FF6F61";        // main brand color
const secondary = "#4ECDC4";      // complementary accent color

export const Colors = {
    light: {
        text: "#101010ff",            // softer than black for readability
        background: "#ce4141ff",      // clean white background
        tint: tintColorLight,
        icon: "#1e0c0cff",            // matches text color
        tabIconDefault: "#311515ff",  // subtle gray for inactive tabs
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: "#FFFFFF",            // white text on dark background
        background: "#121212",      // dark background for night mode
        tint: tintColorDark,
        icon: "#FFFFFF",            // icons match text
        tabIconDefault: "#888888",  // softer gray for inactive tabs
        tabIconSelected: tintColorDark,
    },
    PRIMARY: primary,
    SECONDARY: secondary,
};
