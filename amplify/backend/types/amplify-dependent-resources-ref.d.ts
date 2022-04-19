export type AmplifyDependentResourcesAttributes = {
    "function": {
        "mylambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "outbound": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}