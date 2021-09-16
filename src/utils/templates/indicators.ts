const indicators = [
  {
    title: 'Indicadores Ecológicos',
    data: [
      {
        title: 'Solo',
        desc: [
          {
            title: 'Propriedades do solo',
            quant: '3 indicadores',
          },
          {
            title: 'Manejo do solo',
            quant: '2 indicadores',
          },
        ],
        ind: [
          {
            title: 'Propriedades do solo',
            data: [
              {
                desc: 'FNPK - Fontes de Nitrogênio (N), Fósforo (P) e Potássio (K)',
                cri: [
                  {
                    title: 'composto',
                    value: '',
                  },
                  {
                    title: 'adubação verde',
                    value: '',
                  },
                  {
                    title:
                      'composto + adubação verde + aplicação de biofertilizante no solo',
                    value: '',
                  },
                ],
              },
              {
                desc: 'AS - Estrutura, textura e compactação do solo',
                cri: [
                  {
                    title: 'terra cansada, seca, em torrões e com erosão',
                    value: '',
                  },
                  {
                    title:
                      'presença de matéria orgânica sem rotação e consórcio de culturas / solo descoberto',
                    value: '',
                  },
                  {
                    title: 'solo sadio, grumoso como cobertura morta',
                    value: '',
                  },
                ],
              },
              {
                desc: 'MO - Matéria orgânica no solo',
                cri: [
                  {
                    title:
                      'solo claro, esbranquiçados, cinzas, amarelados e arenosos',
                    value: '',
                  },
                  {
                    title:
                      'asolo vermelho e amarelo, com óxidos de ferro, boa aeração e drenagem',
                    value: '',
                  },
                  {
                    title:
                      'coloração escura com alta concentração de MO e bioindicadores',
                    value: '',
                  },
                ],
              },
            ],
          },
          {
            title: 'Manejo do solo',
            data: [
              {
                desc: 'PM - Preparo mecânico da área produtiva',
                cri: [
                  {
                    title: 'subsolagem (nº de vezes)',
                    value: '',
                  },
                  {
                    title:
                      'controle mecânico, tração animal, biquiação e/ou controle biológico',
                    value: '',
                  },
                  {
                    title:
                      'sistema equilibrado: consórcio, rotação de culturas e áreas de refúgio',
                    value: '',
                  },
                ],
              },
              {
                desc: 'CPE - Controle de plantas espontâneas',
                cri: [
                  {
                    title: 'não há ou não é respeitada',
                    value: '',
                  },
                  {
                    title: 'há, mas está longe da área produtiva',
                    value: '',
                  },
                  {
                    title: 'há e está nas proximidades da área produtiva',
                    value: '',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Biodiversidade e Paisagem',
        desc: [
          {
            title: 'Vegetação Natural',
            quant: '1 indicador',
          },
          {
            title: 'Cultivos',
            quant: '6 indicadores',
          },
        ],
        ind: [
          {
            title: 'Vegetação natural',
            data: [
              {
                desc: 'RLAPP - Área de RL e APP',
                cri: [
                  {
                    title: 'não há',
                    value: '',
                  },
                  {
                    title: 'há na % obrigatória',
                    value: '',
                  },
                  {
                    title: 'há % além da obrigatória e/ou com manejo',
                    value: '',
                  },
                ],
              },
            ],
          },
          {
            title: 'Cultivos',
            data: [
              {
                desc: 'EAP - Áreas de entorno da área produtiva',
                cri: [
                  {
                    title:
                      'convencional com o mesmo tipo do cultivo da área produtiva',
                    value: '',
                  },
                  {
                    title:
                      'convencional com outros tipos de cultivo e uso do solo',
                    value: '',
                  },
                  {
                    title:
                      'outros tipos de cultivos e de uso do solo sem uso de insumos químicos',
                    value: '',
                  },
                ],
              },
              {
                desc: 'BV - Barreiras vegetais',
                cri: [
                  {
                    title: 'não há',
                    value: '',
                  },
                  {
                    title: 'há (1 espécie)',
                    value: '',
                  },
                  {
                    title: 'há (diversificada)',
                    value: '',
                  },
                ],
              },
              {
                desc: 'DA - Desenho do agroecossistema',
                cri: [
                  {
                    title: 'monocultura orgânica',
                    value: '',
                  },
                  {
                    title: 'pouco diversificado',
                    value: '',
                  },
                  {
                    title:
                      'muito diversificado / consorciado / planejamento rotacionado',
                    value: '',
                  },
                ],
              },
              {
                desc: 'PAI - Diversidade de plantas espontâneas e insetos indesejáveis',
                cri: [
                  {
                    title: 'alto e descontrolado',
                    value: '',
                  },
                  {
                    title: 'ausência',
                    value: '',
                  },
                  {
                    title: 'baixo e controlado',
                    value: '',
                  },
                ],
              },
              {
                desc: 'ID - Incidência de doenças',
                cri: [
                  {
                    title: 'alto índice de doenças',
                    value: '',
                  },
                  {
                    title:
                      'incidência de doenças de fácil controle / domínio de técnicas',
                    value: '',
                  },
                  {
                    title: 'não ocorreram doenças',
                    value: '',
                  },
                ],
              },
              {
                desc: 'CDC - Crescimento dos cultivos',
                cri: [
                  {
                    title: 'crescimento das plantas foi alterado e prejudicado',
                    value: '',
                  },
                  {
                    title:
                      'crescimento das plantas permaneceram = ao cultivo convencional',
                    value: '',
                  },
                  {
                    title: 'plantas cresceram mais sadias',
                    value: '',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Micro-clima',
        desc: [
          {
            title: 'Alterações',
            quant: '1 indicador',
          },
        ],
      },
      {
        title: 'Recursos naturais disponíveis',
        desc: [
          {
            title: 'Recursos externos',
            quant: '2 indicadores',
          },
          {
            title: 'Recursos internos',
            quant: '2 indicadores',
          },
        ],
      },
    ],
  },
  {
    title: 'Indicadores Sociais',
    data: [
      {
        title: 'Trajetória de vida das famílias',
        desc: [
          {
            title: 'Origem das famílias',
            quant: '1 indicador',
          },
          {
            title: 'Manejo agroecológico',
            quant: '1 indicador',
          },
        ],
      },
      {
        title: 'Segurança alimentar',
        desc: [
          {
            title: 'Produção para o auto-sustento',
            quant: '2 indicadores',
          },
        ],
      },
      {
        title: 'Qualidade de vida',
        desc: [
          {
            title: 'Saúde',
            quant: '1 indicador',
          },
          {
            title: 'Infra-estrutura básica',
            quant: '3 indicadores',
          },
        ],
      },
      {
        title: 'Organização do trabalho',
        desc: [
          {
            title: 'Trabalho coletivo',
            quant: '1 indicador',
          },
          {
            title: 'Operação de investimento externos',
            quant: '2 indicadores',
          },
          {
            title: 'Percepção ambiental e relação com a natureza',
            quant: '2 indicadores',
          },
        ],
      },
    ],
  },
  {
    title: 'Indicadores Econômicos',
    data: [
      {
        title: 'Planejamento produtivo',
        desc: [
          {
            title: 'Capacidade de investimento e gestão',
            quant: '3 indicadores',
          },
        ],
      },
      {
        title:
          'Eficiência econômica da produção agrícola da área/local de produção',
        desc: [
          {
            title: 'Produtividade',
            quant: '2 indicadores',
          },
        ],
      },
      {
        title: 'Estabilidade econômica da área/local de produção',
        desc: [
          {
            title: 'Risco econômico',
            quant: '3 indicadores',
          },
        ],
      },
    ],
  },
];

export default indicators;
