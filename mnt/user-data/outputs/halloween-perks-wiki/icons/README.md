# Icons

Drop perk card images here, named like this:

    NAME_IN_CAPS_WITH_UNDERSCORES_ROMANNUMERAL.png

The roman numeral is the level: I = Common, II = Rare, III = Super Rare,
IV = Epic, V = Legendary. Example: "Sixth Sense" at Common is
`SIXTH_SENSE_I.png`.

Named this way, a card picks up its image automatically — nothing to edit
in `data.js`. A perk with no matching file just shows a colored monogram
instead, so nothing ever looks broken.

If a file can't follow the pattern, override it for that one perk/level in
`data.js` — see the comment at the top of that file for the exact syntax.

Currently in here:
- `SIXTH_SENSE_I.png`
- `PIEP_PIPER_II.png` *(typo — should be PIED_PIPER_II.png; rename to drop the override in data.js)*
- `THICK_SKIN_III.png`
- `SURVIVIAL_RAGE_IV.png` *(typo — should be SURVIVAL_RAGE_IV.png; rename to drop the override in data.js)*
- `TRESPASSER_V.png`
- `WIRED_V.png`
