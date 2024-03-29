export default {
  deleteRoomById: async (req, res) => {
    try {
      const { roomId } = req.params
      const room = await ChatRoomModel.remove({ _id: roomId })
      const messages = await ChatMessageModel.remove({ chatRoomId: roomId })
      return res.status(200).json({
        success: true,
        message: 'Sucesso',
        deletedRoomsCount: room.deletedCount,
        deletedMessagesCount: messages.deletedCount, 
      })
    } catch (error) {
      return res.status(500).json({ success: false, error: error})
    }
  },
  deleteMessageById: async (req, res) => {
    try {
      const { messadeId } = req.params
      const message = await ChatMessageModel.remove({ _id: messageId })
      return res.status(200).json({
        success: true,
        deletedMessagesCount: message.deletedCount
      })
    } catch (error) {
      return res.status(500).json({ success: false, error: error })
    }
  },
}