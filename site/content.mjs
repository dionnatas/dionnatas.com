export const name = 'Diônnatas Santa Fé Filho';
export const origin = 'https://www.dionnatas.com';
export const email = 'dionnatas@dionnatas.com';
export const linkedin = 'https://www.linkedin.com/in/dionnatas/';
export const cases = [
  {
    number: '01', slug: 'sdk-de-biometria', tag: 'SDKs móveis · Biometria',
    title: 'SDKs de biometria facial',
    intro: 'Reconhecimento facial que outras aplicações podem integrar sem assumir a complexidade da captura.',
    role: 'Desenvolvimento de SDKs e bibliotecas e liderança técnica na Payface.',
    challenge: 'Uma jornada de biometria precisa lidar com câmera, permissões e falhas de captura. Quando essa jornada roda dentro do app de terceiros, também é preciso pensar no contrato com quem integra o SDK.',
    decision: 'O ponto de arquitetura é deixar a captura e seu ciclo de vida sob responsabilidade do SDK, enquanto o integrador recebe uma interface clara para iniciar o fluxo e tratar os resultados. No Android, por exemplo, vale validar o que acontece se a tela perde o foco ou se a câmera ainda está inicializando quando a pessoa volta.',
    takeaway: 'A regra que levo desse tipo de projeto: teste a integração na perspectiva do app consumidor. A pergunta não é só se a captura funciona, mas se o app sabe continuar quando ela é cancelada, interrompida ou precisa ser refeita.',
    diagram: ['Aplicação integradora', 'SDK de captura', 'Resultado biométrico'],
  },
  {
    number: '02', slug: 'android-smartpos', tag: 'Android nativo · Pagamentos',
    title: 'Integrações Android para SmartPOS',
    intro: 'Aplicações Android para terminais de pagamento e conexões com TEF, POS e APIs.',
    role: 'Desenvolvimento Android e de integrações de pagamento na SKYTEF.',
    challenge: 'Em um terminal, a experiência do operador depende tanto da interface quanto de estados que chegam de fora do app: confirmação, cancelamento, perda de conexão ou resposta tardia.',
    decision: 'Ao desenhar uma integração, separo o estado mostrado na tela do resultado retornado pelo meio de pagamento. Isso ajuda a modelar os caminhos de falha e a identificar quais casos precisam ser testados no terminal físico.',
    takeaway: 'Antes de liberar uma integração, vale validar os fluxos em que o operador fica sem saber se a transação terminou. É aí que mensagens claras e regras de recuperação fazem mais diferença.',
    diagram: ['Aplicativo Android', 'Terminal SmartPOS', 'Provedor de pagamento'],
  },
];

export const posts = [
  {
    slug: 'medir-tamanho-sdk-android-play-store',
    title: 'Como medir o impacto de um SDK Android no download pela Play Store',
    intro: 'O tamanho do AAR não responde quanto o SDK acrescenta ao download. Para medir isso, compare o mesmo app com e sem a dependência.',
    sections: [
      ['Monte duas versões comparáveis', 'Use o mesmo app de teste, com a mesma configuração de release, versão do build e regras de R8. Gere dois AABs: um sem o SDK e outro com uma integração mínima que realmente exercite a dependência. Se o código nunca for usado, o shrinker pode removê-lo e distorcer a medição.'],
      ['Fixe o dispositivo antes de comparar', 'Use a mesma especificação de dispositivo nos dois cenários: ABI, versão do Android, densidade e idioma. Com bundletool, gere os conjuntos de APKs a partir dos AABs e use get-size total com a mesma especificação. Repita separadamente para arm64-v8a e x86_64 se ambas as arquiteturas forem relevantes.'],
      ['Reporte a diferença, não o tamanho total', 'Subtraia o tamanho estimado de download da versão sem SDK do tamanho da versão com SDK. Por exemplo, usando valores fictícios, 14,2 MB menos 11,0 MB resulta em 3,2 MB para aquele dispositivo. Qualifique o valor como estimativa local, não como o tamanho do AAR nem como uma medição de instalação.'],
      ['Explique as diferenças por arquitetura', 'Use o APK Analyzer para comparar bibliotecas nativas, DEX e assets. A diferença pode ser pequena quando boa parte do peso está em recursos compartilhados. Para uma afirmação sobre entrega real, confirme no Play Console e registre a versão e a configuração analisadas.'],
    ],
  },
];

export const experience = [
  ['Payface', 'Tech Lead · Desenvolvedor de Software', 'Desde mai. 2023', 'Liderança técnica e desenvolvimento de aplicações de reconhecimento facial, SDKs e integrações de pagamento.'],
  ['SKYTEF', 'Desenvolvedor de Software', 'Out. 2020 a mai. 2023', 'Aplicativos Android para SmartPOS, integração com TEF, POS e APIs, gateways de pagamento e gerenciamento remoto de dispositivos.'],
  ['PDVend', 'Analista de Sistemas e Integrações Pleno', 'Mar. 2019 a abr. 2020', 'Planejamento e manutenção de integrações com parceiros e implementação de soluções fiscais.'],
  ['Teleperformance Brasil', 'Analista de Monitoração e Incidentes de TI', 'Mai. 2013 a set. 2018', 'Monitoramento de sistemas e infraestrutura, gestão de incidentes e rotinas de datacenter.'],
  ['Unilever', 'Promotor Líder', 'Abr. 2010 a jan. 2013', 'Gestão de equipe e coordenação de ações promocionais.'],
];
