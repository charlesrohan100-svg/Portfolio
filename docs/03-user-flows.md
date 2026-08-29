**Flow 1 — Judge whether I am worth interviewing**

Who: hiring manager arriving from a resume link
Goal: decide whether to move me forward

1. Loading animation plays — once per session, under 1.2s, skippable
2. Hero appears: name, role, hook
3. Scrolls — line animation guides toward "What I do"
4. Reads "What I do": how I work — document, design, plan, take apart, rebuild
5. Reaches Projects, which is the evidence for the claim in step 4
6. Either opens a project, or reads the short text and continues
7. Reaches Contact

States:
- Returning in the same tab: no loading animation
- Reduced motion on: no loading animation, no smooth scroll, all
  elements shown in final position immediately

**Flow 2 — Look at a project**

1. Sees project cards with title and a short line each
2. Clicks one
3. Deployed site opens in a NEW TAB — my page stays open

States:
- Loading: grey skeleton shapes matching the card layout
- Zero rows: "No projects yet"
- Database error: honest failure message, error recorded so I find out
- Loading animation never waits for project data

**Flow 3 — Leave a message**

1. Reaches contact section
2. Types name, email, message
3. Presses send
4. Button disabled while sending, cannot be pressed twice
5. Confirmation shown

**States:**
- Typing mistake: message under that field, before sending,
  naming what is wrong
- Server failure: typed text KEPT, clear error, retry offered,
  LinkedIn as second route
- Success: confirmation message

Open decision: modal panel or form always visible in the section