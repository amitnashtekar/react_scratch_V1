module.exports = {
	linters: {
		'**/*.+(js|md|ts|css|scss|graphql|yml|yaml|json)': [
			'eslint --fix',
			'prettier --write',
			'git add'
		]
	}
};
