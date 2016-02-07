require('express')()
  .use('/code/challenge', function (r, rs) {
    rs.header('Access-Control-Allow-Origin', '*')
      .header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      .status(201)
      .json({
        website: 'mythril.co',
        email: 'gus@mythril.co',
        name: { first: 'Gus', last: 'Suarez' },
        github_repo_link: 'https://github.com/aerze'
      });
  }).listen(9000);
