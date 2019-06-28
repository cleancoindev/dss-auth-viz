module.exports.knownExtraneousAddresses = [
  'POLL_ID',
];

module.exports.mainNodes = [
  {
    node: 'MCD_DEPLOY',
    label: 'DssDeploy',
  },
  {
    node: 'MCD_VAT',
    label: 'Vat',
  },
  {
    node: 'MCD_DAI',
    label: 'Dai',
  },
  {
    node: 'MCD_JOIN_DAI',
    label: 'DaiJoin',
  },
  {
    node: 'MCD_JUG',
    label: 'Jug',
  },
  {
    node: 'MCD_POT',
    label: 'Pot',
  },
  {
    node: 'MCD_FLAP',
    label: 'Flapper',
  },
  {
    node: 'MCD_FLOP',
    label: 'Flopper',
  },
  {
    node: 'MCD_VOW',
    label: 'Vow',
  },
  {
    node: 'MCD_CAT',
    label: 'Cat',
  },
  {
    node: 'MCD_SPOT',
    label: 'Spotter',
  },
  {
    node: 'MCD_GOV',
    label: 'MKR',
    abiName: 'DSToken',
  },
  {
    node: 'MCD_PAUSE',
    label: 'DSPause',
  },
  {
    node: 'MCD_PAUSE_PROXY',
    label: 'DSPauseProxy',
  },
  {
    node: 'MULTICALL',
    label: 'Multicall',
  },
  {
    node: 'FAUCET',
    label: 'TokenFaucet',
  },
  {
    node: 'MCD_GOV_GUARD',
    label: 'Gov Guard',
    abiName: 'DSGuard',
  },
  {
    node: 'MCD_IOU',
    label: 'IOU',
    abiName: 'DSToken',
  },
  {
    node: 'MCD_ADM',
    label: 'DSChief',
  },
  {
    node: 'VOTE_PROXY_FACTORY',
    label: 'VoteProxyFactory',
  },
  {
    node: 'PROXY_ACTIONS',
    label: 'DssProxyActions',
  },
  {
    node: 'CDP_MANAGER',
    label: 'DssCdpManager',
  },
  {
    node: 'GET_CDPS',
    label: 'GetCdps',
  },
  {
    node: 'PROXY_FACTORY',
    label: 'DSProxyFactory',
  },
  {
    node: 'PROXY_REGISTRY',
    label: 'ProxyRegistry',
  },
  {
    node: 'PROXY_PAUSE_ACTIONS',
    label: 'TestchainPauseProxyActions',
  },
  {
    node: 'PROXY_DEPLOYER',
    label: 'Proxy Deployer',
    abiName: 'DSProxy',
  },
  {
    node: 'MCD_END',
    label: 'End',
  },
  {
    node: 'MCD_GOV_ACTIONS',
    label: 'GovActions',
  },
  {
    node: 'GOV_POLL_GEN',
    label: 'GovPollingGenerator',
  },
  {
    node: 'VOTE_YES',
    label: 'VoteYes',
  },
  {
    node: 'VOTE_NO',
    label: 'VoteNo',
  },
  {
    node: 'MCD_ESM',
    label: 'ESM',
  },
];

module.exports.colNodes = [
  {
    col: 'ETH',
    colAbiName: 'WETH9_',
    ilks: ['A', 'B', 'C'],
    join: 'GemJoin'
  },
  {
    col: 'REP',
    colAbiName: 'REP',
    ilks: ['A'],
    join: 'GemJoin'
  },
  {
    col: 'ZRX',
    colAbiName: 'ZRX',
    ilks: ['A'],
    join: 'GemJoin'
  },
  {
    col: 'OMG',
    colAbiName: 'OMG',
    ilks: ['A'],
    join: 'GemJoin2'
  },
  {
    col: 'BAT',
    colAbiName: 'BAT',
    ilks: ['A'],
    join: 'GemJoin'
  },
  {
    col: 'DGD',
    colAbiName: 'DGD',
    ilks: ['A'],
    join: 'GemJoin3'
  },
  {
    col: 'GNT',
    colAbiName: 'GNT',
    ilks: ['A'],
    join: 'GemJoin4'
  },
]

module.exports.fabNodes = [
  'vatFab',
  'jugFab',
  'vowFab',
  'catFab',
  'daiFab',
  'daiJoinFab',
  'flapFab',
  'flopFab',
  'flipFab',
  'spotFab',
  'potFab',
  'pauseFab',
];
