import AWS from "aws-sdk";

export class UploadPhotoService {
    constructor(

    ) {
        //
    }

    async execute() {
        const s3 = new AWS.S3({ credentials: {accessKeyId: "AKIAY6KLN5RETATEL6UV", secretAccessKey: "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"}});

        (async () => {
            s3.putObject({
                Body: "Hello world!",
                Key: "hello-world.txt",
                Bucket: "snitram-pinterest",
            }).promise()
        })();
    }
}