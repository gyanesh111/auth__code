export function adminLogin(){

}

exports.registerUser = (req, res) => {
  AdminModel.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(500).json({ error: err.message }));
};

export function adminUpdates() {

}