class ExampleController {
  async index(req, res) {
    const { id } = req.params;

    return res.json({ message: `Seu parâmetro ID é: ${id}` });
  }
}

export default new ExampleController();
