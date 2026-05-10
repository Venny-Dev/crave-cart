# Requirements Document

## Introduction

CraveCart requires a cohesive design system implemented as reusable React components with Tailwind CSS v4 utility classes. The design system establishes a consistent visual language across the application through defined color tokens, typography scales, and a component library covering buttons, navigation, search, FABs, icon buttons, and dividers. All tokens are defined as CSS custom properties in `frontend/src/index.css` and consumed via Tailwind's theme configuration.

## Glossary

- **Design_System**: The collection of color tokens, typography definitions, and UI components that constitute CraveCart's visual language.
- **Token**: A named CSS custom property representing a design decision (color, spacing, font).
- **Color_Scale**: A set of tint and shade variants (50–900) derived from a base color.
- **Component**: A reusable React functional component that accepts props and renders styled HTML elements using Tailwind utility classes.
- **FAB**: Floating Action Button — a prominent circular button used for primary actions.
- **Icon_Button**: A compact button that displays only an icon, used for secondary or contextual actions.
- **Navbar**: The bottom navigation bar containing home, search, and profile navigation items.
- **Divider**: A horizontal or vertical visual separator between content sections.
- **Plus_Jakarta_Sans**: The headline typeface used for display and heading text.
- **Be_Vietnam_Pro**: The body and label typeface used for paragraph and UI label text.

## Requirements

### Requirement 1: Color Token System

**User Story:** As a developer, I want a complete color token system defined as CSS custom properties, so that I can apply consistent brand colors throughout the application without hardcoding hex values.

#### Acceptance Criteria

1. THE Design_System SHALL define a Primary color scale with base value `#F2633E` and tint/shade variants at steps 50, 100, 200, 300, 400, 500, 600, 700, 800, and 900 as CSS custom properties in `frontend/src/index.css`.
2. THE Design_System SHALL define a Secondary color scale with base value `#8B4513` and tint/shade variants at steps 50, 100, 200, 300, 400, 500, 600, 700, 800, and 900 as CSS custom properties in `frontend/src/index.css`.
3. THE Design_System SHALL define a Tertiary color scale with base value `#E25858` and tint/shade variants at steps 50, 100, 200, 300, 400, 500, 600, 700, 800, and 900 as CSS custom properties in `frontend/src/index.css`.
4. THE Design_System SHALL define a Neutral color scale with base value `#FDF9F3` and shade variants at steps 50, 100, 200, 300, 400, 500, 600, 700, 800, and 900 as CSS custom properties in `frontend/src/index.css`.
5. THE Design_System SHALL expose all color tokens to Tailwind CSS v4 via `@theme` directives so that utility classes such as `bg-primary-500` and `text-secondary-300` are available.
6. WHEN a developer uses a color token utility class, THE Design_System SHALL resolve the class to the corresponding CSS custom property value without requiring inline styles.

### Requirement 2: Typography System

**User Story:** As a developer, I want a typography system with defined font families and scale, so that headings, body text, and labels render consistently across all screens.

#### Acceptance Criteria

1. THE Design_System SHALL load the Plus Jakarta Sans font family and assign it to a `--font-headline` CSS custom property available as a Tailwind `font-headline` utility class.
2. THE Design_System SHALL load the Be Vietnam Pro font family and assign it to a `--font-body` CSS custom property available as a Tailwind `font-body` utility class.
3. THE Design_System SHALL assign Be Vietnam Pro to a `--font-label` CSS custom property available as a Tailwind `font-label` utility class.
4. THE Design_System SHALL define a type scale with at minimum the following named sizes: `display` (32px), `heading-1` (24px), `heading-2` (20px), `heading-3` (18px), `body-lg` (16px), `body-md` (14px), `body-sm` (12px), `label` (12px).
5. WHEN a developer applies a typography utility class, THE Design_System SHALL render text at the specified size and with the correct font family.

### Requirement 3: Button Components

**User Story:** As a developer, I want a set of Button components covering all four variants shown in the design reference, so that I can place consistent call-to-action elements throughout the application.

#### Acceptance Criteria

1. THE Design_System SHALL provide a `Button` component that accepts a `variant` prop with values `primary`, `secondary`, `inverted`, and `outlined`.
2. WHEN `variant` is `primary`, THE Button SHALL render with a filled coral (`primary-500`) background, white text, and rounded corners.
3. WHEN `variant` is `secondary`, THE Button SHALL render with a transparent background, a `primary-500` border, and `primary-500` text.
4. WHEN `variant` is `inverted`, THE Button SHALL render with a black background and white text.
5. WHEN `variant` is `outlined`, THE Button SHALL render with a white background, a neutral border, and dark text.
6. THE Button SHALL accept a `size` prop with values `sm`, `md`, and `lg` that adjusts padding and font size accordingly.
7. THE Button SHALL accept a `disabled` prop; WHEN `disabled` is true, THE Button SHALL render with reduced opacity and suppress pointer events.
8. THE Button SHALL accept an optional `icon` prop; WHEN provided, THE Button SHALL render the icon alongside the label with consistent spacing.
9. WHEN a Button receives keyboard focus, THE Button SHALL display a visible focus ring that meets a minimum 3:1 contrast ratio against the surrounding background.

### Requirement 4: Navigation Bar Component

**User Story:** As a developer, I want a Navbar component with home, search, and profile navigation items, so that users can move between the main sections of the application.

#### Acceptance Criteria

1. THE Design_System SHALL provide a `Navbar` component that renders a fixed bottom navigation bar containing Home, Search, and Profile navigation items.
2. THE Navbar SHALL accept an `activeItem` prop indicating which navigation item is currently selected.
3. WHEN a navigation item matches `activeItem`, THE Navbar SHALL render that item's icon and label in the `primary-500` color.
4. WHEN a navigation item does not match `activeItem`, THE Navbar SHALL render that item's icon and label in a neutral muted color.
5. THE Navbar SHALL accept an `onNavigate` callback prop; WHEN a navigation item is tapped or clicked, THE Navbar SHALL invoke `onNavigate` with the item's identifier string.
6. THE Navbar SHALL render on a white or neutral background with a top border separator.
7. WHEN the Navbar receives keyboard focus on a navigation item, THE Navbar SHALL display a visible focus indicator.

### Requirement 5: Search Input Component

**User Story:** As a developer, I want a SearchInput component, so that users can enter search queries with a consistent styled input field.

#### Acceptance Criteria

1. THE Design_System SHALL provide a `SearchInput` component that renders a text input with a leading search icon.
2. THE SearchInput SHALL accept a `value` prop and an `onChange` callback prop for controlled input behavior.
3. THE SearchInput SHALL accept a `placeholder` prop that displays hint text when the input is empty.
4. WHEN the SearchInput is focused, THE SearchInput SHALL display a visible focus ring using the `primary-500` color.
5. THE SearchInput SHALL accept a `disabled` prop; WHEN `disabled` is true, THE SearchInput SHALL render with reduced opacity and prevent user interaction.
6. THE SearchInput SHALL accept an optional `onClear` prop; WHEN provided and the input has a non-empty value, THE SearchInput SHALL render a clear (×) button that invokes `onClear` when clicked.

### Requirement 6: Floating Action Button (FAB) Component

**User Story:** As a developer, I want FAB components in icon-only and icon+label variants, so that I can surface the primary action on a screen with appropriate prominence.

#### Acceptance Criteria

1. THE Design_System SHALL provide a `FAB` component that accepts a `variant` prop with values `icon` and `extended`.
2. WHEN `variant` is `icon`, THE FAB SHALL render a circular button containing only an icon, with a `primary-500` background and white icon.
3. WHEN `variant` is `extended`, THE FAB SHALL render a pill-shaped button containing an icon and a text label, with a `primary-500` background and white content.
4. THE FAB SHALL accept a `size` prop with values `sm` and `lg` that adjusts the button dimensions proportionally.
5. THE FAB SHALL accept an `onPress` callback prop; WHEN the FAB is clicked or activated via keyboard, THE FAB SHALL invoke `onPress`.
6. WHEN the FAB receives keyboard focus, THE FAB SHALL display a visible focus ring.

### Requirement 7: Icon Button Component

**User Story:** As a developer, I want an IconButton component, so that I can place compact icon-only action triggers in toolbars and action rows.

#### Acceptance Criteria

1. THE Design_System SHALL provide an `IconButton` component that renders a touchable area containing a single icon.
2. THE IconButton SHALL accept a `variant` prop with values `default`, `filled`, and `ghost`.
3. WHEN `variant` is `filled`, THE IconButton SHALL render with a `primary-50` background and `primary-500` icon color.
4. WHEN `variant` is `ghost`, THE IconButton SHALL render with a transparent background and a muted neutral icon color.
5. THE IconButton SHALL accept a `size` prop with values `sm`, `md`, and `lg` that adjusts the touchable area and icon size.
6. THE IconButton SHALL accept an `aria-label` prop and render it as the button's accessible name.
7. WHEN the IconButton receives keyboard focus, THE IconButton SHALL display a visible focus ring.

### Requirement 8: Divider Component

**User Story:** As a developer, I want a Divider component, so that I can visually separate content sections with a consistent styled separator.

#### Acceptance Criteria

1. THE Design_System SHALL provide a `Divider` component that renders a horizontal separator by default.
2. THE Divider SHALL accept an `orientation` prop with values `horizontal` and `vertical`.
3. WHEN `orientation` is `horizontal`, THE Divider SHALL render a full-width line using the neutral border color token.
4. WHEN `orientation` is `vertical`, THE Divider SHALL render a full-height line using the neutral border color token.
5. THE Divider SHALL accept a `spacing` prop with values `sm`, `md`, and `lg` that applies vertical margin (horizontal orientation) or horizontal margin (vertical orientation).

### Requirement 9: Component Export and Discoverability

**User Story:** As a developer, I want all design system components exported from a single entry point, so that I can import any component with a single, predictable import path.

#### Acceptance Criteria

1. THE Design_System SHALL export all components from `frontend/src/components/index.ts` as named exports.
2. WHEN a developer imports from `frontend/src/components`, THE Design_System SHALL resolve all component names without requiring deep path imports.
3. THE Design_System SHALL co-locate each component's TypeScript prop types in the same file as the component implementation.
