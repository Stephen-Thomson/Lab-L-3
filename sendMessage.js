// Import the Tokenator
const { Tokenator } = require("@babbage/tokenator");

// Your public identity key
const myIdentityKey = 'PIK';

// Initialize Tokenator with the PeerServ service URL and my identity key
const tokenator = new Tokenator({
  serviceUrl: 'https://staging-peerserv.babbage.systems', // The PeerServ instance
  identityKey: myIdentityKey
});

// Step 1: Send a message to myself
(async () => {
    try {
      const messageContent = {
        recipient: myIdentityKey, // Sending a message to myself
        messageBox: 'L3_inbox',
        body: 'This is a test message!'
      };
  
      const result = await tokenator.sendMessage(messageContent);
      console.log('Message sent successfully:', result);
  
    } catch (error) {
      console.error('Error sending message:', error);
    }
  })();
  
  // Step 2: List incoming messages and acknowledge the first message
  (async () => {
    try {
      // List incoming messages
      const inboxMessages = await tokenator.listMessages({ messageBox: 'L3_inbox' });
  
      if (inboxMessages.length > 0) {
        inboxMessages.forEach(message => {
          console.log('Message ID:', message.messageId);
          console.log('Message Content:', message.body);
        });
  
        // Automatically select the first message ID from the inbox
        const messageId = inboxMessages[0].messageId;
  
        // Acknowledge the first message
        const acknowledgeResult = await tokenator.acknowledgeMessage({ messageId });
        console.log('Message acknowledged:', acknowledgeResult);
  
      } else {
        console.log('No messages in the inbox.');
      }
  
    } catch (error) {
      console.error('Error processing messages:', error);
    }
  })();