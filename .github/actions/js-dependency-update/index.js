
const core = require('@actions/core');
async function run() {

    /*
    1. Parse inputs:
      1.1 base-branch from which to check for updates (default: main)
      1.2 target-branch to use to create the PR (default: update-dependencies)
      1.3 Github token to use for authentication (default: GITHUB_TOKEN)
      1.4 Working directory for which to check for dependencies

    2. Execute the npm update command within the specified working directory
    3. Check if there are any changes to package.json or package-lock.json files
      3.1 if there are modified files, create a PR to the base branch from the target branch with the changes
      3.2 if there are no modified files, exit the action
    */


    core.info('This is a placeholder for the JS dependency update action.');


}

run();