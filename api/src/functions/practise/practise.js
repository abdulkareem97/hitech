import { logger } from 'src/lib/logger'
import formidable from 'formidable'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
// export const handler = async (event, context) => {
//   logger.info('Invoked practise function')
//   const contentLength = event.headers['content-length']
//   const body = event.body

//   console.log(`Content-Length: ${contentLength}`)
//   console.log(`Request body: ${body}`)
//   // const form = new formidable.IncomingForm()

//   // form.parse(event.body, (err, fields, files) => {
//   //   // handle the uploaded file here
//   // })

//   return {
//     statusCode: 200,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       data: 'practise function',
//     }),
//   }
// }
// export const handler = async (event, context) => {
//   const form = formidable({ multiples: true });
//   const { fields, files } = await new Promise((resolve, reject) => {
//     form.parse(event.body, (err, fields, files) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve({ fields, files });
//       }
//     });
//   });

//   // Process file data here

//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: 'File uploaded successfully' })
//   };
// };
// web/src/functions/uploadFile.js

// import multer from 'multer'

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// })

// const upload = multer({ storage: storage })

// export const handler = upload.single('file') , async(req, res) => {
//   try {
//     const { file } = req

//     // Do something with the file here, like save it to a database

//     res.status(200).json({ message: 'File uploaded successfully' })
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ error: 'An error occurred while uploading the file' })
//   }
// }

// web/src/functions/uploadFile.js

import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

export const handler = async (req, res) => {
  try {
    await upload.single('file')(req, res)

    const { file } = req

    // Do something with the file here, like save it to a database

    res.status(200).json({ message: 'File uploaded successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred while uploading the file' })
  }
}








