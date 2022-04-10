export const categories = [
  {
    name: 'Print T-Shirts',
    description: 'Edits both cool and casual shirts',
    imageUrl:
      'https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByaW50ZWQlMjBzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    url: '#',
  },
  {
    name: 'White Sneakers',
    description: 'Sporty kicks to stay on the groove',
    imageUrl:
      'https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    url: '#',
  },
  {
    name: 'Printed Kurtas',
    description: 'Festive picks in celebratory prints',
    imageUrl:
      'https://images.unsplash.com/photo-1616879672490-c6d3a23d91f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80',
    url: '#',
  },
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Category = ElementType<typeof categories>
