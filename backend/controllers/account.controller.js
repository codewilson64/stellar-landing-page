import { Client, Users } from "node-appwrite"

const deleteAccount = async (req, res) => {
  const { userId } = req.body

  try {
    if (!userId) {
      return res.status(400).json({ success: false, message: "Missing userId" });
    }

    const client = new Client()
      .setEndpoint(process.env.APPWRITE_ENDPOINT)
      .setProject(process.env.APPWRITE_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY);

    const users = new Users(client);
    await users.delete(userId);

    return res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { deleteAccount };