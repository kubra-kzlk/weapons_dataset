 **Legendary Weapons**

We werken deze keer met een dataset van **wapens**. Elk wapen heeft een id, naam, type, beschrijving en een afbeelding.
De dataset kan je vinden op:
👉 *(hier kan jij terug een JSON hosten op GitHub, net zoals je bij Dinomon deed)*

**Dataset (voorbeeld):**

```json
[
  {
    "id": 1,
    "name": "Stormbreaker",
    "type": "Axe",
    "description": "A mighty axe forged by the gods, crackling with thunder.",
    "image": "https://example.com/images/stormbreaker.png"
  },
  {
    "id": 2,
    "name": "Shadowfang",
    "type": "Dagger",
    "description": "A cursed blade that thrives in darkness and silence.",
    "image": "https://example.com/images/shadowfang.png"
  },
  {
    "id": 3,
    "name": "Sunblade",
    "type": "Sword",
    "description": "A radiant sword glowing with the eternal light of the sun.",
    "image": "https://example.com/images/sunblade.png"
  },
  {
    "id": 4,
    "name": "Frostpiercer",
    "type": "Spear",
    "description": "A chilling spear that freezes its victims instantly.",
    "image": "https://example.com/images/frostpiercer.png"
  },
  {
    "id": 5,
    "name": "Earthshaker",
    "type": "Hammer",
    "description": "A colossal hammer capable of splitting mountains.",
    "image": "https://example.com/images/earthshaker.png"
  }
]
```

---

### API Routes

1. **GET /weapons**
   Geef een JSON terug met alle wapens.
   De data moet via `fetch` opgehaald worden van de JSON op GitHub.
   *(Hier hoef je dus niets extra te joinen, want er is maar 1 array.)*

---

### Client Side Rendering

* **/weapons**
  Toon alle wapens met **naam en type**.
  Tijdens het laden moet “Loading…” verschijnen.
  Data komt van je eigen API route `/weapons`.

---

### Static Site Generation

* **/weapons**
  Toon een lijst met alle weapons (met `Link` naar hun detailpagina).
  Voorzie een **search bar** om te filteren op naam (case-insensitive).
  Data moet rechtstreeks van de JSON komen (niet van je API).

* **/weapons/\:id**
  Toon detailpagina van een weapon met **naam, type, beschrijving en afbeelding**.
  Gebruik dynamische SSG routes: `/weapons/1`, `/weapons/2`, …

---

### Server Side Rendering

* **/** (homepagina)
  Toon een lijst van alle weapons.
  Elke weapon-naam moet linken naar de detailpagina.
  Data rechtstreeks ophalen via `fetch` (dus niet via je eigen API).


