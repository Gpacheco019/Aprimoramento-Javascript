exports.paginaInicial = (req, res) => {
    res.render('index');
};


exports.tratRota = (req, res) => {
    res.send(req.body)
};