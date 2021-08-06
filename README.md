# Lambdas

A nodejs lambda function to be used with AWS SES. 
This lambda function enables you to send email using SES. The code does this:
1. Fetch a file from an S3 bucket
2. Generate mail body from a template provided. 
3. Send an email to the receiver id with attached file, and the email body created from template.

The function can be invoked in any of the ways AWS supports lambda invocations. The sample JSON payload for invocation is given in the file samplePayload.json. This payload must be provided at the time of invocation irrespective of the method of invocation.
