
1. Commit the source code into GIT Repository
2. Configure the CI server to detect any chances in the git commit history and trigger Continuous Testing upon commit (This can be configured per specific branches too if there are limitations around number of builds running at a time, etc..)
3. The CI Server would trigger the Orchestration layer which may include
    3.1 Workflows
    3.2 Artefacts
    3.3 Contextualization 
    3.4 Execution
4. Upon completion, the user is notified
5. Upon success, the code could be deployed into a higher environment

Note: Typically, Continuout Integration would be enabled for all branches, but Continuous Deployment might be controlled per environment


