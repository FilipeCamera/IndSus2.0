const indicators = [
  {
    indId: 0,
    title: 'Indicadores Ecológicos',
    data: [
      {
        dataId: 0,
        title: 'Solo',
        desc: [
          {
            descId: 0,
            title: 'Propriedades do solo',
            quant: '3 indicadores',
          },
          {
            descId: 1,
            title: 'Manejo do solo',
            quant: '2 indicadores',
          },
        ],
        ind: [
          {
            indDataId: 0,
            title: 'Propriedades do solo',
            data: [
              {
                descDataId: 0,
                desc: 'FNPK - Fontes de Nitrogênio (N), Fósforo (P) e Potássio (K)',
                cri: [
                  {
                    criId: 0,
                    title: 'composto',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'adubação verde',
                    value: '',
                  },
                  {
                    criId: 2,
                    title:
                      'composto + adubação verde + aplicação de biofertilizante no solo',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 1,
                desc: 'AS - Estrutura, textura e compactação do solo',
                cri: [
                  {
                    criId: 0,
                    title: 'terra cansada, seca, em torrões e com erosão',
                    value: '',
                  },
                  {
                    criId: 1,
                    title:
                      'presença de matéria orgânica sem rotação e consórcio de culturas / solo descoberto',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'solo sadio, grumoso como cobertura morta',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 2,
                desc: 'MO - Matéria orgânica no solo',
                cri: [
                  {
                    criId: 0,
                    title:
                      'solo claro, esbranquiçados, cinzas, amarelados e arenosos',
                    value: '',
                  },
                  {
                    criId: 1,
                    title:
                      'asolo vermelho e amarelo, com óxidos de ferro, boa aeração e drenagem',
                    value: '',
                  },
                  {
                    criId: 2,
                    title:
                      'coloração escura com alta concentração de MO e bioindicadores',
                    value: '',
                  },
                ],
              },
            ],
          },
          {
            indDataId: 1,
            title: 'Manejo do solo',
            data: [
              {
                dataId: 0,
                desc: 'PM - Preparo mecânico da área produtiva',
                cri: [
                  {
                    criId: 0,
                    title: 'subsolagem (nº de vezes)',
                    value: '',
                  },
                  {
                    criId: 1,
                    title:
                      'controle mecânico, tração animal, biquiação e/ou controle biológico',
                    value: '',
                  },
                  {
                    criId: 2,
                    title:
                      'sistema equilibrado: consórcio, rotação de culturas e áreas de refúgio',
                    value: '',
                  },
                ],
              },
              {
                dataId: 1,
                desc: 'CPE - Controle de plantas espontâneas',
                cri: [
                  {
                    criId: 0,
                    title: 'não há ou não é respeitada',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'há, mas está longe da área produtiva',
                    value: '',
                  },
                  {
                    criId: 2,
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
        dataId: 1,
        title: 'Biodiversidade e Paisagem',
        desc: [
          {
            descId: 0,
            title: 'Vegetação Natural',
            quant: '1 indicador',
          },
          {
            descId: 1,
            title: 'Cultivos',
            quant: '6 indicadores',
          },
        ],
        ind: [
          {
            indDataId: 0,
            title: 'Vegetação natural',
            data: [
              {
                descDataId: 0,
                desc: 'RLAPP - Área de RL e APP',
                cri: [
                  {
                    criId: 0,
                    title: 'não há',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'há na % obrigatória',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'há % além da obrigatória e/ou com manejo',
                    value: '',
                  },
                ],
              },
            ],
          },
          {
            indDataId: 1,
            title: 'Cultivos',
            data: [
              {
                dataDescId: 0,
                desc: 'EAP - Áreas de entorno da área produtiva',
                cri: [
                  {
                    criId: 0,
                    title:
                      'convencional com o mesmo tipo do cultivo da área produtiva',
                    value: '',
                  },
                  {
                    criId: 1,
                    title:
                      'convencional com outros tipos de cultivo e uso do solo',
                    value: '',
                  },
                  {
                    criId: 2,
                    title:
                      'outros tipos de cultivos e de uso do solo sem uso de insumos químicos',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 1,
                desc: 'BV - Barreiras vegetais',
                cri: [
                  {
                    criId: 0,
                    title: 'não há',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'há (1 espécie)',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'há (diversificada)',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 2,
                desc: 'DA - Desenho do agroecossistema',
                cri: [
                  {
                    criId: 0,
                    title: 'monocultura orgânica',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'pouco diversificado',
                    value: '',
                  },
                  {
                    criId: 2,
                    title:
                      'muito diversificado / consorciado / planejamento rotacionado',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 3,
                desc: 'PAI - Diversidade de plantas espontâneas e insetos indesejáveis',
                cri: [
                  {
                    criId: 0,
                    title: 'alto e descontrolado',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'ausência',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'baixo e controlado',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 4,
                desc: 'ID - Incidência de doenças',
                cri: [
                  {
                    criId: 0,
                    title: 'alto índice de doenças',
                    value: '',
                  },
                  {
                    criId: 1,
                    title:
                      'incidência de doenças de fácil controle / domínio de técnicas',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'não ocorreram doenças',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 5,
                desc: 'CDC - Crescimento dos cultivos',
                cri: [
                  {
                    criId: 0,
                    title: 'crescimento das plantas foi alterado e prejudicado',
                    value: '',
                  },
                  {
                    criId: 1,
                    title:
                      'crescimento das plantas permaneceram = ao cultivo convencional',
                    value: '',
                  },
                  {
                    criId: 2,
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
        dataId: 2,
        title: 'Micro-clima',
        desc: [
          {
            descId: 0,
            title: 'Alterações',
            quant: '1 indicador',
          },
        ],
        ind: [
          {
            indDataId: 0,
            title: 'Alterações',
            data: [
              {
                descDataId: 0,
                desc: 'IDAC - Influência nos resultados produtivos das áreas de produção.',
                cri: [
                  {
                    criId: 0,
                    title:
                      'alterações climáticas influenciaram na produtividade / qualidade dos cultivos',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'houve influência, mas sem perda significativa',
                    value: '',
                  },
                  {
                    criId: 2,
                    title:
                      'os cultivos estão protegidos das influências climáticas (adaptações técnicas)',
                    value: '',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        dataId: 3,
        title: 'Recursos naturais disponíveis',
        desc: [
          {
            descId: 0,
            title: 'Recursos externos',
            quant: '2 indicadores',
          },
          {
            descId: 1,
            title: 'Recursos internos',
            quant: '2 indicadores',
          },
        ],
        ind: [
          {
            indDataId: 0,
            title: 'Recursos externos',
            data: [
              {
                descDataId: 0,
                desc: 'EPM - Fontes de energia / combustível (para uso de maquinários)',
                cri: [
                  {
                    criId: 0,
                    title: 'dependência de fonte de energia externa',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'parte da energia utilizada é externa',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'fonte de energia produzida localmente',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 1,
                desc: 'UI - Uso de insumos',
                cri: [
                  {
                    criId: 0,
                    title: 'totalmente externos',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'parcialmente externos',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'produzidos localmente',
                    value: '',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    indId: 1,
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
        ind: [
          {
            indDataId: 0,
            title: 'Origem das familías',
            data: [
              {
                descDataId: 0,
                desc: 'PLOAP - Proximidade do local de residência com a área produtiva',
                cri: [
                  {
                    criId: 0,
                    title:
                      'centros urbanos, sem ligação com o meio rural e com atividades agrícolas',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'agricultores de outras regiões e Estados',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'agricultores locais',
                    value: '',
                  },
                ],
              },
            ],
          },
          {
            indDataId: 1,
            title: 'Manejo agroecológico',
            data: [
              {
                descDataId: 0,
                desc: 'NICE - Qual nível se considera estar',
                cri: [
                  {
                    criId: 0,
                    title: 'produção/aquisição de insumos orgânicos',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'diversificação da produção',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'redesenho do agroecossistema',
                    value: '',
                  },
                ],
              },
            ],
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
        ind: [
          {
            indDataId: 0,
            title: 'Produção para o auto-sustento',
            data: [
              {
                descDataId: 0,
                desc: 'APDAS - % da produção destinada ao auto-sustento',
                cri: [
                  {
                    criId: 0,
                    title:
                      'não há produção para auto-sustento, apenas para comercialização',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'produz parte e compra parte do que precisa',
                    value: '',
                  },
                  {
                    criId: 2,
                    title:
                      'produz tudo o que precisa e comercializa o excedente',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 1,
                desc: 'DAS - Diversificação da produção para auto-sustento',
                cri: [
                  {
                    criId: 0,
                    title: 'não é diversificada',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'pouco diversificada',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'muito diversificada',
                    value: '',
                  },
                ],
              },
            ],
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
        ind: [
          {
            indDataId: 0,
            title: 'Saúde',
            data: [
              {
                descDataId: 0,
                desc: 'GTX - Grau de exposição a componentes tóxicos',
                cri: [
                  {
                    criId: 0,
                    title: 'diminuiu',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'interrompeu',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'interrompeu há mais de 2 anos',
                    value: '',
                  },
                ],
              },
            ],
          },
          {
            indDataId: 1,
            title: 'Infra-estrutura básica',
            data: [
              {
                descDataId: 0,
                desc: 'PCSO - Participação em cursos, seminários, oficinas',
                cri: [
                  {
                    criId: 0,
                    title: 'Não há',
                    value: '',
                  },
                  {
                    criId: 0,
                    title: 'Continuou igual',
                    value: '',
                  },
                  {
                    criId: 0,
                    title: 'Melhorou/aumentou',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 1,
                desc: 'AA - Acesso à água',
                cri: [
                  {
                    criId: 0,
                    title: 'Não há',
                    value: '',
                  },
                  {
                    criId: 0,
                    title: 'Continuou igual',
                    value: '',
                  },
                  {
                    criId: 0,
                    title: 'Melhorou/aumentou',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 2,
                desc: 'ABP - Área de beneficiamento de produtos',
                cri: [
                  {
                    criId: 0,
                    title: 'Não há',
                    value: '',
                  },
                  {
                    criId: 0,
                    title: 'Continuou igual',
                    value: '',
                  },
                  {
                    criId: 0,
                    title: 'Melhorou/aumentou',
                    value: '',
                  },
                ],
              },
            ],
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
        ind: [
          {
            indDataId: 0,
            title: 'Trabalho coletivo',
            data: [
              {
                descDataId: 0,
                desc: 'MOF - Mão de obra familiar',
                cri: [
                  {
                    criId: 0,
                    title: 'Não há participação dos jovens e mulheres',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'Houve pouca participação de jovens e mulheres',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'Há total participação dos jovens e mulheres',
                    value: '',
                  },
                ],
              },
            ],
          },
          {
            indDataId: 1,
            title: 'Operação de investimento externos',
            data: [
              {
                descDataId: 0,
                desc: 'DDI - Destino dado ao investimento',
                cri: [
                  {
                    criId: 0,
                    title: 'Ações emergenciais',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'Ações de resposta de curto prazo',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'Ações de resposta a longo prazo',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 1,
                desc: 'DROSP - Distribuição de renda originada do sistema produtivo',
                cri: [
                  {
                    criId: 0,
                    title: 'Gerou prejuizo para as famílias',
                    value: '',
                  },
                  {
                    criId: 1,
                    title:
                      'Poucas famílias foram beneficiadas e/ou pouco significativo',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'Todas as famílias foram beneficiadas',
                    value: '',
                  },
                ],
              },
            ],
          },
          {
            indDataId: 2,
            title: 'Percepção ambiental e relação com a natureza',
            data: [
              {
                descDataId: 0,
                desc: 'ORPA - Objetivo da realização da produção agroecológica',
                cri: [
                  {
                    criId: 0,
                    title: 'Redução dos custos da produção',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'Recuperação do solo',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'Iniciar processo de transição agroecológica',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 1,
                desc: 'PFAP - Planos futuros para a área produtiva',
                cri: [
                  {
                    criId: 0,
                    title: 'Voltará para a produção convencional',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'Dará continuidade ao manejo orgânico/agroecológica',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'Ampliará a área de manejo orgânico/agroecológico',
                    value: '',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    indId: 2,
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
        ind: [
          {
            indDataId: 0,
            title: 'Capacidade de investimento e gestão',
            data: [
              {
                descDataId: 0,
                desc: 'RPPSAP - Reservas para a próxima safra',
                cri: [
                  {
                    criId: 0,
                    title: 'Não há reservas',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'Há poucas reservas',
                    value: '',
                  },
                  {
                    criId: 2,
                    title:
                      'Próxima safra já planejada e com reservas garantidas',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 1,
                desc: 'IRINR - Investimento em recursos/insumos não renováveis',
                cri: [
                  {
                    criId: 0,
                    title: 'Todo investimento feito em recursos não renováveis',
                    value: '',
                  },
                  {
                    criId: 1,
                    title:
                      'Parte do recurso destinado à recursos não renováveis',
                    value: '',
                  },
                  {
                    criId: 2,
                    title:
                      'Pequena parte do investimento para recursos não renováveis',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 2,
                desc: 'ECPM - Execução do sistema produtivo conforme Plano de Manejo',
                cri: [
                  {
                    criId: 0,
                    title: 'Não foi respeitado o planejamento',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'Foram necessárias algumas alterações',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'O planejamento foi seguido',
                    value: '',
                  },
                ],
              },
            ],
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
        ind: [
          {
            indDataId: 0,
            title: 'Produtividade',
            data: [
              {
                descDataId: 0,
                desc: 'PHEC – Produção (hectares)',
                cri: [
                  {
                    criId: 0,
                    title: 'Muito baixa',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'Baixa e/ou igual as culturas convencionais',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'Alta / satisfatória',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 1,
                desc: 'CGR - Comercialização (geração de renda)',
                cri: [
                  {
                    criId: 0,
                    title: 'Comercialização na área produtiva',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'PNAE',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'Cestas, feiras e PNAE',
                    value: '',
                  },
                ],
              },
            ],
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
        ind: [
          {
            indDataId: 0,
            title: 'Risco econômico',
            data: [
              {
                descDataId: 0,
                desc: 'Diversidade produtiva',
                cri: [
                  {
                    criId: 0,
                    title: 'Baixa (especificar o nº de espécies)',
                    value: '',
                  },
                  {
                    criId: 1,
                    title:
                      'Média / a mesma das culturas convencionais (especificar o nº de espécies)',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'Alta (especificar o nº de espécies)',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 1,
                desc: 'Beneficiamento de produtos',
                cri: [
                  {
                    criId: 0,
                    title: 'Não houve beneficiamento',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'Houve parte do beneficiamento (não satisfatório)',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'houve beneficiamento, agregando valor ao produto',
                    value: '',
                  },
                ],
              },
              {
                descDataId: 2,
                desc: 'Dependência de insumos e informações externas',
                cri: [
                  {
                    criId: 0,
                    title: 'Alta dependência',
                    value: '',
                  },
                  {
                    criId: 1,
                    title: 'Média / em partes',
                    value: '',
                  },
                  {
                    criId: 2,
                    title: 'Não há dependência',
                    value: '',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default indicators;
