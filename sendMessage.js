// Import the Tokenator
const Tokenator = require('@babbage/tokenator');

// Public identity keys
const myIdentityKey = '02f227559035bb181a3c9b450b67adfd5c771d7c14907b91ef85542dfe2cf4cb25';
const externalRecipientKey = '02be875d01cf0b4fa673a54a1919b3a055804c68930c6d5d5f67380e64093666f8';

// Initialize Tokenator with the PeerServ service URL and my identity key
const tokenator = new Tokenator({
    peerServHost: 'https://staging-peerserv.babbage.systems' // Correct property
});

// Step 1: Send a message to myself
const sendMessage = async () => {
  try {
    const messageContent = {
      recipient: myIdentityKey, // Sending a message to myself
      messageBox: 'L3_inbox',
      body: 'This is a test message!'
    };

    const result = await tokenator.sendMessage(messageContent);
    console.log('Message sent successfully:', result);

    // Wait for a brief period to allow message to be processed
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay

    return result.messageId; // Return the message ID
  } catch (error) {
    if (error.code === 'ERR_DUPLICATE_MESSAGE') {
      console.log('Duplicate message, ignoring this error.');
    } else {
      console.error('Error sending message:', error);
    }
  }
};

// Step 2: List incoming messages
const listMessages = async () => {
  try {
    // List incoming messages
    const inboxMessages = await tokenator.listMessages({ messageBox: 'L3_inbox' });

    if (inboxMessages.length > 0) {
      inboxMessages.forEach(message => {
        console.log('Message ID:', message.messageId);
        console.log('Message Content:', message.body);
      });

      // Return the first message ID
      return inboxMessages.map(x => x.messageId); // Return an array of message IDs
    } else {
      console.log('No messages in the inbox.');
    }
  } catch (error) {
    console.error('Error listing messages:', error);
  }
};

// Step 3: Acknowledge the message(s)
const acknowledgeMessages = async (messageIds) => {
  try {
    if (messageIds && messageIds.length > 0) {
      const acknowledgeResult = await tokenator.acknowledgeMessage({ messageIds });
      console.log('Messages acknowledged:', acknowledgeResult);
    } else {
      console.log('No messages to acknowledge.');
    }
  } catch (error) {
    console.error('Error acknowledging message:', error);
  }
};

// Run all steps in sequence
(async () => {
  // Step 1: Send the message
  await sendMessage();

  // Step 2: List and get message IDs
  const messageIds = await listMessages();

  // Step 3: Acknowledge the messages if we have any message IDs
  if (messageIds && messageIds.length > 0) {
    await acknowledgeMessages(messageIds);
  }
})();
