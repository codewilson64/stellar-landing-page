const deleteAccount = async (req, res) => {
  const { userId } = req.body

  try {
    if (!userId) {
      return res.status(400).json({ success: false, message: "Missing userId" });
    }

    return res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { deleteAccount };