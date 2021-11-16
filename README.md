# Simple Telegram Bot

This is a very simple bot to demonstrate the Power of Bots.

## How to use this Bot

### 1. Prepare this tool

1. Install node.js
2. copy __config.sample.json__ to __config.json__

### 2. Create Telegram Group

Write -> New Group -> One Person -> Name

### 3. Get Invite Link for Class

Group Info > Add Member > Invite to Group via Link

--> Add API to __config.json__

### 4. Create a Bot

Chat to BotFather > /newbot > Name > Username

### 5. Invite Bot to Group

Search Bot > Dots > Add to Group

### 6. Allow Bot to Read Messags

Chat to BotFather > /setprivacy > Botname > Disable

### 7. Post a Message to the Group as You

Something, it does not matter

### 8. Get your ID

Browser: <https://api.telegram.org/botTOKEN/getUpdates>

```json
"from": {
"id": 2016194232,
```

--> add the id as "like" to __config.json__

### 9. You may also fill the "dislike" config

As in Step 8. Just let some other person write a message

### 10. Start Bot

`node index.js`

The Bot will now Support you :-)