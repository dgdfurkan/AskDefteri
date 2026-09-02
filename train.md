Create a complete, production-ready, cinematic 3D scroll experience telling the story of a couple’s first meeting at an Istanbul M1 metro station.

IMPORTANT:
Do not only explain the solution.
Do not give me a plan, pseudocode, mockup, storyboard, or partial implementation.
Immediately create the complete working project, implement every scene, run it, inspect it for errors, and fix all problems before finishing.

## Core Story

The experience represents this real memory:

A young woman arrives on the Istanbul M1 metro line.
A young man is waiting for her on the station platform.
The metro enters the station as the user scrolls.
The train stops smoothly.
The doors open.
The woman exits the train.
She notices the young man.
They walk toward each other.
They finally hug.

The characters must be intentionally subtle and anonymous. Their faces should not be clearly visible. The scene should feel like a memory rather than a character showcase.

## Technology

Build the project using:

* Vite
* TypeScript
* Three.js
* Native browser scrolling
* requestAnimationFrame
* Modular and maintainable architecture
* No React unless the existing repository already requires React
* No paid assets
* No remote 3D model dependency required for the core experience
* No external texture or model URL that could break later

The entire core scene must work using procedurally created Three.js geometry.

External assets may only be optional enhancements. The experience must remain visually complete when no external model or texture is available.

## Fundamental Interaction Rule

This is not an autoplay animation.

Every important animation must be directly controlled by normalized page scroll progress.

Scrolling downward advances the story.

Scrolling upward reverses the story smoothly and correctly.

There must be no animation desynchronization, sudden resets, accumulating animation state, duplicated events, or timeline drift.

Use one normalized master progress value between 0 and 1.

Smooth the raw scroll progress using frame-rate-independent interpolation, but do not introduce excessive delay between scrolling and visual movement.

All scene states must be calculated deterministically from the current normalized scroll position.

## Story Timeline

### 0%–12% — Establishing the station

Show a cinematic three-dimensional Istanbul metro station inspired by the M1 line.

The station should include:

* Underground platform
* Rails
* Sleepers
* Tunnel
* Platform edge
* Columns
* Ceiling panels
* Industrial lights
* Direction signs
* A restrained red M1 line accent
* Turkish metro atmosphere
* Slightly worn but clean surfaces
* Subtle reflections
* Ambient dust particles
* Distant tunnel lighting

Do not copy an exact real station or use official copyrighted logos. Create an original station inspired by Istanbul’s M1 metro atmosphere.

The camera begins near the platform at human eye level.

The young man waits on the platform. He should initially be seen from behind or from a distant side angle.

Use a subtle idle animation:

* Small weight shift
* Breathing
* Slight head movement toward the tunnel

### 12%–38% — Metro approaches

As the user scrolls:

* Tunnel lights appear first
* The metro becomes visible inside the tunnel
* The train travels toward the platform
* Reflections move across the rails and tiled surfaces
* Station lights subtly react to the approaching train
* A gentle camera movement increases the cinematic feeling
* The train decelerates naturally
* Wheel movement gradually slows
* The train aligns correctly with the platform

The train must not slide sideways or pass through geometry.

The metro must have an original design inspired by Istanbul urban rail vehicles, without exact branding.

Create the train from procedural Three.js geometry with:

* Multiple connected cars or the convincing appearance of multiple cars
* Windows
* Interior lighting
* Doors
* Front windshield
* Headlights
* Wheel or undercarriage details
* Metallic body panels
* Dark window material

The train must move as a complete parent group so all parts remain aligned.

### 38%–50% — Train stops

The train completes its braking motion.

Add subtle secondary movement:

* Slight suspension settling
* Interior light stabilization
* Reflections settling
* Camera easing
* Small environmental vibration

The train must stop at the exact same position every time.

Scrolling backward must correctly make the train leave the station in reverse.

### 50%–60% — Doors open

The metro doors open based entirely on scroll progress.

Requirements:

* Door panels slide into the correct positions
* Door movement is smooth
* Doors never detach from the train
* The interior becomes visible
* Warm interior light contrasts with the cooler station light
* The woman is initially seen only as a soft silhouette inside the train

Do not make the character suddenly appear.

Her visibility must be naturally revealed by the opening doors and camera angle.

### 60%–73% — Woman exits the train

The woman steps out of the metro.

Use a simplified articulated low-poly human character made from procedural geometry.

The character should include:

* Head
* Torso
* Upper and lower arms
* Upper and lower legs
* Hands and feet
* Simple hair silhouette
* Coat, jacket, dress, or similar neutral outfit shape

Do not create detailed facial features.

Animate a believable short walking cycle.

The feet should not visibly slide across the floor.

Her movement should include:

* First step out of the train
* Second step onto the platform
* Brief pause
* Slight head turn
* Recognition of the waiting young man

The woman must not intersect with the train doors or platform.

### 73%–86% — They approach each other

The young man turns toward her.

Both characters walk toward each other.

The camera should gently arc to a composition where both are visible.

Use subtle body language:

* She slightly speeds up
* He steps forward
* Their shoulders relax
* They lift their arms before reaching each other

The characters should remain anonymous and mostly seen from the side, behind, or as cinematic silhouettes.

Avoid exaggerated romance animation.

The emotion should feel natural, warm, and sincere.

### 86%–96% — Hug

The characters reach each other and hug.

Create a convincing procedural hug animation:

* Bodies stop at a natural distance
* Arms rise before contact
* Upper bodies lean slightly inward
* Arms wrap around shoulders or upper back
* Heads tilt naturally
* No body-part intersection through torsos
* No robotic snapping
* No sudden position changes

The hug must be controlled by scroll progress and reversible.

When scrolling backward:

* The arms release naturally
* The characters step apart
* They return to their previous walking states
* No animation state should become corrupted

Hold the final hug pose for the last part of the timeline.

### 96%–100% — Final memory shot

The camera slowly pulls back.

The couple remains hugging near the stopped metro.

The visual mood becomes warmer.

Add subtle bloom-like lighting without making the scene blurry.

Show a small, elegant Turkish text overlay:

“Bir metro kapısı açıldı.”

Then transition to:

“Ve hayatımızın en güzel yolculuğu başladı.”

The text must be editable from a central configuration file.

Do not use oversized typography.

The final frame should feel like a cinematic memory photograph.

## Visual Direction

Style:

* Cinematic
* Emotional
* Elegant
* Stylized realism
* High-quality low-poly or simplified semi-realistic 3D
* Not cartoonish
* Not childish
* Not a mobile game aesthetic
* Not neon cyberpunk
* Not overly glossy
* Not an AI-generated image slideshow

Color and lighting:

* Cool gray and muted blue station lighting
* Restrained red M1-inspired accents
* Warm yellow metro interior light
* Warm emotional lighting during the final hug
* Realistic contrast
* Soft shadows
* Subtle atmospheric fog
* Controlled reflections

Use physically correct lighting where appropriate.

Use a cinematic color balance, but maintain readable contrast on mobile displays.

## Camera Direction

The camera must feel like a controlled cinematic camera, not an orbit-control demo.

Do not provide free orbit controls to the visitor.

Camera movement should be driven by scroll progress.

Suggested camera progression:

1. Platform-level establishing shot
2. Slight look toward the tunnel
3. Track the train approaching
4. Settle near the opening door
5. Follow the woman as she exits
6. Arc around the approaching couple
7. Frame the hug from a tasteful side or rear angle
8. Slowly pull back for the final shot

Use smooth position and quaternion interpolation.

Avoid sudden camera cuts.

The camera must never pass through the train, characters, walls, ceiling, or platform.

## Character Implementation

Create both characters using a reusable procedural character class or factory.

Each character should have a hierarchical skeleton-like structure:

* Root
* Hips
* Torso
* Neck
* Head
* Left and right upper arm
* Left and right lower arm
* Left and right hand
* Left and right upper leg
* Left and right lower leg
* Left and right foot

Use parent-child transforms so walking and hugging animations remain stable.

Create animation functions based on normalized values rather than elapsed time alone.

Examples:

* setIdlePose(progress)
* setWalkPose(progress, walkCycles)
* setRecognitionPose(progress)
* setHugPose(progress)
* setCharacterStoryProgress(masterProgress)

The final character state must be reproducible from any scroll position without requiring the earlier frames to have played.

## Metro Implementation

Create the metro as a reusable group with separate components:

* Main body
* Windows
* Interior
* Door groups
* Wheels or undercarriage
* Front section
* Headlights
* Interior passengers represented only by a few extremely subtle silhouettes, if performance allows

Each door must have independent left and right panels parented to the metro car.

Create a function such as:

setDoorOpenProgress(value: number)

The function must accept values between 0 and 1 and place every door panel deterministically.

Do not depend on previously called states.

## Station Implementation

Build the station using reusable modules:

* Platform builder
* Rail builder
* Tunnel builder
* Column builder
* Ceiling builder
* Sign builder
* Light builder
* Bench or station furniture builder

Use InstancedMesh for repeated elements where useful.

Use generated CanvasTexture materials for small signs, surface markings, route accents, and subtle procedural texture variation.

Do not load text as a remote image.

## Scroll Page Structure

Create enough vertical page length for a slow cinematic experience, approximately 600vh to 900vh.

The WebGL canvas should remain sticky or fixed while the scroll story progresses.

Use transparent HTML sections or a scroll progress controller.

Do not let large empty white sections become visible.

Add a minimal scroll indicator at the beginning:

“Kaydırarak hikâyeyi başlat”

The indicator should fade out naturally after the user begins scrolling.

Do not create navigation menus, cards, buttons, dashboards, or unrelated UI.

## Responsive Behaviour

The scene must work correctly on:

* Desktop
* Laptop
* Tablet
* Mobile portrait
* Mobile landscape

On mobile:

* Adjust camera framing
* Keep both characters visible
* Reduce particle count
* Reduce shadow map resolution
* Reduce reflection complexity
* Maintain readable text
* Avoid horizontal overflow
* Prevent accidental page zoom or layout shifts

Handle resize and device pixel ratio changes safely.

Clamp renderer pixel ratio to a reasonable maximum.

## Performance Requirements

Target:

* Smooth 60 FPS on a normal desktop
* Stable 30–60 FPS on modern mobile devices
* No uncontrolled memory allocation inside the animation loop
* No recreation of geometry or materials every frame
* Reuse vectors, quaternions, matrices, and temporary objects
* Use instancing for repeating geometry where appropriate
* Dispose resources properly
* Pause expensive rendering when the page is not visible
* Avoid excessive post-processing
* Avoid extremely high shadow map sizes
* Use frustum culling where applicable

The animation loop must only perform necessary updates.

## Accessibility and Fallback

Respect prefers-reduced-motion.

For reduced motion:

* Keep the 3D scene
* Reduce camera movement
* Reduce character motion intensity
* Remove camera shake
* Keep the main scroll-controlled story understandable

Create a graceful WebGL fallback message instead of a blank screen.

The fallback should use the same story text and visual mood.

## Architecture

Use a clear modular folder structure similar to:

src/
main.ts
style.css
config/
storyConfig.ts
core/
App.ts
RendererManager.ts
ScrollController.ts
ResponsiveManager.ts
scene/
MetroStoryScene.ts
Environment.ts
Lighting.ts
CameraDirector.ts
objects/
Station.ts
MetroTrain.ts
ProceduralCharacter.ts
ParticleSystem.ts
animation/
StoryDirector.ts
characterPoses.ts
easing.ts
ui/
StoryOverlay.ts

Do not place the entire project inside one giant file.

Use strict TypeScript.

Avoid any usage where possible.

Add concise comments for complex animation math.

## Central Story Configuration

Create a central configuration file containing editable values such as:

* Main title
* Final captions
* Character clothing colors
* Metro accent color
* Station sign text
* Lighting intensity
* Scroll length
* Story segment ranges
* Mobile quality settings
* Desktop quality settings

Do not hardcode editable story text throughout the project.

Use Turkish UTF-8 text correctly.

## Animation Quality

Use named easing functions for different story moments:

* Smooth train acceleration and braking
* Smooth door opening
* Natural walk transitions
* Gentle recognition movement
* Soft hug transition
* Cinematic camera interpolation

Do not use the same basic linear interpolation for every motion.

However, every easing result must still be derived from the current scroll progress.

Create helper functions such as:

* clamp01
* inverseLerp
* remapClamped
* smoothstep
* smootherstep
* easeInOutCubic
* easeOutCubic
* easeInOutSine

## Required Final Validation

Before completing the task, actually run the project and validate all of the following:

1. The project builds successfully.
2. There are no TypeScript errors.
3. There are no browser console errors.
4. The metro approaches and stops correctly.
5. The metro doors open correctly.
6. The woman exits without intersecting the train.
7. Both characters approach each other.
8. The hug looks natural.
9. Scrolling backward reverses every stage correctly.
10. Rapid scrolling does not break the scene.
11. Resizing does not reset or corrupt the story.
12. Mobile layout does not crop the important action.
13. Refreshing at a middle scroll position restores a valid visual state.
14. No external model or texture failure can make the main scene disappear.
15. No animation continues independently after scrolling stops.
16. The final Turkish captions display correctly.
17. There are no blank frames.
18. The page never shows a white background between sections.

Fix every detected issue instead of documenting it as a known problem.

## Completion Requirements

At the end:

* Provide the complete working files.
* Clearly state the command used to run the project.
* Mention the main configuration file where the story text and colors can be edited.
* Do not leave TODO comments.
* Do not leave placeholder functions.
* Do not use fake buttons.
* Do not stop after creating only the station.
* Do not replace the characters with static images.
* Do not simulate 3D using only CSS.
* Do not use a prerecorded video.
* Do not use an image sequence.
* The train, station, characters, camera, lighting, door movement, walking, and hug must all exist as actual interactive Three.js scene elements.
