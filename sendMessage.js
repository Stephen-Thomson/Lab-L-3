// Import the Babbage SDK and Tokenator
const { createAction } = require("@babbage/sdk-ts");
const { Tokenator } = require("@babbage/tokenator");

// Your public identity key
const myIdentityKey = 'YOUR_PUBLIC_IDENTITY_KEY_HERE'; // Replace this with your actual key

// Initialize Tokenator with the PeerServ service URL and your identity key
const tokenator = new Tokenator({
  serviceUrl: 'https://staging-peerserv.babbage.systems', // The PeerServ instance
  identityKey: myIdentityKey
});

// Section 1: Sending a message
(async () => {
  try {
    const messageContent = {
      recipient: myIdentityKey, // Sending a message to yourself
      messageBox: 'L3_inbox',
      body: 'This is a test message!'
    };

    const result = await tokenator.sendMessage(messageContent);
    console.log('Message sent successfully:', result);

  } catch (error) {
    console.error('Error sending message:', error);
  }
})();

// Section 2: Listing incoming messages
(async () => {
  try {
    const inboxMessages = await tokenator.listMessages({ messageBox: 'L3_inbox' });
    console.log('Inbox messages:', inboxMessages);

  } catch (error) {
    console.error('Error listing messages:', error);
  }
})();

// Section 3: Acknowledging a message
(async () => {
  try {
    const messageId = 'ID_OF_THE_MESSAGE'; // Replace this with the actual message ID from the listed messages
    const acknowledgeResult = await tokenator.acknowledgeMessage({ messageId });
    console.log('Message acknowledged:', acknowledgeResult);

  } catch (error) {
    console.error('Error acknowledging message:', error);
  }
})();
