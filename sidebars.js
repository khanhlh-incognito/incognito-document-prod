/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// module.exports = {
//   mySidebar: [
//     {
//       type: 'autogenerated',
//       dirName: '.', // generate sidebar slice from the docs folder (or versioned_docs/<version>)
//     },
//   ],
// };


module.exports = {
  mySidebar: [
    {
      type: 'category',
      label: 'Home 123',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Tech',
      items: [
        ['Slashing.md'],
      ],
      // items: ['Introduction.md', 'Shielding Cryptocurrencies', 'trustless custodians', 'sending cryptocurrencies confidentially', 'dynamic sharding', 'consensus', 'software stack', 'network performance', 'Network Incentive', 'User Created Privacy Tokens', 'Use Cases', 'Future Work', 'Conclusions, Acknowledgments, and References'],
    },
  ],
};
