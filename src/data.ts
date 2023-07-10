export const heroProducts = [
  {
    id: 'h1',
  },
  {
    id: 'h2',
  },
  {
    id: 'h3',
  },
  { id: 'h4' },
]

// Creación de productos para la sección de ofertas (15 productos)
export const ofertaProducts = Array.from({ length: 15 }, (e, index) => ({
  id: `of${index + 1}`,
}))

// Creación de productos para la sección de productos destacados (15 productos)
export const destacadosProducts = Array.from({ length: 15 }, (e, index) => ({
  id: `des${index + 1}`,
}))

// Unificar todos los conjuntos de productos en un solo array utilizando desestructuración
export const allProducts = [
  ...heroProducts,
  ...ofertaProducts,
  ...destacadosProducts,
]
