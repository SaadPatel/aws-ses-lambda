# Lambdas

A nodejs lambda function to be used with AWS SES. 
This lambda function enables you to send email using SES. The code does this:
1. Fetch a file from an S3 bucket
2. Generate mail body from a template provided. 
3. Send an email to the receiver id with attached file, and the email body created from template.

The function can be invoked in any of the ways AWS supports lambda invocations. The sample JSON payload for invocation is given in the file samplePayload.json. This payload must be provided at the time of invocation irrespective of the method of invocation.

Here's some description about the payload object format:


{<br>
"file":{<br>
  "bucketName":"yourS3BucketName",<br>
  "fileKey":"path/to/file.pdf",<br>
},<br>
"attachmentName":"file.pdf",                      //This name will be used in the mail attachment<br>
"fromEmailId":"yourverifiedemail@dummy.com",      //Needs to be a SES verfied email address<br>
"toEmailId":"receipient@dummy.com",               //Needs to be SES verified email address IF you're in SES sandbox mode<br>
"templateName":"CustomTemplate1",                 //Specify the template name here. You can have multiple templates.<br>
"templateInput":{                                 //The keys in this object MUST match the placeholders in the template specified in templateName<br>
  "argument1":"Replace",<br>
  "argument2":"placeholders in template",<br>
  "argument3":"with",<br>
  "argument4":"these supplied arguments",<br>
}<br>
}<br>
