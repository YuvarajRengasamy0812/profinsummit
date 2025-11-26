// import S3 from 'aws-sdk/clients/s3';

 
// export const uploadFile= async(file, FOLDER) =>{
//   const contentType = file.type;
//   const bucket = new S3(
//     {
//       accessKeyId: 'AKIAVG3G3CSD7C4DLP5F',
//       secretAccessKey: '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',
//       region: 'ap-south-1'
//     }
//   );
//   const params = {
//     Bucket: 'v2pixalive',
//     Key: FOLDER + file.name,
//     Body: file,
//     ACL: 'public-read',
//     ETag: 'ETag',
//     ContentType: contentType
//   };
//   return new Promise((resolve,reject)=>{
//     bucket.upload(params, function (err, data) {
//       if (err) {
//         console.log('There was an error uploading your file: ', err);
//         reject(err)
//       }
//       console.log('Successfully uploaded file.', data.Location);
//       resolve(data)
//     });
//   })
// }
