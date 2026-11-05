# Custom Harvard With Journal Abbr

English | [中文](README.zh-CN.md)

[![CI](https://github.com/smiler488/custom-harvard-with-journal-abbr/actions/workflows/test.yml/badge.svg)](https://github.com/smiler488/custom-harvard-with-journal-abbr/actions/workflows/test.yml) ![License: CC BY-SA 3.0 (style) / MIT (rest)](https://img.shields.io/badge/license-CC_BY--SA_3.0_%2F_MIT-blue.svg) ![CSL 1.0](https://img.shields.io/badge/CSL_1.0-informational)
A Zotero citation style (CSL) for slides. Dragging a paper from Zotero into PowerPoint, Keynote or a Beamer source gives a short citation with the journal abbreviation:

```
(Deng et al., Plant Phenomics, 2025)
(Tang & Zhou, J. Integr. Agric., 2025)
(Smith, Field Crops Research, 2023)
```

In talks I like the audience to see where a result was published without a reference slide at the end. Author, journal and year in one short bracket does that, and Zotero's quick copy makes it a drag and drop.

## Install

1. Download [`custom-harvard-with-journal-abbr.csl`](custom-harvard-with-journal-abbr.csl) (open the file, then **Download raw file**).
2. Zotero → **Settings → Cite → Styles → +**, pick the file. "Custom Harvard With Journal Abbr" appears in the list.
3. Zotero → **Settings → Export → Item Format**, choose "Custom Harvard With Journal Abbr".

## Use

- **Drag and drop**: drag one or more items from Zotero into a text box. Several items give `(A, J1, 2024; B, J2, 2025)`.
- **Keyboard**: select items and press Ctrl+Shift+C (macOS: Cmd+Shift+C), then paste.
- **Reference slide**: right-click → *Create Bibliography from Items* gives one bracket per line, sorted by author.

## Format rules

| Situation | Output |
|---|---|
| one author | `(Smith, …)` |
| two authors | `(Tang & Zhou, …)` |
| three or more | `(Deng et al., …)` |
| no "Journal Abbr" in Zotero | full journal title |
| no author | editor, then short title |
| no date | `n.d.` |
| same author and year | `2025a`, `2025b` |

The abbreviation comes from the **Journal Abbr** field of each item. Zotero fills it for many journals on import. For the rest, type it once, for example `J. Integr. Agric.`.

To get `et al.` for two authors as well (the version before this revision did that), change both `et-al-min="3"` to `et-al-min="2"` in the file.

## Changes in this revision

- The sort keys referred to a macro called `author` that does not exist, which made the style invalid CSL. Bibliography order was effectively random.
- Items without a Journal Abbr lost the journal entirely. They now fall back to the full title.
- Two-author papers are written `A & B` instead of `A et al.`.
- Year collapsing produced `(Deng et al., Plant Phenomics, 2025a, Plant Phenomics, 2025b)`. Each citation is now complete.
- The file name no longer contains spaces. Comments are in English and the author name is fixed.

Tested by rendering with citeproc-js, the engine Zotero uses.

## License

The style file is CC BY-SA 3.0, like all styles in the Zotero style repository (stated inside the file). The README and other files are MIT, see [LICENSE](LICENSE). Liangchao Deng (邓良超).
