import {Colors} from '@styles';
import {Button, Header, Modals, Scroll, Space, Text} from 'components';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {Modal, Portal, ProgressBar} from 'react-native-paper';
import StepData from './StepData';

interface StepTwoProps {
  setState: any;
  area: number;
  setArea: any;
  setDataArea: any;
  dataArea: any[];
  setDataRadar: any;
  dataRadar: any[];
}

const Step2 = ({
  setState,
  setArea,
  area,
  setDataArea,
  dataArea,
  dataRadar,
  setDataRadar,
}: StepTwoProps) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataForm, setDataForm] = useState([]);
  const [percent, setPercent] = useState<any>();
  const [dados, setDados] = useState(false);
  const [title, setTitle] = useState('');
  const [infoRadar, setInfoRadar] = useState<{}>({
    fnpk: 8,
    as: 5.3,
    mo: 4,
    pm: 5.8,
    cpe: 3,
    rlapp: 10,
    eap: 8,
    bv: 5,
    da: 5,
    pai: 3,
    id: 10,
    cdc: 5,
    idac: 8,
    epm: 1,
    ui: 9,
    ploap: 6,
    nice: 7.6,
    apdas: 5,
    das: 3,
    gtx: 6,
    pcso: 3,
    AA: 4,
    abp: 6,
    mof: 8,
    ddi: 9,
    drosp: 10,
    orpa: 5,
    pfap: 5,
    rppsap: 8,
    irinr: 6,
    ecpm: 8,
    phec: 4,
    cgr: 2,
    dv: 5,
    bp: 8,
    dii: 1,
  });
  const [info, setInfo] = useState<any[]>([
    {
      indId: 'ind_1',
      title: 'Indicadores Ecológicos',
      data: [
        {
          dataId: 'data_1',
          title: 'Solo',
          complete: 'Sem preencher',
          desc: [
            {
              descId: 'desc_1',
              title: 'Propriedades do solo',
              quant: '3 indicadores',
            },
            {
              descId: 'desc_2',
              title: 'Manejo do solo',
              quant: '2 indicadores',
            },
          ],
          ind: [
            {
              indDataId: 'indData_1',
              title: 'Propriedades do solo',
              data: [
                {
                  descDataId: 'descData_1',
                  desc: 'FNPK - Fontes de Nitrogênio (N), Fósforo (P) e Potássio (K)',
                  cri: [
                    {
                      criId: 'cri_1',
                      title: 'composto',
                      value: '',
                    },
                    {
                      criId: 'cri_2',
                      title: 'adubação verde',
                      value: '',
                    },
                    {
                      criId: 'cri_3',
                      title:
                        'composto + adubação verde + aplicação de biofertilizante no solo',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_2',
                  desc: 'AS - Estrutura, textura e compactação do solo',
                  cri: [
                    {
                      criId: 'cri_4',
                      title: 'terra cansada, seca, em torrões e com erosão',
                      value: '',
                    },
                    {
                      criId: 'cri_5',
                      title:
                        'presença de matéria orgânica sem rotação e consórcio de culturas / solo descoberto',
                      value: '',
                    },
                    {
                      criId: 'cri_6',
                      title: 'solo sadio, grumoso como cobertura morta',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_3',
                  desc: 'MO - Matéria orgânica no solo',
                  cri: [
                    {
                      criId: 'cri_7',
                      title:
                        'solo claro, esbranquiçados, cinzas, amarelados e arenosos',
                      value: '',
                    },
                    {
                      criId: 'cri_8',
                      title:
                        'asolo vermelho e amarelo, com óxidos de ferro, boa aeração e drenagem',
                      value: '',
                    },
                    {
                      criId: 'cri_9',
                      title:
                        'coloração escura com alta concentração de MO e bioindicadores',
                      value: '',
                    },
                  ],
                },
              ],
            },
            {
              indDataId: 'indData_2',
              title: 'Manejo do solo',
              data: [
                {
                  descDataId: 'descData_4',
                  desc: 'PM - Preparo mecânico da área produtiva',
                  cri: [
                    {
                      criId: 'cri_10',
                      title: 'subsolagem (nº de vezes)',
                      value: '',
                    },
                    {
                      criId: 'cri_11',
                      title:
                        'controle mecânico, tração animal, biquiação e/ou controle biológico',
                      value: '',
                    },
                    {
                      criId: 'cri_12',
                      title:
                        'sistema equilibrado: consórcio, rotação de culturas e áreas de refúgio',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_5',
                  desc: 'CPE - Controle de plantas espontâneas',
                  cri: [
                    {
                      criId: 'cri_13',
                      title: 'não há ou não é respeitada',
                      value: '',
                    },
                    {
                      criId: 'cri_14',
                      title: 'há, mas está longe da área produtiva',
                      value: '',
                    },
                    {
                      criId: 'cri_15',
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
          dataId: 'data_2',
          title: 'Biodiversidade e Paisagem',
          complete: 'Sem preencher',
          desc: [
            {
              descId: 'desc_3',
              title: 'Vegetação Natural',
              quant: '1 indicador',
            },
            {
              descId: 'desc_4',
              title: 'Cultivos',
              quant: '6 indicadores',
            },
          ],
          ind: [
            {
              indDataId: 'indData_3',
              title: 'Vegetação natural',
              data: [
                {
                  descDataId: 'descData_6',
                  desc: 'RLAPP - Área de RL e APP',
                  cri: [
                    {
                      criId: 'cri_16',
                      title: 'não há',
                      value: '',
                    },
                    {
                      criId: 'cri_17',
                      title: 'há na % obrigatória',
                      value: '',
                    },
                    {
                      criId: 'cri_18',
                      title: 'há % além da obrigatória e/ou com manejo',
                      value: '',
                    },
                  ],
                },
              ],
            },
            {
              indDataId: 'indData_4',
              title: 'Cultivos',
              data: [
                {
                  descDataId: 'descData_7',
                  desc: 'EAP - Áreas de entorno da área produtiva',
                  cri: [
                    {
                      criId: 'cri_19',
                      title:
                        'convencional com o mesmo tipo do cultivo da área produtiva',
                      value: '',
                    },
                    {
                      criId: 'cri_20',
                      title:
                        'convencional com outros tipos de cultivo e uso do solo',
                      value: '',
                    },
                    {
                      criId: 'cri_21',
                      title:
                        'outros tipos de cultivos e de uso do solo sem uso de insumos químicos',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_8',
                  desc: 'BV - Barreiras vegetais',
                  cri: [
                    {
                      criId: 'cri_22',
                      title: 'não há',
                      value: '',
                    },
                    {
                      criId: 'cri_23',
                      title: 'há (1 espécie)',
                      value: '',
                    },
                    {
                      criId: 'cri_24',
                      title: 'há (diversificada)',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_9',
                  desc: 'DA - Desenho do agroecossistema',
                  cri: [
                    {
                      criId: 'cri_25',
                      title: 'monocultura orgânica',
                      value: '',
                    },
                    {
                      criId: 'cri_26',
                      title: 'pouco diversificado',
                      value: '',
                    },
                    {
                      criId: 'cri_27',
                      title:
                        'muito diversificado / consorciado / planejamento rotacionado',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_10',
                  desc: 'PAI - Diversidade de plantas espontâneas e insetos indesejáveis',
                  cri: [
                    {
                      criId: 'cri_28',
                      title: 'alto e descontrolado',
                      value: '',
                    },
                    {
                      criId: 'cri_29',
                      title: 'ausência',
                      value: '',
                    },
                    {
                      criId: 'cri_30',
                      title: 'baixo e controlado',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_11',
                  desc: 'ID - Incidência de doenças',
                  cri: [
                    {
                      criId: 'cri_31',
                      title: 'alto índice de doenças',
                      value: '',
                    },
                    {
                      criId: 'cri_32',
                      title:
                        'incidência de doenças de fácil controle / domínio de técnicas',
                      value: '',
                    },
                    {
                      criId: 'cri_33',
                      title: 'não ocorreram doenças',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_12',
                  desc: 'CDC - Crescimento dos cultivos',
                  cri: [
                    {
                      criId: 'cri_34',
                      title:
                        'crescimento das plantas foi alterado e prejudicado',
                      value: '',
                    },
                    {
                      criId: 'cri_35',
                      title:
                        'crescimento das plantas permaneceram = ao cultivo convencional',
                      value: '',
                    },
                    {
                      criId: 'cri_36',
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
          dataId: 'data_3',
          title: 'Micro-clima',
          complete: 'Sem preencher',
          desc: [
            {
              descId: 'desc_5',
              title: 'Alterações',
              quant: '1 indicador',
            },
          ],
          ind: [
            {
              indDataId: 'indData_5',
              title: 'Alterações',
              data: [
                {
                  descDataId: 'descData_13',
                  desc: 'IDAC - Influência nos resultados produtivos das áreas de produção.',
                  cri: [
                    {
                      criId: 'cri_37',
                      title:
                        'alterações climáticas influenciaram na produtividade / qualidade dos cultivos',
                      value: '',
                    },
                    {
                      criId: 'cri_38',
                      title: 'houve influência, mas sem perda significativa',
                      value: '',
                    },
                    {
                      criId: 'cri_39',
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
          dataId: 'data_4',
          title: 'Recursos naturais disponíveis',
          complete: 'Sem preencher',
          desc: [
            {
              descId: 'desc_6',
              title: 'Recursos externos',
              quant: '2 indicadores',
            },
            {
              descId: 'desc_7',
              title: 'Recursos internos',
              quant: '2 indicadores',
            },
          ],
          ind: [
            {
              indDataId: 'indData_6',
              title: 'Recursos externos',
              data: [
                {
                  descDataId: 'descData_14',
                  desc: 'EPM - Fontes de energia / combustível (para uso de maquinários)',
                  cri: [
                    {
                      criId: 'cri_40',
                      title: 'dependência de fonte de energia externa',
                      value: '',
                    },
                    {
                      criId: 'cri_41',
                      title: 'parte da energia utilizada é externa',
                      value: '',
                    },
                    {
                      criId: 'cri_42',
                      title: 'fonte de energia produzida localmente',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_15',
                  desc: 'UI - Uso de insumos',
                  cri: [
                    {
                      criId: 'cri_43',
                      title: 'totalmente externos',
                      value: '',
                    },
                    {
                      criId: 'cri_44',
                      title: 'parcialmente externos',
                      value: '',
                    },
                    {
                      criId: 'cri_45',
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
      indId: 'ind_2',
      title: 'Indicadores Sociais',
      data: [
        {
          dataId: 'data_5',
          title: 'Trajetória de vida das famílias',
          complete: 'Sem preencher',
          desc: [
            {
              descId: 'desc_8',
              title: 'Origem das famílias',
              quant: '1 indicador',
            },
            {
              descId: 'desc_9',
              title: 'Manejo agroecológico',
              quant: '1 indicador',
            },
          ],
          ind: [
            {
              indDataId: 'indData_7',
              title: 'Origem das familías',
              complete: 'Sem preencher',
              data: [
                {
                  descDataId: 'descData_16',
                  desc: 'PLOAP - Proximidade do local de residência com a área produtiva',
                  cri: [
                    {
                      criId: 'cri_46',
                      title:
                        'centros urbanos, sem ligação com o meio rural e com atividades agrícolas',
                      value: '',
                    },
                    {
                      criId: 'cri_47',
                      title: 'agricultores de outras regiões e Estados',
                      value: '',
                    },
                    {
                      criId: 'cri_48',
                      title: 'agricultores locais',
                      value: '',
                    },
                  ],
                },
              ],
            },
            {
              indDataId: 'indData_8',
              title: 'Manejo agroecológico',
              complete: 'Sem preencher',
              data: [
                {
                  descDataId: 'descData_17',
                  desc: 'NICE - Qual nível se considera estar',
                  cri: [
                    {
                      criId: 'cri_49',
                      title: 'produção/aquisição de insumos orgânicos',
                      value: '',
                    },
                    {
                      criId: 'cri_50',
                      title: 'diversificação da produção',
                      value: '',
                    },
                    {
                      criId: 'cri_51',
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
          dataId: 'data_6',
          title: 'Segurança alimentar',
          complete: 'Sem preencher',
          desc: [
            {
              descId: 'desc_10',
              title: 'Produção para o auto-sustento',
              quant: '2 indicadores',
            },
          ],
          ind: [
            {
              indDataId: 'indData_9',
              title: 'Produção para o auto-sustento',
              data: [
                {
                  descDataId: 'descData_18',
                  desc: 'APDAS - % da produção destinada ao auto-sustento',
                  cri: [
                    {
                      criId: 'cri_52',
                      title:
                        'não há produção para auto-sustento, apenas para comercialização',
                      value: '',
                    },
                    {
                      criId: 'cri_53',
                      title: 'produz parte e compra parte do que precisa',
                      value: '',
                    },
                    {
                      criId: 'cri_54',
                      title:
                        'produz tudo o que precisa e comercializa o excedente',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_19',
                  desc: 'DAS - Diversificação da produção para auto-sustento',
                  cri: [
                    {
                      criId: 'cri_55',
                      title: 'não é diversificada',
                      value: '',
                    },
                    {
                      criId: 'cri_56',
                      title: 'pouco diversificada',
                      value: '',
                    },
                    {
                      criId: 'cri_57',
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
          dataId: 'data_7',
          title: 'Qualidade de vida',
          complete: 'Sem preencher',
          desc: [
            {
              descId: 'desc_11',
              title: 'Saúde',
              quant: '1 indicador',
            },
            {
              descId: 'desc_12',
              title: 'Infra-estrutura básica',
              quant: '3 indicadores',
            },
          ],
          ind: [
            {
              indDataId: 'indData_10',
              title: 'Saúde',
              data: [
                {
                  descDataId: 'descData_20',
                  desc: 'GTX - Grau de exposição a componentes tóxicos',
                  cri: [
                    {
                      criId: 'cri_58',
                      title: 'diminuiu',
                      value: '',
                    },
                    {
                      criId: 'cri_59',
                      title: 'interrompeu',
                      value: '',
                    },
                    {
                      criId: 'cri_60',
                      title: 'interrompeu há mais de 2 anos',
                      value: '',
                    },
                  ],
                },
              ],
            },
            {
              indDataId: 'indData_11',
              title: 'Infra-estrutura básica',
              complete: 'Sem preencher',
              data: [
                {
                  descDataId: 'descData_21',
                  desc: 'PCSO - Participação em cursos, seminários, oficinas',
                  cri: [
                    {
                      criId: 'cri_61',
                      title: 'Não há',
                      value: '',
                    },
                    {
                      criId: 'cri_62',
                      title: 'Continuou igual',
                      value: '',
                    },
                    {
                      criId: 'cri_63',
                      title: 'Melhorou/aumentou',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_22',
                  desc: 'AA - Acesso à água',
                  cri: [
                    {
                      criId: 'cri_64',
                      title: 'Não há',
                      value: '',
                    },
                    {
                      criId: 'cri_65',
                      title: 'Continuou igual',
                      value: '',
                    },
                    {
                      criId: 'cri_66',
                      title: 'Melhorou/aumentou',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_23',
                  desc: 'ABP - Área de beneficiamento de produtos',
                  cri: [
                    {
                      criId: 'cri_67',
                      title: 'Não há',
                      value: '',
                    },
                    {
                      criId: 'cri_68',
                      title: 'Continuou igual',
                      value: '',
                    },
                    {
                      criId: 'cri_69',
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
          dataId: 'data_8',
          title: 'Organização do trabalho',
          complete: 'Sem preencher',
          desc: [
            {
              descId: 'desc_13',
              title: 'Trabalho coletivo',
              quant: '1 indicador',
            },
            {
              descId: 'desc_14',
              title: 'Operação de investimento externos',
              quant: '2 indicadores',
            },
            {
              descId: 'desc_15',
              title: 'Percepção ambiental e relação com a natureza',
              quant: '2 indicadores',
            },
          ],
          ind: [
            {
              indDataId: 'indData_12',
              title: 'Trabalho coletivo',
              data: [
                {
                  descDataId: 'descData_24',
                  desc: 'MOF - Mão de obra familiar',
                  cri: [
                    {
                      criId: 'cri_70',
                      title: 'Não há participação dos jovens e mulheres',
                      value: '',
                    },
                    {
                      criId: 'cri_71',
                      title: 'Houve pouca participação de jovens e mulheres',
                      value: '',
                    },
                    {
                      criId: 'cri_72',
                      title: 'Há total participação dos jovens e mulheres',
                      value: '',
                    },
                  ],
                },
              ],
            },
            {
              indDataId: 'indData_13',
              title: 'Operação de investimento externos',
              complete: 'Sem preencher',
              data: [
                {
                  descDataId: 'descData_25',
                  desc: 'DDI - Destino dado ao investimento',
                  cri: [
                    {
                      criId: 'cri_73',
                      title: 'Ações emergenciais',
                      value: '',
                    },
                    {
                      criId: 'cri_74',
                      title: 'Ações de resposta de curto prazo',
                      value: '',
                    },
                    {
                      criId: 'cri_75',
                      title: 'Ações de resposta a longo prazo',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_26',
                  desc: 'DROSP - Distribuição de renda originada do sistema produtivo',
                  cri: [
                    {
                      criId: 'cri_76',
                      title: 'Gerou prejuizo para as famílias',
                      value: '',
                    },
                    {
                      criId: 'cri_77',
                      title:
                        'Poucas famílias foram beneficiadas e/ou pouco significativo',
                      value: '',
                    },
                    {
                      criId: 'cri_78',
                      title: 'Todas as famílias foram beneficiadas',
                      value: '',
                    },
                  ],
                },
              ],
            },
            {
              indDataId: 'indData_14',
              title: 'Percepção ambiental e relação com a natureza',
              complete: 'Sem preencher',
              data: [
                {
                  descDataId: 'descData_27',
                  desc: 'ORPA - Objetivo da realização da produção agroecológica',
                  cri: [
                    {
                      criId: 'cri_79',
                      title: 'Redução dos custos da produção',
                      value: '',
                    },
                    {
                      criId: 'cri_80',
                      title: 'Recuperação do solo',
                      value: '',
                    },
                    {
                      criId: 'cri_81',
                      title: 'Iniciar processo de transição agroecológica',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_28',
                  desc: 'PFAP - Planos futuros para a área produtiva',
                  cri: [
                    {
                      criId: 'cri_82',
                      title: 'Voltará para a produção convencional',
                      value: '',
                    },
                    {
                      criId: 'cri_83',
                      title:
                        'Dará continuidade ao manejo orgânico/agroecológica',
                      value: '',
                    },
                    {
                      criId: 'cri_84',
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
      indId: 'ind_3',
      title: 'Indicadores Econômicos',
      data: [
        {
          dataId: 'data_9',
          title: 'Planejamento produtivo',
          complete: 'Sem preencher',
          desc: [
            {
              descId: 'desc_16',
              title: 'Capacidade de investimento e gestão',
              quant: '3 indicadores',
            },
          ],
          ind: [
            {
              indDataId: 'indData_15',
              title: 'Capacidade de investimento e gestão',
              data: [
                {
                  descDataId: 'descData_29',
                  desc: 'RPPSAP - Reservas para a próxima safra',
                  cri: [
                    {
                      criId: 'cri_85',
                      title: 'Não há reservas',
                      value: '',
                    },
                    {
                      criId: 'cri_86',
                      title: 'Há poucas reservas',
                      value: '',
                    },
                    {
                      criId: 'cri_87',
                      title:
                        'Próxima safra já planejada e com reservas garantidas',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_30',
                  desc: 'IRINR - Investimento em recursos/insumos não renováveis',
                  cri: [
                    {
                      criId: 'cri_88',
                      title:
                        'Todo investimento feito em recursos não renováveis',
                      value: '',
                    },
                    {
                      criId: 'cri_89',
                      title:
                        'Parte do recurso destinado à recursos não renováveis',
                      value: '',
                    },
                    {
                      criId: 'cri_90',
                      title:
                        'Pequena parte do investimento para recursos não renováveis',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_31',
                  desc: 'ECPM - Execução do sistema produtivo conforme Plano de Manejo',
                  cri: [
                    {
                      criId: 'cri_91',
                      title: 'Não foi respeitado o planejamento',
                      value: '',
                    },
                    {
                      criId: 'cri_92',
                      title: 'Foram necessárias algumas alterações',
                      value: '',
                    },
                    {
                      criId: 'cri_93',
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
          dataId: 'data_10',
          title:
            'Eficiência econômica da produção agrícola da área/local de produção',
          complete: 'Sem preencher',
          desc: [
            {
              descId: 'desc_17',
              title: 'Produtividade',
              quant: '2 indicadores',
            },
          ],
          ind: [
            {
              indDataId: 'indData_16',
              title: 'Produtividade',
              data: [
                {
                  descDataId: 'descData_32',
                  desc: 'PHEC – Produção (hectares)',
                  cri: [
                    {
                      criId: 'cri_94',
                      title: 'Muito baixa',
                      value: '',
                    },
                    {
                      criId: 'cri_95',
                      title: 'Baixa e/ou igual as culturas convencionais',
                      value: '',
                    },
                    {
                      criId: 'cri_96',
                      title: 'Alta / satisfatória',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_33',
                  desc: 'CGR - Comercialização (geração de renda)',
                  cri: [
                    {
                      criId: 'cri_97',
                      title: 'Comercialização na área produtiva',
                      value: '',
                    },
                    {
                      criId: 'cri_98',
                      title: 'PNAE',
                      value: '',
                    },
                    {
                      criId: 'cri_99',
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
          dataId: 'data_11',
          title: 'Estabilidade econômica da área/local de produção',
          complete: 'Sem preencher',
          desc: [
            {
              descId: 'desc_18',
              title: 'Risco econômico',
              quant: '3 indicadores',
            },
          ],
          ind: [
            {
              indDataId: 'indData_17',
              title: 'Risco econômico',
              data: [
                {
                  descDataId: 'descData_34',
                  desc: 'DP - Diversidade produtiva',
                  cri: [
                    {
                      criId: 'cri_100',
                      title: 'Baixa (especificar o nº de espécies)',
                      value: '',
                    },
                    {
                      criId: 'cri_101',
                      title:
                        'Média / a mesma das culturas convencionais (especificar o nº de espécies)',
                      value: '',
                    },
                    {
                      criId: 'cri_102',
                      title: 'Alta (especificar o nº de espécies)',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_35',
                  desc: 'BP - Beneficiamento de produtos',
                  cri: [
                    {
                      criId: 'cri_103',
                      title: 'Não houve beneficiamento',
                      value: '',
                    },
                    {
                      criId: 'cri_104',
                      title: 'Houve parte do beneficiamento (não satisfatório)',
                      value: '',
                    },
                    {
                      criId: 'cri_105',
                      title: 'houve beneficiamento, agregando valor ao produto',
                      value: '',
                    },
                  ],
                },
                {
                  descDataId: 'descData_36',
                  desc: 'DII - Dependência de insumos e informações externas',
                  cri: [
                    {
                      criId: 'cri_106',
                      title: 'Alta dependência',
                      value: '',
                    },
                    {
                      criId: 'cri_107',
                      title: 'Média / em partes',
                      value: '',
                    },
                    {
                      criId: 'cri_108',
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
  ]);

  const data = {
    title: `Área ${area}`,
    info: info,
  };

  useEffect(() => {
    const load = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearInterval(load);
    };
  }, []);

  if (dados === true) {
    return (
      <StepData
        title={title}
        percent={percent}
        setDados={setDados}
        dataForm={dataForm}
        info={info}
        setInfo={setInfo}
      />
    );
  }
  return (
    <Scroll>
      <Modals
        visible={visible}
        setVisible={setVisible}
        title="Deseja realmente voltar?"
        desc="Caso queira voltar, os dados preenchidos serão perdidos"
        textCancel="Cancelar"
        textOk="Sair"
        onFunction={() => {
          setArea(area - 1);
          setState('research');
        }}
      />
      <Header
        mode="common"
        title="Dados"
        back
        onBack={() => {
          setVisible(!visible);
        }}
      />
      <Space vertical={20} />
      {!!loading && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={46} color={Colors.blue} />
        </View>
      )}
      {!loading &&
        info.map((indicator, indId) => (
          <>
            <View
              key={`indId_${indId}`}
              style={{
                borderBottomWidth: 1,
                width: '100%',
                padding: 8,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: Colors.lightGray,
              }}>
              <Text
                title={indicator.title}
                size={18}
                weight={700}
                color={Colors.textSecundaryBlack}
              />
            </View>
            <Space vertical={16} />
            {indicator.data.map((item, dataId) => (
              <TouchableOpacity
                key={`indId_${indId}dataId_${dataId}`}
                style={{
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: Colors.textGray,
                  borderRadius: 20,
                  width: '100%',
                  padding: 16,
                  marginBottom: 32,
                }}
                onPress={() => {
                  setDataForm(item.ind);
                  setPercent(item);
                  setTitle(item.title);
                  setDados(!dados);
                }}>
                <Text
                  title={item.title}
                  size={18}
                  weight={700}
                  color={Colors.textGray}
                />
                <Space vertical={8} />
                {item.desc.map((ind, descId) => (
                  <Text
                    key={`indId_${indId}dataId_${dataId}descId_${descId}`}
                    title={`${ind.title} - ${ind.quant}`}
                    size={16}
                    weight={500}
                    color={Colors.textGray}
                  />
                ))}
                <Space vertical={8} />
                <Text
                  title={item.complete}
                  size={15}
                  weight={600}
                  color={
                    item.complete === 'Sem preencher'
                      ? Colors.secundaryTextGray
                      : item.complete === 'Incompleto'
                      ? Colors.red
                      : item.complete === 'Parcialmente completo'
                      ? Colors.blue
                      : Colors.green
                  }
                />
              </TouchableOpacity>
            ))}
            <Space vertical={15} />
          </>
        ))}
      {!loading && (
        <>
          <View style={{width: '100%'}}>
            <Button
              background={Colors.blue}
              title="Concluir"
              weight={600}
              size={15}
              shadow={4}
              onPress={() => {
                setDataArea([...dataArea, data]);
                setDataRadar([...dataRadar, infoRadar]);
                setState('research');
              }}
              color={Colors.background}
            />
          </View>
          <Space vertical={4} />
        </>
      )}
    </Scroll>
  );
};

export default Step2;
