var aws = require("aws-sdk");
var s3util = require("./s3util");
var mailutil = require("./mailutil");

exports.handler = async function (event, context) {
  let options = event;
  try{
    //First we get the file we want to attach from our s3 bucket    
    var fileObj = await s3util.getObjectFromS3(options.file.bucketName, options.file.fileKey);
    if(fileObj){
    //File is retrieved correctly
      options.fileObj = fileObj;
    //Init the mailtuil
      await mailutil.init();
    //Send the mail
      await mailutil.sendMail(options);
      context.succeed('Exit: Success');
    }else{
      context.fail('Internal Error: Object could not be fetched from S3');
    }
  }catch(err){
    context.fail('Internal Error: The email could not be sent.');
  }
};
