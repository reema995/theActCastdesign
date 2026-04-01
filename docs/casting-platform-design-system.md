# theActCast Web Design System

## 1. Product Direction

- Product: casting platform connecting actors with production companies.
- Primary output in this package: RTL web platform design.
- Shared design language: must map directly to Flutter mobile patterns.
- Brand mood: premium, cinematic, calm, trustworthy, modern, professional.
- Foundation colors: `#c1c1c1` and `#3c4031`.
- UX principle: reduce ambiguity in registration, profile quality, booking, and messaging.

## 2. Brand Pillars

- Calm premium: neutral surfaces, restrained contrast, soft shadows, no loud accent colors.
- Cinematic professionalism: dark olive depth, off-white staging, image-first cards.
- Structured SaaS clarity: explicit sections, stable grids, predictable actions.
- Arabic-first RTL: mirrored spacing, right-aligned hierarchy, Arabic-first typography.
- Shared system: same semantic tokens and component logic across Angular and Flutter.

## 3. Design Tokens

Reference implementation: [tokens.json](/c:/Users/User/Desktop/MyProjects/theActCast/design-system/tokens.json)

### Color Semantics

| Token | Value | Usage |
|---|---:|---|
| `brand.light` | `#c1c1c1` | neutral branding, dividers, elevated secondary surfaces |
| `brand.dark` | `#3c4031` | primary actions, sidebars, active states |
| `surface.base` | `#f7f5f1` | app background |
| `surface.raised` | `#ffffff` | cards, modals, elevated sections |
| `border.default` | `#cbc6be` | standard borders |
| `text.primary` | `#1f211a` | titles and primary content |
| `text.secondary` | `#5e6257` | supporting copy |
| `status.success` | `#4f7a57` | accepted, completed, verified |
| `status.warning` | `#9a6a2e` | pending, review, caution |
| `status.error` | `#a34d4d` | reject, delete, failure |
| `status.info` | `#4d667f` | AI modules, informational badges |

### State Rules

- Hover: lift slightly via lighter olive wash, never neon.
- Active: dark olive fill with inverse text.
- Disabled: low-contrast neutral background and muted text.
- Focus: visible olive outline or shadow ring.
- Destructive: error color only on explicit irreversible actions.

### Spacing

- Base unit: `8px`.
- Core scale: `8, 16, 24, 32, 40, 48, 56, 64, 72, 80`.
- Use 24-32px internal card padding for dashboard surfaces.
- Use 16px vertical rhythm between form controls inside a section.

### Radius and Elevation

- Small radius: `12px`.
- Medium radius: `18px`.
- Large radius: `24px`.
- Hero / shell radius: `32px+`.
- Shadows are soft and low-chroma; prefer depth through layering, not high blur alone.

## 4. Typography

- Recommended Arabic stack: `Tajawal, Cairo, IBM Plex Sans Arabic, Segoe UI, sans-serif`.
- Headline behavior: bold, tight, premium, low line-count.
- Body behavior: relaxed line-height around `1.65 - 1.7`.
- Numeric content: ensure Arabic UI still preserves readable financial/date values.

| Style | Size | Weight | Usage |
|---|---:|---:|---|
| Display | 48 | 700 | landing hero, major dashboard banners |
| H1 | 40 | 700 | major page title |
| H2 | 32 | 700 | section title |
| H3 | 24 | 600 | card/screen headings |
| H4 | 20 | 600 | sub-panels and modals |
| Body Large | 18 | 400 | hero body, intro copy |
| Body | 16 | 400 | standard content |
| Body Small | 14 | 400 | metadata, helper text |
| Caption | 12 | 500 | timestamps, minor supporting copy |
| Button | 15 | 600 | button labels |

## 5. Layout System

### Shell

- Desktop-first dashboard shell:
  - top navbar height: `88px`
  - sidebar width: `288px`
  - content max width: `1440px`
- Tablet:
  - collapse wide grids to 1 column where clarity improves
  - sidebar becomes drawer
- Mobile parity:
  - same components
  - navigation shifts to tabs or bottom nav
  - form sections remain grouped identically

### RTL Rules

- Primary alignment is right.
- Sidebar navigation anchors from the right edge in web.
- Drawers and flows should feel native to Arabic reading direction.
- Dates and numeric ranges should remain visually stable and easy to scan.

## 6. Core Components

### Buttons

- `primary`: dark olive fill, inverse text, main CTA.
- `secondary`: muted elevated fill, used in hero or secondary emphasis.
- `outline`: bordered neutral or olive action.
- `ghost`: low-emphasis inline or toolbar action.
- `danger`: deletion, rejection, irreversible confirmation.

### Form Controls

- Text fields, dropdowns, date picker, time picker share:
  - height `56px`
  - radius `18px`
  - border `1px`
  - clear helper/error region below
- Validation:
  - error text under field
  - red border only when blocking
  - helper text always visible for uploads and duration rules

### Content Containers

- `app-form-section`: titled card with grouped fields and helper text.
- `app-profile-card`: actor/company identity with hero actions and quick stats.
- `app-project-card`: project title, type, timeline, status.
- `app-booking-card`: offer summary, price, dates, state, actions.
- `app-stat-card`: single KPI with icon or badge.
- `app-empty-state`: icon block, clear explanation, one recovery CTA.

### Media Components

- `app-upload-box`: dashed dropzone with file constraints and action.
- `app-video-card`: preview thumbnail, duration validation, replace/delete.
- `app-avatar`: three sizes minimum (`32 / 48 / 72`).
- photo gallery:
  - support required actor capture set
  - preserve consistent crop ratios

### Navigation

- `app-navbar`: search, alerts, account switcher, contextual action.
- `app-sidebar`: role-aware navigation, active state, unread counts.
- tabs: rounded pills, used for filtering and mode switching.

### Data Views

- tables: only when dense admin/project data requires it.
- cards: default for actor, booking, notification, and portfolio content.
- lists: operational activity and message previews.
- calendar:
  - monthly and weekly modes
  - slot states `available`, `booked`, `locked`

### Messaging

- `app-chat-layout`:
  - conversation list
  - active thread
  - composer
  - optional attachment action
- bubble styles:
  - sent: olive fill
  - received: neutral raised fill
- preserve timestamps and unread indicators without clutter.

## 7. Actor Experience

### Registration Wizard

Required steps:

1. Account information
2. Personal details
3. Physical attributes
4. Health information (optional)
5. Required photos
6. Intro video
7. Previous works
8. Pricing and traits

Rules:

- show total step count and current progress
- allow draft save
- validate required uploads before completion
- show a distinct success screen with next action

### Actor Dashboard

Must surface:

- profile completion
- pending booking requests
- near-term availability
- unread chat count
- recent notifications

### Edit Profile

- support view mode and edit mode in same experience
- use inline editing for simple text
- use modal/drawer editing for sensitive or grouped fields
- show auto-save or explicit saved confirmation

### Skills

- support predefined suggestions and custom creation
- skills render as chips in both private and public profile
- edit/delete actions must be lightweight

### Intro Video

- preview first
- validate `30-60` seconds before save
- replace and delete require visible affordances
- use confirmation modal for delete

### Availability

- support month and week view
- actor can add, edit, delete only when slot is not bound to active booking
- booked/locked slots must show why deletion is disabled

### Booking Requests

- tabs: `all`, `pending`, `accepted`, `rejected`
- each request shows:
  - project
  - company
  - dates
  - price
  - state
- confirmation required for accept/reject

### Work History

- use timeline + card hybrid
- include title, company, type, date, optional media
- keep it visible in actor public profile as proof of experience

## 8. Company Experience

### Company Registration

- web-only onboarding
- collect:
  - user name
  - company name
  - email
  - phone
  - password
  - country
  - business description
  - logo
  - optional work links

### Company Dashboard

- active projects
- open booking requests
- saved talent
- recent messages
- operational alerts

### Project Management

Support:

- create
- edit
- delete
- list
- detail view
- notifications to linked actors on project update or deletion

### Search Actors

Filters:

- name
- skills
- gender
- price
- characteristics
- sorting

Actor result card contents:

- photo
- actor name
- location
- price
- skills
- similarity or relevance score when needed
- quick actions: view, request, save

### AI Search

Modes:

- image upload
- text description

Behavior:

- clearly explain analysis state
- sort by similarity score
- keep output realistic and operational, not experimental-only

### Booking Flow

Steps:

1. pick project
2. pick date and offer
3. add note and review
4. submit request

Required checks:

- actor availability visible during flow
- request linked to project
- clear success confirmation after send

## 9. Shared Modules

### Notifications Center

- unified feed for booking, chat, project, and system events
- filters by type
- unread styling with restrained emphasis

### Settings

- profile and account
- security
- notification preferences
- language/direction
- payment and invoice placeholders or live views

### Payments

Even if payment workflows are not yet fully implemented, reserve:

- invoice list pattern
- transaction reference pattern
- payment status badges
- amount emphasis

### Admin

Admin references needed now:

- chat monitoring
- moderation/system alerts
- audit visibility for critical flows

### Events

Future-ready support:

- event cards
- scheduling blocks
- reminders in settings/notifications

## 10. Angular Component Map

Recommended component inventory:

- `app-navbar`
- `app-sidebar`
- `app-stat-card`
- `app-profile-card`
- `app-actor-card`
- `app-project-card`
- `app-booking-card`
- `app-chat-layout`
- `app-calendar`
- `app-form-section`
- `app-upload-box`
- `app-notification-item`
- `app-modal`
- `app-empty-state`

Recommended shared modules:

- `design-tokens`
- `layout-shell`
- `forms`
- `media`
- `booking`
- `chat`
- `search`
- `notifications`

## 11. Flutter Parity Notes

- reuse semantic token names from `tokens.json`
- preserve status colors and spacing scale
- keep actor/company information architecture aligned
- use the same component roles even when web shell changes to mobile navigation patterns

## 12. Deliverables in This Repo

- Interactive prototype: [index.html](/c:/Users/User/Desktop/MyProjects/theActCast/prototype/index.html)
- Prototype styling: [styles.css](/c:/Users/User/Desktop/MyProjects/theActCast/prototype/styles.css)
- Prototype behavior: [app.js](/c:/Users/User/Desktop/MyProjects/theActCast/prototype/app.js)
- Shared tokens: [tokens.json](/c:/Users/User/Desktop/MyProjects/theActCast/design-system/tokens.json)

## 13. Implementation Notes

- Use CSS variables or SCSS maps in Angular sourced from `tokens.json`.
- Mirror the same token values in Flutter `ThemeExtension` or a generated theme layer.
- Keep business logic separate from display state:
  - booking status
  - upload validation
  - availability locking
  - chat unread counts
- Prefer composable cards and shells over page-specific CSS.
