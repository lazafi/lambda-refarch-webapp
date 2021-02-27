// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5t0s6ognl7p4fmmu5nb3aslnaf",     // CognitoClientID
  "api_base_url": "https://w9zch31qi7.execute-api.eu-central-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-sandbox-sam-todoex.auth.eu-central-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1ziayy6qn25zi.amplifyapp.com"                                      // AmplifyURL
};

export default config;
