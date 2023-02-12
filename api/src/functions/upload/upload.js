import { logger } from 'src/lib/logger'
import { createReadStream, createWriteStream } from 'fs'
import { join } from 'path'
import { v4 as uuid } from 'uuid'

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
//   logger.info('Invoked upload function')

  // if (event.httpMethod !== 'GET') {
  //   return {
  //     statusCode: 200,

  //     body: JSON.stringify({
  //       data: 'upload function'
  //     }),
  //   }


  // }

  // const {file}  = JSON.parse(event.body)
  // console.log(event)

  // logger.info(file)

  // logger.error('error  dajdk this is error s error error')

  // const ext = file.name.split('.').pop()
  // const filename = `${uuid()}.${ext}`
  // const path = join(process.cwd(), 'public','image','student',filename)

  // const stream = createReadStream(file.path)
  // const writeStream = createWriteStream(path)

  // stream.pipe(writeStream)

  // return {
  //   statusCode: 200,

  //   body: JSON.stringify({
  //     data: 'upload function',
  //     // file : file,
  //     // photoUrl : `/image/student/${filename}`
  //   }),
  // }
// }

import fileupload from 'express-fileupload';

export const handler = async (event, context) => {
  const app = fileupload();
  app.post("/upload", (req, res) => {
    const newpath = __dirname + "/files/";
    const file = req.files.file;
    const filename = file.name;
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        res.status(500).send({ message: "File upload failed", code: 200 });
      }
      res.status(200).send({ message: "File Uploaded", code: 200 });
    });
  });

  return new Promise((resolve, reject) => {
    app(event, context, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({
          statusCode: 200,
          body: 'File upload API',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
    });
  });
};


