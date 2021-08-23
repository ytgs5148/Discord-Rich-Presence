# What does it do?
This *small Javascript application* will help you create your own *custom Discord Rich Presence* on your Discord Profile. It is very *light-weighted* and *super easy* to use. Everything is *auto-mated* and *simple*!

# Requirements
1. node **v14.7.0** *(can still work on lower versions, but has not been tested)*
2. A text editor e.g. Visual Studio Code or **Notepad++** to configure settings
3. Basic knowledge on **.json** file types *(everything on how to configure has been explained below)*

# How to run this?
1. Open the **build** folder in the repository
2. Click on **drp.zip** file and click download
3. After unzipping it, open the directory and copy the folder path
4. Open up **cmd** and run these commands:-
```cmd
cd <folder_path you copied>
node app.js <category>
```
On how to use *category*, it is explained below in the documentation

# Configuration
To configure the application, follow the above steps on how to run the application. Once you have followed all the step and you are in the directory where the application is located, open **config.json** file using Notepad or Visual Studio Code.

Once opened, you will see something like this,

```json
{
    // "categoryName" is the category name for this status type. Use "node app.js categoryName" to run the application.
    "categoryName": {
        "id": "Read README.md to get the ID",
        // To get the client ID, follow these steps:-
        /* 1. Go to Discord Developer Portal, and create a new application with the name of the status. For e.g. if you want "Google Chrome" to be visible in your status as a title, name the bot "Google Chrome".
        2. Go to OAuth2 and copy the client ID
        */
        "details": "Title of the Discord Rich Presense",
        // Details is the sub-title of the Rich Presence. Look the next category for a actual sample Rich Presence
        "state": "Sub-Title",
        // Sub-Sub Title of the Discord Rich Presence

        "smallImageKey": "small image key",
        // To add a image, follow the following steps:-
        /* 1. Go to Discord Developer Portal, open the same application and go to "Rich Presence" and then "Art Assets" and paste a image there and copy the image tag. Make sure to name your image something simple. Once pasted, it will take upto 5 to 15 minutes for Discord to process your image. And once that is done, your image should be uploaded! Paste the image name here
        */
        "smallImageText": "image on hover text",
        // On hovering your image, the text that appears

        "largeImageKey": "main image key",
        // The same process as you did with the "smallImageKey" but this is for the large image.
        "largeImageText": "main image key on hover text"
        // The same as "smallImageText"
    },
    // The following Rich Presence is a actual sample.
    "afk": {
        "id": "878325246413922436",
        "details": "",
        "state": "",

        "smallImageKey": "",
        "smallImageText": "",

        "largeImageKey": "afk",
        "largeImageText": "AFK'ing"
    }
}
```

*To get a look on how your Discord Rich Presence will look, visit Discord Developer Portal/Rich Presence/Visualiser*

# License
ISC

