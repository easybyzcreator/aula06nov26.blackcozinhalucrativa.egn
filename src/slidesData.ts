import { SlideData } from './types';

export const ASSETS = {
  logos: {
    egnn: 'https://raw.githubusercontent.com/easybyzcreator/imagens/2d2a317fa83e06f403873c9b2a6097cb952cf88f/pwa%20egn.png',
    easyByz: 'https://raw.githubusercontent.com/easybyzcreator/imagens/2d2a317fa83e06f403873c9b2a6097cb952cf88f/logo%20easy%20byz%20-%20fundo%20transparente.png',
  },
  people: {
    chefGabi: 'https://raw.githubusercontent.com/easybyzcreator/imagens/0d531e0f355d8a67c90d9642a8fc6554b5c75f79/chefegn.png',
    pati: 'https://raw.githubusercontent.com/easybyzcreator/imagens/c80cce481cdb90b6a8f84b4c9b7013dbb925f317/patiebc.jpg',
  },
  screens: {
    capaInscricao: 'https://raw.githubusercontent.com/easybyzcreator/imagens/b5ec21f6b0a870fae542791bdb93b9d5e626853d/capa%20black%20egn%202026.png',
    telaInicial: 'https://i.ibb.co/nN46pCNP/tela-inicial.png',
    cardapio1: 'https://i.ibb.co/8nTr16bj/tela1.png',
    cardapio2: 'https://i.ibb.co/G3dm8XLN/tela-2.png',
    financeiro1: 'https://i.ibb.co/sJR7L4Yq/tab1.png',
    financeiro2: 'https://i.ibb.co/23SVcK68/tab2.png',
  },
  appLinks: {
    clientApp: 'https://egn-chefgabipaludo.vercel.app/',
    adminApp: 'https://egn-chefgabipaludo.vercel.app/#/admin',
    registrationApp: 'https://blackcozinhalucrativaegnebc2026.vercel.app/',
    mentoriaRegistrationApp: 'https://inscricao-app-egn-ebc-mentoria.vercel.app/',
  },
  contacts: {
    phone: '+1 803 888 9018',
    phoneFormatted: '+1 (803) 888-9018',
    whatsappLink: 'https://wa.me/18038889018?text=Ol%C3%A1%20Pati!%20Participei%20da%20aula%20com%20a%20Chef%20Gabi%20e%20quero%20garantir%20meu%20App%20da%20Escola%20de%20Gastronomia.',
    website: 'www.easybyzcreator.com',
    websiteUrl: 'https://www.easybyzcreator.com',
    instagram: '@apps.easybyzcreator.com',
    instagramUrl: 'https://www.instagram.com/apps.easybyzcreator.com',
    authorName: 'Pati - Easy Byz Creator',
  }
};

export const COLOR_PALETTE = {
  primaryDark: '#424733',  // Olive Escuro / Base institucional
  mossGreen: '#859159',    // Verde Musgo / Destaque e Ação
  lightBg: '#F0F0F0',      // Fundo claro suave
  sandGold: '#A38C66',     // Ocre Dourado / Elegância
  earthBrown: '#613C26',   // Marrom Terra / Gastronomia
};

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    slideNumber: 1,
    category: 'Capa da Aula',
    title: 'O Poder do Cardápio Digital na Marmitaria',
    subtitle: 'Como organizar seus pedidos, facilitar suas vendas e profissionalizar o seu negócio de marmitas.',
    topics: [
      {
        title: 'Organizar melhor seus pedidos',
        description: 'Chega de mensagens perdidas ou anotações em papéis soltos.',
        icon: 'clipboard-check'
      },
      {
        title: 'Facilitar a venda das marmitas',
        description: 'O cliente escolhe sozinho, de forma rápida e sem atrito.',
        icon: 'zap'
      },
      {
        title: 'Profissionalizar sua marmitaria',
        description: 'Transmita autoridade e valor desde o primeiro contato.',
        icon: 'award'
      }
    ],
    notes: [
      'Dar as boas-vindas oficiais a todas as alunas da aula especial.',
      'Apresentar o tema: O Poder do Cardápio Digital na Marmitaria.',
      'Destacar que a aula é 100% prática e focada em organização, facilidade nas vendas e profissionalização.'
    ]
  },
  {
    id: 2,
    slideNumber: 2,
    category: 'Visão & Propósito',
    title: 'Imagine sua marmitaria funcionando de forma profissional',
    subtitle: 'Mais organização. Mais autonomia. Mais tempo para produzir e vender.',
    topics: [],
    notes: [
      'Abrir espaço para as alunas imaginarem a sua marmitaria organizada, profissional e lucrativa.',
      'Mais organização, autonomia e tempo para focar na produção e vendas.'
    ]
  },
  {
    id: 3,
    slideNumber: 3,
    category: 'Visão & Estrutura',
    title: 'O negócio que você quer construir',
    subtitle: 'Você não precisa apenas vender mais. Precisa estar preparada para crescer.',
    topics: [
      {
        title: 'Cardápio sem WhatsApp',
        description: 'Clientes consultando seus pratos sem precisar perguntar tudo no WhatsApp'
      },
      {
        title: 'Pedidos organizados',
        description: 'Pedidos chegando de forma organizada, sem confusão'
      },
      {
        title: 'Tudo em um só lugar',
        description: 'Fotos, preços e informações dos pratos centralizados'
      },
      {
        title: 'Preparada para crescer',
        description: 'Uma estrutura que acompanha o crescimento da sua marmitaria'
      }
    ],
    notes: [
      'Apresentar a visão de negócio estruturado e profissional.',
      'Enfatizar os 4 pilares: Cardápio sem WhatsApp, Pedidos organizados, Tudo em um só lugar e Preparada para crescer.',
      'Frase chave: Você não precisa apenas vender mais. Precisa estar preparada para crescer.'
    ]
  },
  {
    id: 4,
    slideNumber: 4,
    category: 'Diagnóstico & Realidade',
    title: 'Você é uma excelente cozinheira... mas como vai a sua gestão?',
    subtitle: 'O problema nunca foi a sua comida. É tentar administrar um negócio inteiro sem uma ferramenta prática na sua mão.',
    topics: [
      {
        title: 'Rotina sobrecarregada',
        description: 'Caderninho, WhatsApp cheio de mensagens, planilhas esquecidas, calculadora e marmitas sendo produzidas.',
        icon: 'table'
      }
    ],
    notes: [
      'Gerar conexão e empatia com a rotina de cozinhar e administrar tudo ao mesmo tempo.',
      'Frisar que o problema não é o talento na cozinha, mas a ausência de ferramentas práticas.'
    ]
  },
  {
    id: 5,
    slideNumber: 5,
    category: 'Diagnóstico & Realidade',
    title: 'Você já passou por isso na sua marmitaria?',
    subtitle: 'Desafios diários de comunicação e controle de pedidos.',
    topics: [
      {
        title: 'Anotações perdidas',
        description: 'Você já esqueceu de anotar algum pedido que recebeu e por esse motivo não entregou ao seu cliente?'
      },
      {
        title: 'Informação incorreta',
        description: 'Você já entregou pedido errado porque se confundiu e anotou a informação incorreta?'
      }
    ],
    notes: [
      'Fazer uma pausa e perguntar para as alunas no chat.',
      'Pergunta 1: Você já esqueceu de anotar algum pedido que recebeu e por esse motivo não entregou ao seu cliente?',
      'Pergunta 2: Você já entregou pedido errado porque se confundiu e anotou a informação incorreta?'
    ]
  },
  {
    id: 6,
    slideNumber: 6,
    category: 'Diagnóstico & Realidade',
    title: 'Como estão seus números e seu atendimento?',
    subtitle: 'Clareza de margem de lucro e apresentação do cardápio.',
    topics: [
      {
        title: 'Lucro real do mês',
        description: 'No final do mês você sabe dizer exatamente quanto você teve de lucro?'
      },
      {
        title: 'Cardápio no WhatsApp',
        description: 'Quando o cliente te chama no WhatsApp você realmente consegue oferecer pra ele tudo que tem no seu cardápio?'
      }
    ],
    notes: [
      'Pergunta 3: No final do mês você sabe dizer exatamente quanto você teve de lucro?',
      'Pergunta 4: Quando o cliente te chama no WhatsApp você realmente consegue oferecer pra ele tudo que tem no seu cardápio?'
    ]
  },
  {
    id: 7,
    slideNumber: 7,
    category: 'Diagnóstico & Realidade',
    title: 'A sobrecarga da produção vs. mensagens',
    subtitle: 'Interrupções no fogão e a pressão de responder rápido.',
    topics: [
      {
        title: 'Interrupções na produção',
        description: 'Quantas vezes você parou no meio da sua produção para responder mensagens de clientes no WhatsApp e que muitas vezes nem compraram de você?'
      },
      {
        title: 'Plantão 24h',
        description: 'Você sente que precisa ficar 24h disponível para responder aos seus clientes porque tem medo de perdê-lo para um concorrente que responde mais rápido?'
      }
    ],
    notes: [
      'Pergunta 5: Quantas vezes você parou no meio da sua produção para responder mensagens de clientes no WhatsApp e que muitas vezes nem compraram de você?',
      'Pergunta 6: Você sente que precisa ficar 24h disponível para responder aos seus clientes porque tem medo de perdê-lo para um concorrente que responde mais rápido?'
    ]
  },
  {
    id: 8,
    slideNumber: 8,
    category: 'Estratégia & Margem',
    title: 'Marketplace ajuda a vender. Mas qual é o custo dessa dependência?',
    subtitle: 'Você trabalha pesado na cozinha e ainda precisa dividir parte do resultado da venda com o intermediário.',
    topics: [
      {
        title: 'Taxas altas',
        description: 'Cobram de 12% a mais de 30% sobre cada pedido.',
        icon: 'dollar-sign'
      },
      {
        title: 'Riscos financeiros',
        description: 'Atrasos e retenções nos repasses podem travar seu caixa.',
        icon: 'alert-circle'
      },
      {
        title: 'O cliente não é seu',
        description: 'A base de contatos pertence à plataforma, não a você.',
        icon: 'user-x'
      },
      {
        title: 'Dependência',
        description: 'Você constrói parte da sua operação no ambiente de outra empresa.',
        icon: 'link'
      }
    ],
    notes: [
      'Analisar os 4 pilares do custo de dependência de marketplaces: taxas altas, riscos nos repasses, clientes que não são seus e falta de controle da operação.',
      'Reforçar o esforço da aluna na cozinha versus o ganho dos intermediários.'
    ]
  },
  {
    id: 9,
    slideNumber: 9,
    category: 'Autonomia & Solução',
    title: 'E se você pudesse ter a sua própria estrutura?',
    subtitle: 'Foi a partir dessa necessidade que nasceu uma nova solução.',
    topics: [
      {
        title: 'Seu próprio aplicativo',
        description: 'Em vez de depender somente de plataformas de terceiros, ter o app da sua própria marmitaria.',
        icon: 'smartphone'
      },
      {
        title: 'Vitrine direta e intuitiva',
        description: 'Um lugar onde o seu cliente encontra seus produtos, seus preços, suas informações e faz o pedido.',
        icon: 'shopping-bag'
      },
      {
        title: 'Gestão organizada',
        description: 'Onde você também consegue organizar melhor a gestão do seu negócio.',
        icon: 'check-circle-2'
      }
    ],
    notes: [
      'Apresentar a virada de chave para a autonomia da marmitaria.',
      'Fazer a ponte entre a dor dos marketplaces/desorganização e a nova solução oficial da Escola + Easy Byz.'
    ]
  },
  {
    id: 10,
    slideNumber: 10,
    category: 'Metodologia & Parceria',
    title: 'Da metodologia da escola para a palma da sua mão',
    subtitle: 'Como transformar o que você aprendeu com a Chef Gabi em vendas diárias, margem de lucro real e organização sem complicação.',
    topics: [
      {
        title: 'Conhecimento que vira lucro',
        description: 'O seu conhecimento na cozinha agora com uma ferramenta de gestão à altura.',
      },
      {
        title: 'Feito para a gastronomia',
        description: 'A tecnologia feita sob medida para a rotina prática da gastronomia.',
      }
    ],
    notes: [
      'Dar boas-vindas a todas as alunas da Escola de Gastronomia e Negócios.',
      'Ressaltar a parceria entre a metodologia da Chef Gabi e a tecnologia da Easy Byz Creator.',
      'Explicar que o objetivo da aula é acabar de vez com o caos administrativo na cozinha.'
    ]
  },
  {
    id: 11,
    slideNumber: 11,
    category: 'Produtividade & Escala',
    title: 'Menos tempo no papel. Mais tempo produzindo e vendendo.',
    subtitle: 'Lançamentos rápidos, respostas padronizadas e mais clareza sobre o lucro.',
    topics: [
      {
        title: '⏱️ Organização em menos de 5 minutos',
        description: 'Lançamentos rápidos que cabem nos intervalos da produção',
        icon: 'clock'
      },
      {
        title: '💬 Respostas mais rápidas e padronizadas',
        description: 'Em vez de digitar textos repetidamente, envie o link do seu cardápio com fotos, preços e informações',
        icon: 'message-circle'
      },
      {
        title: '✓ Resultado',
        description: 'Mais clareza sobre o lucro, menos estresse e mais profissionalismo diante do cliente.',
        icon: 'check-circle'
      }
    ],
    notes: [
      'Apresentar os 3 benefícios práticos de economizar tempo no dia a dia da cozinha.',
      'Destacar o ganho de profissionalismo diante do cliente.'
    ]
  },
  {
    id: 12,
    slideNumber: 12,
    category: 'Visão de Negócio',
    title: 'Não é simplesmente sobre ter um aplicativo.',
    subtitle: 'É sobre deixar de apenas vender marmitas e começar a construir um negócio estruturado, lucrativo e preparado para crescer.',
    topics: [
      {
        title: 'Sair do caderninho',
        description: 'Elimine anotações perdidas e desorganização.',
        icon: 'check-square'
      },
      {
        title: 'Parar de interromper a produção',
        description: 'Cozinhe sem parar toda hora para responder mensagens.',
        icon: 'check-square'
      },
      {
        title: 'Entender melhor seus números',
        description: 'Clareza total sobre custos, entradas e lucros diários.',
        icon: 'check-square'
      },
      {
        title: 'Profissionalizar sua marmitaria',
        description: 'Uma marca forte com autoridade e autonomia.',
        icon: 'check-square'
      }
    ],
    notes: [
      'Momento de conexão profunda com o objetivo de vida da aluna.',
      'Transformar o ato de "fazer marmitas" em uma "empresa gastronômica sólida e lucrativa".'
    ]
  },
  {
    id: 13,
    slideNumber: 13,
    category: 'Demonstração ao vivo',
    title: 'Veja o aplicativo funcionando na prática',
    subtitle: 'Apresentação interativa do cardápio digital para as alunas e do painel administrativo de gestão da marmitaria.',
    topics: [
      {
        title: 'Cardápio Digital das Clientes',
        description: 'https://egn-chefgabipaludo.vercel.app/ — Acesso rápido com fotos, tabela nutricional e pedidos 24h.',
        icon: 'smartphone'
      },
      {
        title: 'Painel Administrativo & Gestão',
        description: 'https://egn-chefgabipaludo.vercel.app/#/admin — Controle de custos, fluxo de caixa e edição de cardápio.',
        icon: 'layout-dashboard'
      }
    ],
    notes: [
      'Abrir os links em novas abas durante a aula para demonstrar a navegação real.',
      'Mostrar como a aluna/cliente visualiza os pratos com fotos e tabela nutricional.',
      'Acessar o painel administrativo para demonstrar a facilidade de gerenciar custos e fluxo de caixa.'
    ]
  },
  {
    id: 14,
    slideNumber: 14,
    category: 'Condição Especial',
    title: 'Agora é a hora de profissionalizar sua marmitaria',
    subtitle: 'Condição especial Black Cozinha Lucrativa para alunas da Chef Gabi Paludo.',
    topics: [
      {
        title: 'Condição Especial Black',
        description: 'Condição exclusiva Black Cozinha Lucrativa',
        icon: 'lock',
        badge: 'Black Cozinha Lucrativa'
      },
      {
        title: 'Ambiente exclusivo',
        description: 'Personalizado para a sua marmitaria',
        icon: 'check-circle-2',
        badge: 'Exclusivo'
      },
      {
        title: 'Válido somente até 10 dez 26',
        description: 'Valor promocional válido somente até essa data',
        icon: 'calendar',
        badge: 'Prazo'
      }
    ],
    notes: [
      'Condição especial Black Cozinha Lucrativa para alunas da Chef Gabi Paludo.',
      'Ambiente exclusivo e personalizado para cada marmitaria.',
      'Valor promocional válido somente até 10 dez 26.',
      'Página oficial: https://blackcozinhalucrativaegnebc2026.vercel.app/'
    ]
  },
  {
    id: 15,
    slideNumber: 15,
    category: 'Encerramento & contato',
    title: 'Vamos profissionalizar a sua marmitaria?',
    subtitle: 'Dúvidas, suporte & próximos passos com a equipe Easy Byz Creator',
    topics: [
      {
        title: 'Atendimento direto no WhatsApp',
        description: '+1 803 888 9018 — Fale diretamente com a Pati e nossa equipe de suporte.',
        icon: 'phone'
      },
      {
        title: 'Site oficial',
        description: 'www.easybyzcreator.com — Conheça mais sobre as soluções Easy Byz.',
        icon: 'globe'
      },
      {
        title: 'Instagram',
        description: '@apps.easybyzcreator.com — Dicas, novidades e casos de sucesso.',
        icon: 'instagram'
      }
    ],
    notes: [
      'Abrir para perguntas e respostas com a Pati.',
      'Colocar o link de inscrição no chat ou fixar na tela.',
      'Agradecer a participação de todas as futuras alunas de sucesso!'
    ]
  }
];
