// One entry per piece. Images live in public/works/ (web-sized copies; full-size originals are in /originals).
//
// Fill in what you know — anything left out is simply hidden on the site:
//   year:   2025
//   size:   '30 × 40 cm'  or  '12 × 16 in'
//   price:  '$1,200'      (only shown when status is 'available')
//   status: 'available' | 'sold' | 'commission' | 'nfs' (not for sale)
//   note:   a sentence or two shown in the popup
//   featured: true        (the piece shown large at the top of the home page)
export const works = [
  // Portraits
  { id: 'crissy', title: 'Crissy', series: 'Portraits', medium: 'Oil', image: '/works/crissy.jpg', featured: true },
  { id: 'cam', title: 'Cam', series: 'Portraits', medium: 'Oil', year: 2025, image: '/works/cam.jpg' },
  { id: 'dad', title: 'Dad', series: 'Portraits', medium: 'Oil sketch', image: '/works/dad.jpg' },

  // Pet portraits
  { id: 'german-shepherd', title: 'German Shepherd', series: 'Pets', medium: 'Oil', year: 2026, image: '/works/german-shepherd.jpg' },
  { id: 'springer-spaniel', title: 'Springer with Ball', series: 'Pets', medium: 'Oil', year: 2025, image: '/works/springer-spaniel.jpg' },
  { id: 'ibizan-hound', title: 'Ibizan Hound', series: 'Pets', medium: 'Oil', image: '/works/ibizan-hound.jpg'},
  { id: 'pit', title: 'Pitt', series: 'Pets', medium: 'Oil', image: '/works/pit.jpg' },
   { id: 'luna', title: 'Luna', series: 'Pets', medium: 'Oil', year: 2026, image: '/works/luna.jpg' },
  { id: 'corgi', title: 'Corgi', series: 'Pets', medium: 'Oil', year: 2025, image: '/works/corgi.jpg' },
   { id: 'yorkie', title: 'Yorki', series: 'Pets', medium: 'Oil', year: 2025, image: '/works/yorkie.jpg' },
  { id: 'border-collie', title: 'Border Collie', series: 'Pets', medium: 'Oil', image: '/works/border-collie.jpg' },
  { id: 'chocolate-lab', title: 'Gretchen’s Lab', series: 'Pets', medium: 'Oil', year: 2025, image: '/works/chocolate-lab.jpg' },
  { id: 'boston-terrier', title: 'Boston Terrier', series: 'Pets', medium: 'Oil', image: '/works/boston-terrier.jpg' },
   { id: 'horse', title: 'Horse', series: 'Pets', medium: 'Oil', image: '/works/horse.jpg' },
  { id: 'golden-retriever', title: 'Golden Retriever', series: 'Pets', medium: 'Oil', image: '/works/golden-retriever.jpg' },

  // Still life
  { id: 'bells', title: 'Bells', series: 'Still life', medium: 'Oil', image: '/works/bells.jpg' },
  { id: 'apples', title: 'Apples with Green Bottle', series: 'Still life', medium: 'Oil', image: '/works/apples.jpg' },
  { id: 'grapes-and-bowl', title: 'Grapes and Brass Bowl', series: 'Still life', medium: 'Oil', image: '/works/grapes-and-bowl.jpg' },
  { id: 'pitcher-with-wheat', title: 'Pitcher with Wheat', series: 'Still life', medium: 'Oil', image: '/works/pitcher-with-wheat.jpg' },
    { id: 'peonies', title: 'Peonies', series: 'Still life', medium: 'Oil', image: '/works/peonies.jpg' },


  // Drawings
  { id: 'little-girl', title: 'Girl, Looking Down', series: 'Drawings', medium: 'Graphite', image: '/works/little-girl.jpg' },
  { id: 'charcoal-dog', title: 'Cane Corso', series: 'Drawings', medium: 'Charcoal', image: '/works/charcoal-dog.jpg' },
  { id: 'molly', title: 'Molly', series: 'Drawings', medium: 'Graphite', image: '/works/molly.jpg' },
  { id: 'portrait-study', title: 'Portrait Study', series: 'Drawings', medium: 'Graphite', image: '/works/portrait-study.jpg' },
  { id: 'jesse', title: 'Jesse & Tank(s)', series: 'Drawings', medium: 'Monochrome', image: '/works/jesse.jpg' },

  // Murals
  { id: 'sumo-mural', title: 'Sumo Wrestlers', series: 'Murals', medium: 'Mural', image: '/works/sumo-mural.jpg' },
  { id: 'deutschland-meats-mural', title: 'Deutschland Meats', series: 'Murals', medium: 'Exterior mural', image: '/works/deutschland-meats-mural.jpg' },
]
