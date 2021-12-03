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
  const [quantInd, setQuantInd] = useState(0);
  const [dataForm, setDataForm] = useState([]);
  const [percent, setPercent] = useState<any>();
  const [dados, setDados] = useState(false);
  const [title, setTitle] = useState('');
  const [infoRadar, setInfoRadar] = useState({});
  const [info, setInfo] = useState<any[]>([
    {
      title: 'Indicadores Ecológicos',
      data: [
        {
          title: 'Solo',
          complete: 'Sem preencher',
          quantInd: 5,
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
                  sigla: 'fnpk',
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
                  sigla: 'as',
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
                  sigla: 'mo',
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
                  sigla: 'pm',
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
                  sigla: 'cpe',
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
          complete: 'Sem preencher',
          quantInd: 7,
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
                  sigla: 'rlapp',
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
                  sigla: 'eap',
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
                  sigla: 'bv',
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
                  sigla: 'da',
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
                  sigla: 'pai',
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
                  sigla: 'id',
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
                  sigla: 'cdc',
                  desc: 'CDC - Crescimento dos cultivos',
                  cri: [
                    {
                      title:
                        'crescimento das plantas foi alterado e prejudicado',
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
          complete: 'Sem preencher',
          quantInd: 1,
          desc: [
            {
              title: 'Alterações',
              quant: '1 indicador',
            },
          ],
          ind: [
            {
              title: 'Alterações',
              data: [
                {
                  sigla: 'idac',
                  desc: 'IDAC - Influência nos resultados produtivos das áreas de produção.',
                  cri: [
                    {
                      title:
                        'alterações climáticas influenciaram na produtividade / qualidade dos cultivos',
                      value: '',
                    },
                    {
                      title: 'houve influência, mas sem perda significativa',
                      value: '',
                    },
                    {
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
          title: 'Recursos naturais disponíveis',
          complete: 'Sem preencher',
          quantInd: 4,
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
          ind: [
            {
              title: 'Recursos externos',
              data: [
                {
                  sigla: 'epm',
                  desc: 'EPM - Fontes de energia / combustível (para uso de maquinários)',
                  cri: [
                    {
                      title: 'dependência de fonte de energia externa',
                      value: '',
                    },
                    {
                      title: 'parte da energia utilizada é externa',
                      value: '',
                    },
                    {
                      title: 'fonte de energia produzida localmente',
                      value: '',
                    },
                  ],
                },
                {
                  sigla: 'ui',
                  desc: 'UI - Uso de insumos',
                  cri: [
                    {
                      title: 'totalmente externos',
                      value: '',
                    },
                    {
                      title: 'parcialmente externos',
                      value: '',
                    },
                    {
                      title: 'produzidos localmente',
                      value: '',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Recursos internos',
              data: [
                {
                  sigla: 'iva',
                  desc: 'IVA - Integração produção vegetal/animal',
                  cri: [
                    {
                      title: 'não há produção animal',
                      value: '',
                    },
                    {
                      title:
                        'há produção animal, mas sem integração com produção vegetal',
                      value: '',
                    },
                    {
                      title: 'há integração animal/vegetal',
                      value: '',
                    },
                  ],
                },
                {
                  sigla: 'bspm',
                  desc: 'BSPM - Banco de sementes e produção de mudas',
                  cri: [
                    {
                      title: 'não há reservas / não há produção',
                      value: '',
                    },
                    {
                      title: 'produziram parte das sementes e mudas utilizadas',
                      value: '',
                    },
                    {
                      title: 'há reserva de sementes e produção de mudas',
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
      title: 'Indicadores Sociais',
      data: [
        {
          title: 'Trajetória de vida das famílias',
          complete: 'Sem preencher',
          quantInd: 2,
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
              title: 'Origem das familías',
              complete: 'Sem preencher',
              data: [
                {
                  sigla: 'ploap',
                  desc: 'PLOAP - Proximidade do local de residência com a área produtiva',
                  cri: [
                    {
                      title:
                        'centros urbanos, sem ligação com o meio rural e com atividades agrícolas',
                      value: '',
                    },
                    {
                      title: 'agricultores de outras regiões e Estados',
                      value: '',
                    },
                    {
                      title: 'agricultores locais',
                      value: '',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Manejo agroecológico',
              complete: 'Sem preencher',
              data: [
                {
                  sigla: 'nice',
                  desc: 'NICE - Qual nível se considera estar',
                  cri: [
                    {
                      title: 'produção/aquisição de insumos orgânicos',
                      value: '',
                    },
                    {
                      title: 'diversificação da produção',
                      value: '',
                    },
                    {
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
          complete: 'Sem preencher',
          quantInd: 2,
          desc: [
            {
              title: 'Produção para o auto-sustento',
              quant: '2 indicadores',
            },
          ],
          ind: [
            {
              title: 'Produção para o auto-sustento',
              data: [
                {
                  sigla: 'apdas',
                  desc: 'APDAS - % da produção destinada ao auto-sustento',
                  cri: [
                    {
                      title:
                        'não há produção para auto-sustento, apenas para comercialização',
                      value: '',
                    },
                    {
                      title: 'produz parte e compra parte do que precisa',
                      value: '',
                    },
                    {
                      title:
                        'produz tudo o que precisa e comercializa o excedente',
                      value: '',
                    },
                  ],
                },
                {
                  sigla: 'das',
                  desc: 'DAS - Diversificação da produção para auto-sustento',
                  cri: [
                    {
                      title: 'não é diversificada',
                      value: '',
                    },
                    {
                      title: 'pouco diversificada',
                      value: '',
                    },
                    {
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
          complete: 'Sem preencher',
          quantInd: 4,
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
              title: 'Saúde',
              data: [
                {
                  sigla: 'gtx',
                  desc: 'GTX - Grau de exposição a componentes tóxicos',
                  cri: [
                    {
                      title: 'diminuiu',
                      value: '',
                    },
                    {
                      title: 'interrompeu',
                      value: '',
                    },
                    {
                      title: 'interrompeu há mais de 2 anos',
                      value: '',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Infra-estrutura básica',
              complete: 'Sem preencher',
              data: [
                {
                  sigla: 'pcso',
                  desc: 'PCSO - Participação em cursos, seminários, oficinas',
                  cri: [
                    {
                      title: 'Não há',
                      value: '',
                    },
                    {
                      title: 'Continuou igual',
                      value: '',
                    },
                    {
                      title: 'Melhorou/aumentou',
                      value: '',
                    },
                  ],
                },
                {
                  sigla: 'aa',
                  desc: 'AA - Acesso à água',
                  cri: [
                    {
                      title: 'Não há',
                      value: '',
                    },
                    {
                      title: 'Continuou igual',
                      value: '',
                    },
                    {
                      title: 'Melhorou/aumentou',
                      value: '',
                    },
                  ],
                },
                {
                  sigla: 'abp',
                  desc: 'ABP - Área de beneficiamento de produtos',
                  cri: [
                    {
                      title: 'Não há',
                      value: '',
                    },
                    {
                      title: 'Continuou igual',
                      value: '',
                    },
                    {
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
          complete: 'Sem preencher',
          quantInd: 5,
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
              title: 'Trabalho coletivo',
              data: [
                {
                  sigla: 'mof',
                  desc: 'MOF - Mão de obra familiar',
                  cri: [
                    {
                      title: 'Não há participação dos jovens e mulheres',
                      value: '',
                    },
                    {
                      title: 'Houve pouca participação de jovens e mulheres',
                      value: '',
                    },
                    {
                      title: 'Há total participação dos jovens e mulheres',
                      value: '',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Operação de investimento externos',
              complete: 'Sem preencher',
              data: [
                {
                  sigla: 'ddi',
                  desc: 'DDI - Destino dado ao investimento',
                  cri: [
                    {
                      title: 'Ações emergenciais',
                      value: '',
                    },
                    {
                      title: 'Ações de resposta de curto prazo',
                      value: '',
                    },
                    {
                      title: 'Ações de resposta a longo prazo',
                      value: '',
                    },
                  ],
                },
                {
                  sigla: 'drosp',
                  desc: 'DROSP - Distribuição de renda originada do sistema produtivo',
                  cri: [
                    {
                      title: 'Gerou prejuizo para as famílias',
                      value: '',
                    },
                    {
                      title:
                        'Poucas famílias foram beneficiadas e/ou pouco significativo',
                      value: '',
                    },
                    {
                      title: 'Todas as famílias foram beneficiadas',
                      value: '',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Percepção ambiental e relação com a natureza',
              complete: 'Sem preencher',
              data: [
                {
                  sigla: 'orpa',
                  desc: 'ORPA - Objetivo da realização da produção agroecológica',
                  cri: [
                    {
                      title: 'Redução dos custos da produção',
                      value: '',
                    },
                    {
                      title: 'Recuperação do solo',
                      value: '',
                    },
                    {
                      title: 'Iniciar processo de transição agroecológica',
                      value: '',
                    },
                  ],
                },
                {
                  sigla: 'pfap',
                  desc: 'PFAP - Planos futuros para a área produtiva',
                  cri: [
                    {
                      title: 'Voltará para a produção convencional',
                      value: '',
                    },
                    {
                      title:
                        'Dará continuidade ao manejo orgânico/agroecológica',
                      value: '',
                    },
                    {
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
      title: 'Indicadores Econômicos',
      data: [
        {
          title: 'Planejamento produtivo',
          complete: 'Sem preencher',
          quantInd: 3,
          desc: [
            {
              title: 'Capacidade de investimento e gestão',
              quant: '3 indicadores',
            },
          ],
          ind: [
            {
              title: 'Capacidade de investimento e gestão',
              data: [
                {
                  sigla: 'rppsap',
                  desc: 'RPPSAP - Reservas para a próxima safra',
                  cri: [
                    {
                      title: 'Não há reservas',
                      value: '',
                    },
                    {
                      title: 'Há poucas reservas',
                      value: '',
                    },
                    {
                      title:
                        'Próxima safra já planejada e com reservas garantidas',
                      value: '',
                    },
                  ],
                },
                {
                  sigla: 'irinr',
                  desc: 'IRINR - Investimento em recursos/insumos não renováveis',
                  cri: [
                    {
                      title:
                        'Todo investimento feito em recursos não renováveis',
                      value: '',
                    },
                    {
                      title:
                        'Parte do recurso destinado à recursos não renováveis',
                      value: '',
                    },
                    {
                      title:
                        'Pequena parte do investimento para recursos não renováveis',
                      value: '',
                    },
                  ],
                },
                {
                  sigla: 'ecpm',
                  desc: 'ECPM - Execução do sistema produtivo conforme Plano de Manejo',
                  cri: [
                    {
                      title: 'Não foi respeitado o planejamento',
                      value: '',
                    },
                    {
                      title: 'Foram necessárias algumas alterações',
                      value: '',
                    },
                    {
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
          complete: 'Sem preencher',
          quantInd: 2,
          desc: [
            {
              title: 'Produtividade',
              quant: '2 indicadores',
            },
          ],
          ind: [
            {
              title: 'Produtividade',
              data: [
                {
                  sigla: 'phec',
                  desc: 'PHEC – Produção (hectares)',
                  cri: [
                    {
                      title: 'Muito baixa',
                      value: '',
                    },
                    {
                      title: 'Baixa e/ou igual as culturas convencionais',
                      value: '',
                    },
                    {
                      title: 'Alta / satisfatória',
                      value: '',
                    },
                  ],
                },
                {
                  sigla: 'cgr',
                  desc: 'CGR - Comercialização (geração de renda)',
                  cri: [
                    {
                      title: 'Comercialização na área produtiva',
                      value: '',
                    },
                    {
                      title: 'PNAE',
                      value: '',
                    },
                    {
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
          complete: 'Sem preencher',
          quantInd: 3,
          desc: [
            {
              title: 'Risco econômico',
              quant: '3 indicadores',
            },
          ],
          ind: [
            {
              title: 'Risco econômico',
              data: [
                {
                  sigla: 'dp',
                  desc: 'DP - Diversidade produtiva',
                  cri: [
                    {
                      title: 'Baixa (especificar o nº de espécies)',
                      value: '',
                    },
                    {
                      title:
                        'Média / a mesma das culturas convencionais (especificar o nº de espécies)',
                      value: '',
                    },
                    {
                      title: 'Alta (especificar o nº de espécies)',
                      value: '',
                    },
                  ],
                },
                {
                  sigla: 'bp',
                  desc: 'BP - Beneficiamento de produtos',
                  cri: [
                    {
                      title: 'Não houve beneficiamento',
                      value: '',
                    },
                    {
                      title: 'Houve parte do beneficiamento (não satisfatório)',
                      value: '',
                    },
                    {
                      title: 'houve beneficiamento, agregando valor ao produto',
                      value: '',
                    },
                  ],
                },
                {
                  sigla: 'dii',
                  desc: 'DII - Dependência de insumos e informações externas',
                  cri: [
                    {
                      title: 'Alta dependência',
                      value: '',
                    },
                    {
                      title: 'Média / em partes',
                      value: '',
                    },
                    {
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

  console.tron.log(infoRadar);

  const setLoadRadarInfo = async () => {
    const array: any = [];

    info.map(inf => {
      inf.data.map((data: any) => {
        data.ind.map((ind: any) => {
          ind.data.map((indData: any) => {
            let result =
              (Number(indData.cri[0].value) +
                Number(indData.cri[1].value) +
                Number(indData.cri[2].value)) /
              indData.cri.length;

            array.push({[indData.sigla]: result.toFixed(2)});
          });
        });
      });
    });

    if (array.length !== 0) {
      setDataArea([...dataArea, data]);
      setDataRadar([...dataRadar, array]);
      setState('research');
    }
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
        quantInd={quantInd}
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
                  setQuantInd(item.quantInd);
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
              onPress={async () => {
                await setLoadRadarInfo();
                console.tron.log(infoRadar);
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
