exports.documantation = (req, res, next) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Boilerplate</title>
        <style>
            body {
                background-color: black;
                color: green;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                font-family: Arial, sans-serif;
            }
            h1 {
                text-align: center;
                font-sizq: 30px;
            }
            p {
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to my Boilerplate</h1>
        <p>Authorization</p>
        <a href="https://documenter.getpostman.com/view/19307895/2sA3XSC1mq">documantation</a>
    </body>
    </html>
`
    res.send(html);
}