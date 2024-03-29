async function migrate(serverless) {
  return `npx sls invoke --function databaseMigrations --stage=${serverless.variables.options.stage}`;
}
async function postDeployment(serverless) {
  return await migrate(serverless);
}
module.exports = postDeployment;
