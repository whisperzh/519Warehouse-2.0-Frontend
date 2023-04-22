import aws from 'aws-sdk'

const region = process.env.REACT_APP_AWS_BUCKET_REGION
const secretAccessKey = process.env.REACT_APP_AWS_SECRET_KEY
const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY
const bucketName = process.env.REACT_APP_AWS_BUCKET_NAME

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

// generate uploadUrl using random 16 bytes filename (resolve filename collision in the s3)
const generateUploadUrl = async name => {
    // const rawBytes = await randomBytes(16)
    // const imageName = rawBytes.toString('hex')
    const params = {
      Bucket: bucketName,
      Key: name,
      Expires: 60
    }
    let res
    try {
      res = await s3.getSignedUrlPromise("putObject", params)
      // console.log(res)
      return res
    } catch (e) {
      console.log(e)
      return e
    }
  }

export default generateUploadUrl