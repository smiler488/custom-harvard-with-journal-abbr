# Custom Harvard With Journal Abbr

[English](README.md) | 中文

[![CI](https://github.com/smiler488/custom-harvard-with-journal-abbr/actions/workflows/test.yml/badge.svg)](https://github.com/smiler488/custom-harvard-with-journal-abbr/actions/workflows/test.yml) ![License: CC BY-SA 3.0 (style) / MIT (rest)](https://img.shields.io/badge/license-CC_BY--SA_3.0_%2F_MIT-blue.svg) ![CSL 1.0](https://img.shields.io/badge/CSL_1.0-informational)
一个给幻灯片用的 Zotero 引用样式（CSL）。从 Zotero 把文献拖进 PowerPoint、Keynote 或 Beamer 源文件，就会得到一个带期刊缩写的简短引用：

```
(Deng et al., Plant Phenomics, 2025)
(Tang & Zhou, J. Integr. Agric., 2025)
(Smith, Field Crops Research, 2023)
```

做报告时，我希望听众当场就能看到结果发表在哪里，而不是等到最后的参考文献页。作者、期刊、年份放进一个短括号就够了，配合 Zotero 的快速复制，拖一下就能插进去。

## 安装

1. 下载 [`custom-harvard-with-journal-abbr.csl`](custom-harvard-with-journal-abbr.csl)（打开文件后点 **Download raw file**）。
2. Zotero → **设置 → 引用 → 样式 → +**，选择刚下载的文件，列表里会出现 "Custom Harvard With Journal Abbr"。
3. Zotero → **设置 → 导出 → 条目格式**，选择 "Custom Harvard With Journal Abbr"。

## 使用

- **拖放**：从 Zotero 把一篇或多篇文献拖进文本框。多篇时显示为 `(A, J1, 2024; B, J2, 2025)`。
- **快捷键**：选中文献后按 Ctrl+Shift+C（macOS 为 Cmd+Shift+C），然后粘贴。
- **参考文献页**：右键 → *由所选条目创建参考文献表*，每条文献单独一行括号，按作者排序。

## 格式规则

| 情况 | 输出 |
|---|---|
| 一位作者 | `(Smith, …)` |
| 两位作者 | `(Tang & Zhou, …)` |
| 三位及以上 | `(Deng et al., …)` |
| 没有填"期刊缩写" | 显示期刊全称 |
| 没有作者 | 先用编者，没有编者就用短标题 |
| 没有日期 | `n.d.` |
| 同一作者、同一年份 | `2025a`、`2025b` |

期刊缩写取自每条文献的 **期刊缩写（Journal Abbr）** 字段，很多期刊在导入时 Zotero 会自动填好；没有的手动填一次就行，例如 `J. Integr. Agric.`。

如果希望两位作者时也写成 `et al.`（本次修订之前就是这样），把文件里两处 `et-al-min="3"` 都改成 `et-al-min="2"`。

## 本次修订

- 排序键引用了一个不存在的宏 `author`，按 CSL 规范这个样式是无效的，参考文献表的排序也等于随机。
- 没有填期刊缩写的文献，期刊名会整个消失；现在会改用期刊全称。
- 两位作者写作 `A & B`，不再写成 `A et al.`。
- 原来年份合并时会出现 `(Deng et al., Plant Phenomics, 2025a, Plant Phenomics, 2025b)` 这样的结果，现在每条引用都完整显示。
- 文件名里不再有空格，注释改为英文，作者名也改正了。

已用 Zotero 使用的引擎 citeproc-js 渲染测试。

## 许可证

样式文件采用 CC BY-SA 3.0（文件内已注明），和 Zotero 官方样式库里的所有样式一致；README 等其他文件采用 MIT 许可，见 [LICENSE](LICENSE)。邓良超（Liangchao Deng）。
