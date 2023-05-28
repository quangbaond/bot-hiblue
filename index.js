import { Client, GatewayIntentBits } from "discord.js";
import { ChatGPT } from "discord-chat-gpt";
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ],
});

const chatGpt = new ChatGPT({
    apiKey: `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`,
    orgKey: `org-fsyb0ipL7j3rqZpUJFXEuX3G`
});

client.on("ready", () => {
    console.log("Bot is ready!");
});
client.on("messageCreate", async (message) => {
    // nhắc tên bot thì mới hoạt động
    if (!message.content.includes(client.user.id)) return;
    let mesg = await message.reply({
        content: "đợi xíu đang nghĩ ...😙🤔",
    });
    let chatreply = await chatGpt
        .chat(message.content, message.author.username)
        .catch((e) => {
            console.log(e);
        });
    console.log(chatreply);
    mesg.edit({
        content: `Dưới đây là kết quả tìm kiếm của mình: \n${chatreply}`,
    });
});

client.login(`MTExMjMyODE0OTQxNDQ2NTU5Ng.GvHL0z.bTi6g1MeWlnxUozHrSTqNG5hz5OukIDTZK_Wfg`);