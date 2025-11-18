# Coresignal Profile Viewer UI Plan: Retro Minimalistic Style

## I. Introduction

This document outlines a detailed plan for rendering Coresignal profile data in a "retro minimalistic" UI style, reminiscent of "old school Google." The goal is to display as much relevant information from the `FullProfile` schema as possible, while adhering strictly to the defined aesthetic. Every UI element and detail will be designed with this retro minimalistic philosophy in mind.

## II. Design Principles (Retro Minimalistic - Old School Google)

The core of this design is simplicity, clarity, and functionality.

*   **Color Palette:**
    *   **Background:** Off-white (`#F8F8F8` or `#FFFFFF`)
    *   **Text:** Dark gray (`#333333`), Black (`#000000`) for headings.
    *   **Links:** Classic Google blue (`#1A0dab`), underlined. Visited links: purple (`#660099`).
    *   **Borders/Separators:** Light gray (`#CCCCCC` or `#E0E0E0`).
    *   **Accents (minimal):** Subtle shades of blue or green for interactive elements if absolutely necessary, but generally avoided.
*   **Typography:**
    *   **Font Family:** Simple, widely available sans-serif fonts. Prioritize `Arial`, `Verdana`, `Tahoma`, or `sans-serif` fallback.
    *   **Font Sizes:** Standard, legible sizes. `16px` for body text, `20-24px` for main headings, `14px` for secondary information.
    *   **Font Weight:** Primarily `normal` (400) and `bold` (700). No light or extra-bold weights.
*   **Layout & Spacing:**
    *   **Whitespace:** Ample and consistent whitespace to reduce clutter.
    *   **Alignment:** Predominantly left-aligned text.
    *   **Structure:** Clear, distinct blocks of content. Use thin borders or subtle background colors to delineate sections.
    *   **Max-Width:** Content should be constrained to a reasonable maximum width (e.g., `800px` to `1000px`) for readability, centered on the page.
*   **Interactivity:**
    *   **Links:** Standard blue, underlined. Hover state: darker blue, still underlined.
    *   **Buttons:** Flat design, simple border, subtle background on hover. No complex animations or gradients.
*   **Imagery:**
    *   **Profile Pictures:** Simple circular or square, functional. No fancy borders or effects.
    *   **Icons:** Minimal use, if any. Text labels preferred.
*   **Borders & Shadows:**
    *   **Borders:** Thin (`1px`), solid, light gray. Used for separating sections or outlining cards.
    *   **Shadows:** Extremely subtle, if used at all. A `box-shadow: 0 1px 2px rgba(0,0,0,0.1);` might be acceptable for cards, but flat design is preferred.

## III. Component-wise Mapping and UI Design

This section details how each part of the `FullProfile` schema will be translated into UI elements, adhering to the retro minimalistic design principles.

---

### 1. Page Container & Overall Structure

*   **UI Element:** Main `div` wrapping the entire content.
*   **Styling:**
    *   `max-width: 960px;` (or `lg` in Tailwind)
    *   `margin: 20px auto;` (centered)
    *   `padding: 20px;`
    *   `font-family: Arial, sans-serif;`
    *   `color: #333333;`
    *   `background-color: #F8F8F8;` (or `bg-gray-50`)
*   **Tailwind:** `max-w-3xl mx-auto p-5 font-sans text-gray-800 bg-gray-50`

---

### 2. Search Results Header

*   **Section Title:** "Search Results for "{query}""
*   **UI Element:** `h1`
*   **Styling:**
    *   `font-size: 24px;` (`text-2xl`)
    *   `font-weight: bold;` (`font-bold`)
    *   `margin-bottom: 20px;` (`mb-5`)
    *   `color: #000000;` (`text-black`)
*   **Tailwind:** `text-2xl font-bold mb-5 text-black`

---

### 3. Individual Profile Card

Each profile will be contained within a distinct card.

*   **UI Element:** `div`
*   **Styling:**
    *   `border: 1px solid #CCCCCC;` (`border border-gray-300`)
    *   `padding: 15px;` (`p-4`)
    *   `margin-bottom: 15px;` (`mb-4`)
    *   `background-color: #FFFFFF;` (`bg-white`)
    *   `border-radius: 0;` (sharp corners, retro)
    *   `box-shadow: none;` (or very subtle `0 1px 2px rgba(0,0,0,0.05)`)
*   **Tailwind:** `border border-gray-300 p-4 mb-4 bg-white`

---

### 4. Profile Header (Inside Card)

*   **Fields:** `profilePictureThumbnailUrl`, `name`, `headline`, `profileUrl`
*   **UI Elements:** `img`, `h2`, `a`, `p`
*   **Styling:**
    *   **Image:** `width: 48px; height: 48px;` (`w-12 h-12`), `border-radius: 0;` (square, retro), `float: left; margin-right: 10px;` (`float-left mr-4`).
    *   **Name (`h2`):** `font-size: 18px;` (`text-lg`), `font-weight: bold;` (`font-semibold`), `margin-bottom: 5px;` (`mb-1`).
    *   **Profile URL (`a`):** `color: #1A0dab;` (`text-blue-700`), `text-decoration: underline;` (`hover:underline`).
    *   **Headline (`p`):** `font-size: 14px;` (`text-sm`), `color: #333333;` (`text-gray-800`), `margin-bottom: 5px;` (`mb-1`).
*   **Conditional Rendering:** `profile.profilePictureThumbnailUrl` for image.
*   **Tailwind:**
    *   `img`: `w-12 h-12 float-left mr-4`
    *   `h2`: `text-lg font-semibold mb-1`
    *   `a`: `text-blue-700 hover:underline`
    *   `p`: `text-gray-800 text-sm mb-1`

---

### 5. Summary / About

*   **Fields:** `about`, `summarySnippet`
*   **UI Elements:** `p`, `strong`
*   **Styling:**
    *   `margin-top: 10px;` (`mt-2`), `font-size: 14px;` (`text-sm`), `color: #333333;` (`text-gray-800`).
    *   `strong`: `font-weight: bold;` (`font-bold`).
*   **Conditional Rendering:** `profile.about` or `profile.summarySnippet`.
*   **Tailwind:** `mt-2 mb-1 text-sm text-gray-800`

---

### 6. Key Stats (Connections, Followers)

*   **Fields:** `connections_count`, `follower_count`
*   **UI Elements:** `p`, `strong`
*   **Styling:** `font-size: 14px;` (`text-sm`), `color: #333333;` (`text-gray-800`), `margin-bottom: 5px;` (`mb-1`).
*   **Conditional Rendering:** `profile.connections_count !== undefined`, `profile.follower_count !== undefined`.
*   **Tailwind:** `text-gray-700 text-sm mb-1`

---

### 7. Location

*   **Fields:** `location`
*   **UI Elements:** `p`
*   **Styling:** `font-size: 14px;` (`text-sm`), `color: #333333;` (`text-gray-800`), `margin-bottom: 5px;` (`mb-1`).
*   **Conditional Rendering:** `profile.location`.
*   **Tailwind:** `text-gray-700 text-sm mb-1`

---

### 8. Experience, Education, Certifications, Organizations, Awards, Activity

These sections follow a similar pattern: a strong title, followed by an unordered list of items.

*   **Section Title (e.g., "Experience:", "Education:")**
    *   **UI Element:** `strong` within a `div`
    *   **Styling:** `display: block; margin-bottom: 5px;` (`block mb-1`), `font-weight: bold;` (`font-bold`).
    *   **Tailwind:** `block mb-1 font-bold`
*   **List Container:**
    *   **UI Element:** `ul`
    *   **Styling:** `list-style: none; padding: 0;` (`list-none p-0`).
    *   **Tailwind:** `list-none p-0`
*   **List Item:**
    *   **UI Element:** `li`
    *   **Styling:** `margin-bottom: 5px;` (`mb-1`), `font-size: 14px;` (`text-sm`), `color: #555555;` (`text-gray-700`).
    *   **Tailwind:** `mb-1 text-sm text-gray-700`
*   **Conditional Rendering:** `if (section && section.length > 0)`.

    *   **Experience Item:** `{exp.title} at {exp.company} ({exp.startDate} - {exp.endDate || 'Present'})`
    *   **Education Item:** `{edu.degree} from {edu.institution} ({edu.startDate} - {edu.endDate || 'Present'})`
    *   **Certifications Item:** `{cert.name} ({cert.authority})`
    *   **Organizations Item:** `{org.organization} {org.position ? `(${org.position})` : ''}`
    *   **Awards Item:** `{award.title} from {award.issuer}`
    *   **Activity Item:** `a` tag with `href={act.activity_url}` and text `{act.title || act.action}`.

---

### 9. Skills

*   **Fields:** `skills` (array of strings)
*   **UI Elements:** `div`, `strong`
*   **Styling:** `margin-top: 10px;` (`mt-2`), `font-size: 14px;` (`text-sm`), `color: #555555;` (`text-gray-700`).
*   **Conditional Rendering:** `profile.skills && profile.skills.length > 0`.
*   **Content:** `<strong>Skills:</strong> {profile.skills.join(', ')}`
*   **Tailwind:** `mt-2 text-sm text-gray-700`

---

### 10. Languages

*   **Fields:** `languages` (array of objects with `language` and `proficiency`)
*   **UI Elements:** `div`, `strong`, `ul`, `li`
*   **Styling:** Similar to other lists.
*   **Conditional Rendering:** `profile.languages && profile.languages.length > 0`.
*   **Content:** `<strong>Languages:</strong> {profile.languages.map((lang: any) => `${lang.language} (${lang.proficiency})`).join(', ')}`
*   **Tailwind:** `mt-2 text-sm text-gray-700`

---

### 11. Raw Coresignal Data Display

*   **UI Element:** `div`, `button`, `pre`
*   **Styling:**
    *   **Container:** `margin-top: 30px; padding: 15px; border: 1px solid #CCCCCC; background-color: #F0F0F0;` (`mt-8 p-4 border border-gray-300 rounded-lg bg-gray-50`).
    *   **Button:** `color: #1A0dab; text-decoration: underline; font-weight: bold;` (`text-blue-700 hover:underline font-semibold mb-2`).
    *   **Preformatted Text:** `background-color: #FFFFFF; padding: 10px; overflow: auto; font-size: 12px; line-height: 1.5;` (`bg-white p-3 rounded-md overflow-auto text-xs leading-relaxed`).
*   **Conditional Rendering:** `rawCoresignalData` and `showRawData` state.
*   **Tailwind:** `mt-8 p-4 border border-gray-300 rounded-lg bg-gray-50` for container.

## IV. Implementation Notes

*   **Tailwind CSS:** Leverage Tailwind CSS classes extensively to implement the described styling. This allows for rapid prototyping and consistency.
*   **Conditional Rendering:** Use `&&` and `?.` operators for concise conditional rendering of sections and fields that might be `null`, `undefined`, or empty arrays.
*   **Type Safety:** Ensure `FullProfile` interface is correctly used to maintain type safety.
*   **Readability:** Keep the JSX clean and readable, breaking down complex sections into smaller, logical blocks.
*   **Accessibility:** Ensure proper semantic HTML elements are used.
*   **Retro Feel:** Avoid modern UI trends like excessive rounded corners, complex animations, or vibrant color gradients. Stick to flat, functional design.
*   **Data Mapping:** The `search-coresignal/route.ts` is responsible for mapping the raw Coresignal data to the `FullProfile` interface. This plan assumes that mapping is correct and provides the necessary fields. If new fields are added to the UI, ensure they are also mapped in the API route.
