import { works } from './works.js'

// Series are built automatically from the `series` field in works.js:
// every distinct name gets its own page at /work/<slug> and an entry in the Work menu,
// in the order each series first appears in works.js.
//
// Optional extras, keyed by the exact series name. Both fields are optional.
//   description: a line or two shown at the top of the series page
//   cover:       the id of the piece to show on the series card (defaults to the first piece)
export const seriesInfo = {
  // 'Pets': { description: 'Commissioned portraits of dogs, horses and other companions.', cover: 'corgi' },
}

export const slugify = (name) =>
  name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export const series = [...new Set(works.map((w) => w.series))].map((name) => {
  const items = works.filter((w) => w.series === name)
  const info = seriesInfo[name] ?? {}
  return {
    name,
    slug: slugify(name),
    works: items,
    description: info.description,
    cover: items.find((w) => w.id === info.cover) ?? items[0],
  }
})

export const findSeries = (slug) => series.find((s) => s.slug === slug)
