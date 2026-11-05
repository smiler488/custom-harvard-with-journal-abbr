// Render the style with citeproc-js (the engine inside Zotero) and check the output.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const CSL = require('citeproc');

const style = fs.readFileSync(path.join(__dirname, '..', 'custom-harvard-with-journal-abbr.csl'), 'utf8');
const locale = fs.readFileSync(path.join(__dirname, 'locale-en-US-min.xml'), 'utf8');

const A = (family) => ({ family, given: 'X' });
const items = {
  three: { id: 'three', type: 'article-journal', author: [A('Deng'), A('Li'), A('Wang')], 'container-title': 'Plant Phenomics', 'container-title-short': 'Plant Phenomics', issued: { 'date-parts': [[2025]] }, title: 'a' },
  two: { id: 'two', type: 'article-journal', author: [A('Tang'), A('Zhou')], 'container-title': 'Journal of Integrative Agriculture', 'container-title-short': 'J. Integr. Agric.', issued: { 'date-parts': [[2025]] }, title: 'b' },
  noabbr: { id: 'noabbr', type: 'article-journal', author: [A('Smith')], 'container-title': 'Field Crops Research', issued: { 'date-parts': [[2023]] }, title: 'c' },
  same: { id: 'same', type: 'article-journal', author: [A('Deng'), A('Li'), A('Wang')], 'container-title': 'Plant Phenomics', 'container-title-short': 'Plant Phenomics', issued: { 'date-parts': [[2025]] }, title: 'd' },
  nodate: { id: 'nodate', type: 'article-journal', author: [A('Ali')], 'container-title': 'Nature Plants', 'container-title-short': 'Nat. Plants', title: 'e' },
};

function cite(ids) {
  const engine = new CSL.Engine({ retrieveLocale: () => locale, retrieveItem: (id) => items[id] }, style);
  engine.opt.development_extensions.wrap_url_and_doi = false;
  engine.setOutputFormat('text');
  engine.updateItems(Object.keys(items));
  const [, out] = engine.processCitationCluster({ citationItems: ids.map((id) => ({ id })), properties: { noteIndex: 0 } }, [], []);
  return out.map((x) => x[1]).join('');
}

test('three or more authors use et al.', () => assert.strictEqual(cite(['three']), '(Deng et al., Plant Phenomics, 2025)'));
test('two authors are joined with &', () => assert.strictEqual(cite(['two']), '(Tang & Zhou, J. Integr. Agric., 2025)'));
test('missing abbreviation falls back to the full title', () => assert.strictEqual(cite(['noabbr']), '(Smith, Field Crops Research, 2023)'));
test('missing date prints n.d.', () => assert.strictEqual(cite(['nodate']), '(Ali, Nat. Plants, n.d.)'));
test('same author and year get suffixes and stay complete', () =>
  assert.strictEqual(cite(['three', 'same']), '(Deng et al., Plant Phenomics, 2025a; Deng et al., Plant Phenomics, 2025b)'));
