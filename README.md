# Lambdas

A nodejs lambda function to be used with AWS SES. 
This lambda function enables you to send email using SES. The code does this:
1. Fetch a file from an S3 bucket
2. Generate mail body from a template provided. 
3. Send an email to the receiver id with attached file, and the email body created from template.
