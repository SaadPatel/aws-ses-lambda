var aws = require("aws-sdk");
var s3 = new aws.S3();

module.exports = {

getObjectFromS3: function(bucketName, fileKey){
	try {
		if(bucketName && fileKey){
			return s3.getObject({Bucket: bucketName, Key: fileKey}).promise();
		}else{
			throw new Error('Wrong input for getObjectFromS3');
		}
	} catch (error) {
			throw new Error('Error fetching file from S3. bucketName:'+bucketName+' fileKey:'+fileKey);
	}
}

};
