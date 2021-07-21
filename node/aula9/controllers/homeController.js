exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome">
    <button>Olá Mundo</button>
    </form>
    `)
};


exports.tratRota = (req, res) => {
    res.send('ei sou sua rota de POST')
};