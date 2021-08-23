const Discord = require('discord-rpc')
const rpc = new Discord.Client({ transport: "ipc" })
try { let config = require('../test/data.json') } catch { config = null }

let data
let category = process.argv[2]
let optional = process.argv[3] || ''
let date = new Date()

if (!config) config = require('./config.json')
if (!category) throw new Error("Usage: npm start <category: category>")

for (var type in config) {
    if (type == category) data = config[type]
}

if (!data) throw new Error("Invalid Arguments!")

rpc.on("ready", () => {
    rpc.setActivity({
        details: data.details || '  ',
        state: `${data.state || '  '} ${optional}`,
        startTimestamp: date,

        largeImageKey: data.largeImageKey || '  ',
        largeImageText: `${data.largeImageText || '  '}`,

        smallImageKey: data.smallImageKey || '  ',
        smallImageText: data.smallImageText || '  ',
    })

    console.log(`Displaying Discord Rich Presence`)
    console.log(`Details: ${data.details}`)
    console.log(`State: ${data.state}`)
    console.log(`TimeStamp: ${date}`)
})

rpc.login({clientId: data.id})