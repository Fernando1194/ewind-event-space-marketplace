import { PrismaClient, VenueCategory, UserRole } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Criar usuários
  const user1 = await prisma.user.create({
    data: {
      email: 'maria@bellavista.com.br',
      name: 'Maria Silva',
      phone: '(11) 99999-9999',
      role: UserRole.HOST,
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'giuseppe@villatoscana.com.br',
      name: 'Giuseppe Romano',
      phone: '(12) 98888-8888',
      role: UserRole.HOST,
    },
  })

  const user3 = await prisma.user.create({
    data: {
      email: 'carlos@crystalpalace.com.br',
      name: 'Carlos Mendes',
      phone: '(11) 97777-7777',
      role: UserRole.HOST,
    },
  })

  const guest1 = await prisma.user.create({
    data: {
      email: 'joao@email.com',
      name: 'João Santos',
      phone: '(11) 96666-6666',
      role: UserRole.GUEST,
    },
  })

  // Criar venues
  const venue1 = await prisma.venue.create({
    data: {
      name: 'Chácara Bella Vista',
      description: 'Espaço amplo com piscina, churrasqueira e área verde. Perfeito para eventos familiares e corporativos. A chácara conta com ampla área verde, piscina aquecida, churrasqueira gourmet, salão coberto para 100 pessoas, estacionamento para 50 carros e muito mais.',
      address: 'Estrada Municipal, 1234 - Zona Rural',
      city: 'Atibaia',
      state: 'SP',
      zipCode: '12940-000',
      latitude: -23.1167,
      longitude: -46.5500,
      category: VenueCategory.CHACARA,
      capacity: 150,
      price: 2500,
      images: JSON.stringify([
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4273d583-6b60-4f55-b9ac-4e569747b46a.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/35880e58-fb79-4777-af80-f72753ea4b24.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/38da6a34-d23d-49e7-8011-96096218018c.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f5a10787-69d7-4fde-9e0e-a244f332da4c.png'
      ]),
      amenities: JSON.stringify([
        'Piscina aquecida',
        'Churrasqueira gourmet',
        'Salão coberto',
        'Estacionamento',
        'Área verde',
        'Som ambiente',
        'Iluminação',
        'Banheiros'
      ]),
      rules: JSON.stringify([
        'Não é permitido som alto após 22h',
        'Capacidade máxima de 150 pessoas',
        'Não é permitido fumar em áreas cobertas',
        'Animais de estimação são bem-vindos'
      ]),
      ownerId: user1.id,
    },
  })

  const venue2 = await prisma.venue.create({
    data: {
      name: 'Restaurante Villa Toscana',
      description: 'Ambiente elegante com culinária italiana e vista panorâmica da serra. Ideal para jantares especiais, eventos corporativos e celebrações íntimas. O restaurante oferece menu degustação exclusivo e serviço de sommelier.',
      address: 'Av. Macedo Soares, 567 - Vila Capivari',
      city: 'Campos do Jordão',
      state: 'SP',
      zipCode: '12460-000',
      latitude: -22.7394,
      longitude: -45.5917,
      category: VenueCategory.RESTAURANTE,
      capacity: 80,
      price: 4200,
      images: JSON.stringify([
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b8121f0a-f06e-4471-9c1d-75f6badcc39e.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8880ea64-d9ef-48dc-bb31-e81a7e2fc417.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d3ff24fb-7621-4538-9a7e-d6404fb8454a.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b859ae3-deba-4d63-9ef7-053b3d5d31b5.png'
      ]),
      amenities: JSON.stringify([
        'Vista panorâmica',
        'Culinária italiana',
        'Sommelier',
        'Menu degustação',
        'Área externa',
        'Lareira',
        'Estacionamento valet',
        'Wi-Fi'
      ]),
      rules: JSON.stringify([
        'Reserva mínima de 4 horas',
        'Menu deve ser escolhido com 7 dias de antecedência',
        'Dress code elegante',
        'Não é permitido decoração externa'
      ]),
      ownerId: user2.id,
    },
  })

  const venue3 = await prisma.venue.create({
    data: {
      name: 'Salão Crystal Palace',
      description: 'Salão luxuoso com decoração clássica, sistema de som profissional e equipe especializada. Perfeito para casamentos, formaturas e grandes celebrações.',
      address: 'Rua das Flores, 789 - Centro',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01234-567',
      latitude: -23.5505,
      longitude: -46.6333,
      category: VenueCategory.SALAO,
      capacity: 300,
      price: 8500,
      images: JSON.stringify([
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c7266925-6a58-4d3a-9312-a1e361519b72.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/04feb98e-09d6-40b2-a46b-c277992a266f.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8da8f533-b645-4f04-bdcd-d662bbfbf728.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/77764dea-5168-42ff-82c3-a55b5d0b87e3.png'
      ]),
      amenities: JSON.stringify([
        'Sistema de som profissional',
        'Pista de dança',
        'Iluminação cênica',
        'Ar condicionado',
        'Camarim',
        'Estacionamento',
        'Equipe especializada',
        'Decoração inclusa'
      ]),
      rules: JSON.stringify([
        'Capacidade máxima de 300 pessoas',
        'Contratação obrigatória do buffet da casa',
        'Decoração deve ser aprovada previamente',
        'Não é permitido confete ou serpentina'
      ]),
      ownerId: user3.id,
    },
  })

  // Criar algumas reservas
  await prisma.booking.create({
    data: {
      startDate: new Date('2024-03-15T14:00:00Z'),
      endDate: new Date('2024-03-15T22:00:00Z'),
      guestCount: 80,
      eventType: 'Aniversário',
      message: 'Gostaria de reservar para uma festa de aniversário de 50 anos.',
      totalPrice: 2500,
      status: 'CONFIRMED',
      venueId: venue1.id,
      guestId: guest1.id,
    },
  })

  // Criar algumas avaliações
  await prisma.review.create({
    data: {
      rating: 5,
      comment: 'Lugar maravilhoso! A festa foi um sucesso. Recomendo muito!',
      venueId: venue1.id,
      guestId: guest1.id,
      ownerId: user1.id,
    },
  })

  console.log('✅ Seed concluído com sucesso!')
  console.log(`👥 Usuários criados: 4`)
  console.log(`🏠 Venues criados: 3`)
  console.log(`📅 Reservas criadas: 1`)
  console.log(`⭐ Avaliações criadas: 1`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
