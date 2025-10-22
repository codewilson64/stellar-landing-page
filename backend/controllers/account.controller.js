const deleteAccount = async (req, res) => {
  res.status(200).json({ success: true, message: "Endpoint reached" });
}

export { deleteAccount }